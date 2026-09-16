import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function getTransporter() {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_PASSWORD

  if (!user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    service: 'gmail',
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
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const transporter = getTransporter()

    if (!transporter) {
      // In production or demo environments without SMTP credentials,
      // log and respond cleanly so the app doesn't crash
      console.warn('GMAIL_USER or GMAIL_PASSWORD not set. Message logged:', {
        from,
        name,
        service,
        message,
      })
      return NextResponse.json(
        {
          success: true,
          message: 'Message received! (Email credentials not configured in environment, logged successfully)',
        },
        { status: 200 }
      )
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: to,
      replyTo: from,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${from}</p>
            <p style="margin: 10px 0;"><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #555; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <p style="color: #999; font-size: 12px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
