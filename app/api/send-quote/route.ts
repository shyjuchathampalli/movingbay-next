import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const data = await req.json();

    const {
      name,
      email,
      phone,
      fromCountry,
      fromCity,
      toCountry,
      toCity,
      date,
    } = data;

    // Basic validation
    if (
      !name ||
      !email ||
      !phone ||
      !fromCountry ||
      !fromCity ||
      !toCountry ||
      !toCity ||
      !date
    ) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "MovingBay <onboarding@resend.dev>",
      to: ["tree2fame@gmail.com"], // ✅ CHANGE THIS
      subject: "New Quote Request 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#16a34a;">New Pet Relocation Lead</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <hr />

          <p><strong>Moving From:</strong> ${fromCity}, ${fromCountry}</p>
          <p><strong>Moving To:</strong> ${toCity}, ${toCountry}</p>
          <p><strong>Moving Date:</strong> ${date}</p>

          <hr />

          <p style="font-size:12px;color:#666;">
            Submitted from MovingBay website
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}