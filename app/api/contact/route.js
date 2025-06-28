import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ✅ Log env variables for debugging (REMOVE in production)
console.log("📧 EMAIL_ADDRESS:", process.env.EMAIL_ADDRESS);
console.log("🔑 GMAIL_PASSKEY:", process.env.GMAIL_PASSKEY ? "✔️ Present" : "❌ Missing");
console.log("🤖 TELEGRAM_BOT_TOKEN:", process.env.TELEGRAM_BOT_TOKEN ? "✔️ Present" : "❌ Missing");
console.log("💬 TELEGRAM_CHAT_ID:", process.env.TELEGRAM_CHAT_ID ? "✔️ Present" : "❌ Missing");

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

// Send Telegram Message
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      chat_id,
      text: message,
      parse_mode: 'Markdown', // Optional: bold text, etc.
    });
    return res.data.ok;
  } catch (error) {
    console.error('❌ Telegram Error:', error.response?.data || error.message);
    return false;
  }
}

// Email template (HTML)
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px;">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to this message.</p>
    </div>
  </div>
`;

// Send email
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `📩 New Message From ${name}`,
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

    // Validate presence of required variables
    if (!token || !chat_id || !process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY) {
      return NextResponse.json({
        success: false,
        message: '❌ One or more environment variables are missing.',
      }, { status: 500 });
    }

    const formattedMessage = `📬 *New message from ${name}*\n\n📧 Email: ${email}\n📝 Message:\n${userMessage}`;

    // Send Telegram and Email in parallel
    const [telegramSuccess, emailSuccess] = await Promise.all([
      sendTelegramMessage(token, chat_id, formattedMessage),
      sendEmail(payload, formattedMessage),
    ]);

    // Success
    if (telegramSuccess && emailSuccess) {
      return NextResponse.json({
        success: true,
        message: '✅ Message and email sent successfully!',
      }, { status: 200 });
    }

    // Partial failures
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
    console.error('🔥 API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: '❌ Server error occurred.',
    }, { status: 500 });
  }
}
