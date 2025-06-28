import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// Send message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('❌ Telegram Error:', error.response?.data || error.message);
    return false;
  }
}

// Generate HTML email
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Send email using Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: `"Portfolio" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('❌ Email Error:', error.message);
    return false;
  }
}

// POST handler
export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chat_id) {
      return NextResponse.json({
        success: false,
        message: 'Telegram token or chat ID is missing.',
      }, { status: 400 });
    }

    const formattedMessage = `📬 New message from *${name}*\n\n📧 Email: ${email}\n📝 Message:\n${userMessage}`;

    // Send both Telegram and Email
    const [telegramSuccess, emailSuccess] = await Promise.all([
      sendTelegramMessage(token, chat_id, formattedMessage),
      sendEmail(payload, formattedMessage),
    ]);

    // Handle result cases
    if (telegramSuccess && emailSuccess) {
      return NextResponse.json({
        success: true,
        message: '✅ Message and email sent successfully!',
      }, { status: 200 });
    }

    if (!telegramSuccess && !emailSuccess) {
      return NextResponse.json({
        success: false,
        message: '❌ Both Telegram and Email failed.',
      }, { status: 500 });
    }

    if (!telegramSuccess) {
      return NextResponse.json({
        success: false,
        message: '⚠️ Email sent, but failed to send Telegram message.',
      }, { status: 500 });
    }

    return NextResponse.json({
      success: false,
      message: '⚠️ Telegram sent, but failed to send Email.',
    }, { status: 500 });

  } catch (error) {
    console.error('❌ API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: '🔥 Server error occurred.',
    }, { status: 500 });
  }
}
