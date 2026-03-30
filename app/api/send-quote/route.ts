import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, phone, from, to, date } = data;

    await resend.emails.send({
      from: "MovingBay <onboarding@resend.dev>",
      to: ["your@email.com"], // 🔴 YOUR EMAIL HERE
      subject: "New Quote Request 🚀",
      html: `
        <h2>New Lead from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
}