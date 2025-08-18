
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { theme } = await request.json();
  const response = NextResponse.json({ success: true });
  response.cookies.set("theme", theme, {
    httpOnly: false,
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });
  return response;
}
