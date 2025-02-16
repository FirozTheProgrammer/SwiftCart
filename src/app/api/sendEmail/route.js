import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  // Set up the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email from environment variables
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  try {
    // Send the email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender's email
      to: process.env.EMAIL_TO, // Your receiving email (to where emails are sent)
      subject: `New message from ${name}`, // Email subject
      text: message, // Text body
      html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p style="text-transfrom:capitalize;"><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong> ${message}</p>`, // HTML content
    });

    return new Response("Email sent successfully!", {
      status: 200,
      statusText: JSON.stringify(info),
    });
  } catch (error) {
    return new Response("Failed to send email", {
      status: 500,
      statusText: "Failed to send email",
    });
  }
}
