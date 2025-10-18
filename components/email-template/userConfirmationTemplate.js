const userConfirmationTemplate = ({ firstName, lastName, message }) => {
  return {
    subject: '✅ Thank you for contacting us!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: #10b981;
            color: white;
            padding: 30px 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 26px;
          }
          .content {
            background: #f9fafb;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-radius: 0 0 8px 8px;
          }
          .content p {
            margin: 15px 0;
            font-size: 15px;
          }
          .message-box {
            background: white;
            padding: 20px;
            border-left: 4px solid #10b981;
            margin: 25px 0;
            border-radius: 4px;
          }
          .message-box strong {
            color: #10b981;
            font-size: 16px;
          }
          .message-box p {
            margin-top: 10px;
            color: #4b5563;
          }
          .signature {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 13px;
          }
          .emoji {
            font-size: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Reaching Out! <span class="emoji">🙏</span></h2>
          </div>

          <div class="content">
            <p>Dear <strong>${firstName} ${lastName}</strong>,</p>

            <p>Thank you for contacting me through my portfolio website! I truly appreciate you taking the time to reach out.</p>

            <p>I have received your message and will review it carefully. I'll get back to you as soon as possible.</p>

            <div class="message-box">
              <strong>Your message:</strong>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>

            <p><strong>What happens next?</strong></p>
            <p>
              <span class="emoji">⏱️</span> I typically respond within <strong>24-48 hours</strong><br/>
              <span class="emoji">📧</span> You'll receive a personal reply to this email address<br/>
              <span class="emoji">💬</span> If your inquiry is urgent, feel free to mention it in a follow-up email
            </p>

            <div class="signature">
              <p>Best regards,<br/>
              <strong>Mahbubur Rahman</strong><br/>
              Full Stack Developer<br/>
              📍 Dhaka, Bangladesh<br/>
              🌐 <a href="https://mahbub-dev.vercel.app" style="color: #10b981; text-decoration: none;">mahbub-dev.vercel.app</a>
              </p>
            </div>
          </div>

          <div class="footer">
            <p>This is an automated confirmation email.</p>
            <p>If you didn't submit a contact form, please ignore this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

export default userConfirmationTemplate;
