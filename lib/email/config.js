export const emailConfig = {
  user: process.env.NEXT_PUBLIC_EMAIL_USER,
  password: process.env.NEXT_PUBLIC_EMAIL_PASS,
};

export const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.password,
  },
  tls: {
    rejectUnauthorized: false,
  },
};
