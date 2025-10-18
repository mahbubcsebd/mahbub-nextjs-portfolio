const adminNotificationTemplate = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => {
  return {
    subject: `🔔 New Contact: ${firstName} ${lastName}`,
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
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background: #f9fafb;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #10b981;
            margin-bottom: 5px;
            font-size: 14px;
          }
          .value {
            background: white;
            padding: 12px;
            margin-top: 5px;
            border-left: 4px solid #10b981;
            border-radius: 4px;
          }
          .value a {
            color: #10b981;
            text-decoration: none;
          }
          .value a:hover {
            text-decoration: underline;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #6b7280;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Full Name:</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>

            <div class="field">
              <div class="label">Email Address:</div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>

            <div class="field">
              <div class="label">Phone Number:</div>
              <div class="value">${phone}</div>
            </div>

            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>

          <div class="footer">
            <p>This email was sent from your portfolio contact form</p>
            <p>Timestamp: ${new Date().toLocaleString('en-US', {
              timeZone: 'Asia/Dhaka',
              dateStyle: 'full',
              timeStyle: 'long',
            })}</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };
};

export default adminNotificationTemplate;
