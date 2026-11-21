import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  generateWelcomeEmailHtml,
  generateWelcomeEmailText,
} from "../../lib/emailTemplate";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || !body.email || typeof body.email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required to subscribe." },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    const concerns: string[] = Array.isArray(body.concerns)
      ? body.concerns.filter((c: unknown) => typeof c === "string")
      : [];

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey.trim() === "" || apiKey === "re_your_api_key_here") {
      return NextResponse.json(
        {
          error:
            "Resend API key is not configured. Please add RESEND_API_KEY to your .env.local file.",
        },
        { status: 500 }
      );
    }

    const fromAddress =
      process.env.RESEND_FROM_EMAIL || "GLOWORA <onboarding@resend.dev>";

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: "Welcome to The Glowora Society — Your 15% Ritual Code",
      html: generateWelcomeEmailHtml({
        recipientEmail: email,
        concerns,
        discountCode: "GLOW15",
      }),
      text: generateWelcomeEmailText({
        recipientEmail: email,
        concerns,
        discountCode: "GLOW15",
      }),
    });

    if (error) {
      return NextResponse.json(
        {
          error: error.message || "Failed to dispatch email via Resend provider.",
          name: error.name,
        },
        { status: 502 }
      );
    }

    if (!data || !data.id) {
      return NextResponse.json(
        { error: "Resend did not confirm email delivery ID." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      emailId: data.id,
      recipient: email,
      discountCode: "GLOW15",
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unexpected server error occurred.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
