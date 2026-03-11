const rateLimitStore = new Map<string, number[]>()

type ContactPayload = {
  name?: string
  phone?: string
  service?: string
  message?: string
  company?: string
}

type Env = {
  MAILGUN_API_KEY: string
  MAILGUN_DOMAIN: string
  MAILGUN_FROM: string
  MAILGUN_TO: string
  RATE_LIMIT_WINDOW_MS?: string
  RATE_LIMIT_MAX?: string
}

const jsonResponse = (data: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  })

const getRateLimitSettings = (env: Env) => {
  const windowMs = Number(env.RATE_LIMIT_WINDOW_MS ?? 600000)
  const max = Number(env.RATE_LIMIT_MAX ?? 3)

  return {
    windowMs: Number.isFinite(windowMs) && windowMs > 0 ? windowMs : 600000,
    max: Number.isFinite(max) && max > 0 ? max : 3,
  }
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  if (!env.MAILGUN_API_KEY || !env.MAILGUN_DOMAIN || !env.MAILGUN_FROM || !env.MAILGUN_TO) {
    return jsonResponse({ ok: false, error: 'Missing Mailgun configuration.' }, 500)
  }

  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid JSON payload.' }, 400)
  }

  const name = payload.name?.trim() ?? ''
  const phone = payload.phone?.trim() ?? ''
  const service = payload.service?.trim() ?? ''
  const message = payload.message?.trim() ?? ''
  const company = payload.company?.trim() ?? ''

  if (company) {
    return jsonResponse({ ok: true })
  }

  if (!name || !phone || !service || !message) {
    return jsonResponse({ ok: false, error: 'Missing required fields.' }, 400)
  }

  const { windowMs, max } = getRateLimitSettings(env)
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown'
  const now = Date.now()
  const timestamps = rateLimitStore.get(ip) ?? []
  const recent = timestamps.filter((timestamp) => now - timestamp < windowMs)

  if (recent.length >= max) {
    return jsonResponse({ ok: false, error: 'Too many requests. Try again later.' }, 429)
  }

  recent.push(now)
  rateLimitStore.set(ip, recent)

  const subject = `Tayf Teknik İletişim Formu: ${name}`
  const text = [
    'Yeni iletişim talebi alındı.',
    '',
    `Ad Soyad: ${name}`,
    `Telefon: ${phone}`,
    `Hizmet: ${service}`,
    'Mesaj:',
    message,
  ].join('\n')
  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; color: #0f172a;">Tayf Teknik İletişim Formu</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 520px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Ad Soyad</td>
          <td style="padding: 8px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Telefon</td>
          <td style="padding: 8px 0;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Hizmet</td>
          <td style="padding: 8px 0;">${service}</td>
        </tr>
      </table>
      <div style="margin-top: 16px;">
        <p style="margin: 0 0 8px; font-weight: bold;">Mesaj</p>
        <p style="margin: 0; white-space: pre-line;">${message}</p>
      </div>
    </div>
  `.trim()

  const body = new URLSearchParams({
    from: env.MAILGUN_FROM,
    to: env.MAILGUN_TO,
    subject,
    text,
    html,
  })

  const authHeader = `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}`
  const response = await fetch(`https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  if (!response.ok) {
    const errorText = await response.text()
    return jsonResponse({ ok: false, error: 'Mailgun request failed.', details: errorText }, 502)
  }

  return jsonResponse({ ok: true })
}
