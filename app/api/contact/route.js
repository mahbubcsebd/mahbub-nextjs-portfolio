import { sendContactFormEmails } from '@/lib/email/mailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('📨 Contact form API called');

  try {
    // Parse request body
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return NextResponse.json(
        {
          success: false,
          error: 'All fields are required',
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address',
        },
        { status: 400 }
      );
    }

    // Send emails
    console.log('📧 Sending emails...');
    await sendContactFormEmails({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    console.log('✅ Contact form processed successfully');

    return NextResponse.json(
      {
        success: true,
        message:
          'Your message has been sent successfully! Check your email for confirmation.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error.message);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again later.',
        details:
          process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// Handle GET requests
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      message: 'Contact API is working. Use POST to send messages.',
    },
    { status: 200 }
  );
}
