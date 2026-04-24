import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Clinic frontend and route handlers are running.",
    timestamp: new Date().toISOString(),
  });
}
