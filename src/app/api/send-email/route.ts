import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function getTransporter() {
  const user = process.env.GMAIL_USER?.trim()
  // Google App Passwords often contain spaces when copied (e.g. "abcd efgh ijkl mnop")
  const pass = process.env.GMAIL_PASSWORD?.trim().replace(/\s+/g, '')

  if (!user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const { to, from, name, service, message } = await request.json()

    // Validate required fields
    if (!from || !name || !message) {
      return NextResponse.json(
        { error: 'Please provide your name, email, and message.' },
        { status: 400 }
      )
    }

    const transporter = getTransporter()
    const targetRecipient = process.env.CONTACT_EMAIL || to || 'bemnet.important@gmail.com'

    if (!transporter) {
      console.warn('GMAIL_USER or GMAIL_PASSWORD not set in environment:', {
        from,
        name,
        service,
        message,
      })
      return NextResponse.json(
        {
          success: false,
          error: 'Email service credentials are not configured. Please configure GMAIL_USER and GMAIL_PASSWORD in settings.',
          code: 'CREDENTIALS_MISSING',
          recipient: targetRecipient,
        },
        { status: 503 }
      )
    }

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER?.trim()}>`,
      to: targetRecipient,
      replyTo: from,
      subject: `New Contact Form Submission from ${name} [${service || 'General'}]`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #111827; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #2563eb; padding: 24px; text-align: left;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Contact Form Message</h2>
            <p style="color: #bfdbfe; margin: 4px 0 0 0; font-size: 14px;">Received from your portfolio website</p>
          </div>
          
          <div style="padding: 24px;">
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 6px 0; font-size: 14px;"><strong>Sender Name:</strong> ${name}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Reply-To Email:</strong> <a href="mailto:${from}" style="color: #2563eb;">${from}</a></p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Service of Interest:</strong> ${service || 'Not specified'}</p>
            </div>

            <div style="background-color: #ffffff; border-left: 4px solid #2563eb; padding: 16px; margin-bottom: 20px; background-color: #f8fafc; border-radius: 4px;">
              <h4 style="margin: 0 0 8px 0; color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</h4>
              <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0 16px 0;" />
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Click "Reply" in your email client to directly reply to ${from}.
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error: unknown) {
    const err = error as { code?: string; message?: string; responseCode?: number }
    console.error('Error sending email via Gmail SMTP:', err)

    let helpfulMessage = 'Failed to send message via email server.'
    let errorCode = err.code || 'UNKNOWN'

    if (err.code === 'EAUTH' || err.responseCode === 535) {
      helpfulMessage =
        'Gmail authentication failed. Google requires a 16-character Google App Password (not your standard Google account password). Please check your GMAIL_PASSWORD configuration.'
      errorCode = 'BAD_CREDENTIALS'
    }

    return NextResponse.json(
      {
        success: false,
        error: helpfulMessage,
        code: errorCode,
        details: err.message || undefined,
      },
      { status: 500 }
    )
  }
}

