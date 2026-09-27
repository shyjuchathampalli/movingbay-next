import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const data = await req.json();

    const {
      who,
      name,
      company,
      email,
      phone,
      movingFrom,
      movingTo,
      services,
      timeline,
      message,
    } = data;

    // Basic validation
    if (!name || !email || !movingFrom || !movingTo) {
      return Response.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const serviceList =
      Array.isArray(services) && services.length
        ? services.join(", ")
        : "Not specified";

    await resend.emails.send({
      from: "MovingBay <biju@movingbay.com>",
      to: ["info@movingbay.com"],
      subject: "New Relocation Enquiry",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #172b3a;">
          
          <h2 style="color:#16a34a;">
            New Relocation Enquiry
          </h2>

          <p>
            <strong>Enquiry from:</strong> ${who}
          </p>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          ${
            company
              ? `<p><strong>Company:</strong> ${company}</p>`
              : ""
          }

          <p>
            <strong>Email:</strong> ${email}
          </p>

          ${
            phone
              ? `<p><strong>Phone:</strong> ${phone}</p>`
              : ""
          }

          <hr />

          <p>
            <strong>Moving From:</strong> ${movingFrom}
          </p>

          <p>
            <strong>Moving To:</strong> ${movingTo}
          </p>

          <p>
            <strong>Services Required:</strong> ${serviceList}
          </p>

          <p>
            <strong>Expected Timeline:</strong> ${timeline}
          </p>

          ${
            message
              ? `
                <hr />
                <p><strong>Message:</strong></p>
                <p>${message}</p>
              `
              : ""
          }

          <hr />

          <p style="font-size:12px;color:#666;">
            Submitted from the MovingBay website.
          </p>

        </div>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to send enquiry",
      },
      { status: 500 }
    );
  }
}