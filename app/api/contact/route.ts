import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  serviceCategory: z.string().min(1, "Please select a service category"),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(10, "Project description must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // In a production environment, you would forward this to your internal CRM,
    // ticketing system, or transactional email service (e.g. Resend, SendGrid).
    // Here we safely simulate successful verification and logging.
    console.log("[NEXVISION INQUIRY RECEIVED]:", {
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully recorded by NEXVISION engineering gateway.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error occurred while processing inquiry." },
      { status: 500 }
    );
  }
}
