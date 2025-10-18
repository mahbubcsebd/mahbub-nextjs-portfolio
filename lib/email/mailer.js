import adminNotificationTemplate from '@/components/email-template/adminNotificationTemplate';
import userConfirmationTemplate from '@/components/email-template/userConfirmationTemplate';
import nodemailer from 'nodemailer';
import { emailConfig, smtpConfig } from './config';

/**
 * Create and verify email transporter
 */
export const createTransporter = async () => {
  const transporter = nodemailer.createTransport(smtpConfig);

  try {
    await transporter.verify();
    console.log('✅ Email transporter verified successfully');
    return transporter;
  } catch (error) {
    console.error('❌ Email transporter verification failed:', error.message);
    throw new Error('Email configuration error');
  }
};

/**
 * Send notification email to admin
 */
export const sendAdminNotification = async (transporter, formData) => {
  const { firstName, lastName, email, phone, message } = formData;

  const emailTemplate = adminNotificationTemplate({
    firstName,
    lastName,
    email,
    phone,
    message,
  });

  const mailOptions = {
    from: emailConfig.user,
    to: emailConfig.user,
    subject: emailTemplate.subject,
    html: emailTemplate.html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Admin notification sent successfully');
  } catch (error) {
    console.error('❌ Failed to send admin notification:', error.message);
    throw error;
  }
};

/**
 * Send confirmation email to user
 */
export const sendUserConfirmation = async (transporter, formData) => {
  const { firstName, lastName, email, message } = formData;

  const emailTemplate = userConfirmationTemplate({
    firstName,
    lastName,
    message,
  });

  const mailOptions = {
    from: emailConfig.user,
    to: email,
    subject: emailTemplate.subject,
    html: emailTemplate.html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ User confirmation sent successfully');
  } catch (error) {
    console.error('❌ Failed to send user confirmation:', error.message);
    throw error;
  }
};

/**
 * Send both admin notification and user confirmation
 */
export const sendContactFormEmails = async (formData) => {
  // Validate email configuration
  if (!emailConfig.user || !emailConfig.password) {
    throw new Error('Email credentials not configured');
  }

  // Create transporter
  const transporter = await createTransporter();

  // Send both emails
  await Promise.all([
    sendAdminNotification(transporter, formData),
    sendUserConfirmation(transporter, formData),
  ]);

  console.log('✅ email sent successfully');
};
