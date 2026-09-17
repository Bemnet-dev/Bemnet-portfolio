import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const { name, email, message, service } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY?.trim()
    if (!apiKey) {
      console.warn('RESEND_API_KEY is not set in environment variables.')
      return NextResponse.json(
        {
          error: 'Resend API key is not configured. Please add RESEND_API_KEY in your environment settings.',
          code: 'MISSING_API_KEY',
        },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)

    // Recipient email - prioritize configured CONTACT_EMAIL, fallback to portfolio emails
    const recipient = process.env.CONTACT_EMAIL?.trim() || 'bemnet.important@gmail.com'

    // Sender - Resend free sandbox requires onboarding@resend.dev unless a custom domain is verified
    const sender = process.env.RESEND_FROM_EMAIL?.trim() || 'Portfolio Contact <onboarding@resend.dev>'

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name} [${service || 'General'}]`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #6366f1; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">New Inquiry from Portfolio</h2>
            <p style="color: #64748b; font-size: 14px; margin: 4px 0 0 0;">Received via Bemnet's Portfolio Website</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 90px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Service:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;"><span style="display: inline-block; padding: 2px 8px; background-color: #f1f5f9; border-radius: 4px; font-size: 13px;">${service || 'General Inquiry'}</span></td>
            </tr>
          </table>

          <div style="margin-top: 16px;">
            <h3 style="color: #0f172a; font-size: 15px; margin: 0 0 8px 0;">Message</h3>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #334155; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">
${message}
            </div>
          </div>

          <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; text-align: center;">
            Reply directly to this email to respond to <strong>${name}</strong> (${email}).
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend send error:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to send email via Resend.', code: error.name },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err: unknown) {
    console.error('Resend route unexpected error:', err)
    const message = err instanceof Error ? err.message : 'Internal Server Error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
