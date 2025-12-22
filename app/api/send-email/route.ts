import { Resend } from "resend";
import WellcomeTemplate from "@/emails/WellcomeTemplate";
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "naziyausmantwaiba@gmail.com",
    subject: "Welcome to Our Service!",
    react: WellcomeTemplate({ name: "Naziya" }),
  });
    return NextResponse.json("Email sent successfully");
}
