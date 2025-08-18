import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const pathSegments: string[] = url.pathname.split("/").filter((segment) => segment);
  console.log(`Middleware: url=${request.url}, pathSegments=${pathSegments}`);

  // Check for nested locales (e.g., /sv/en/, /en/sv/)
  if (
    pathSegments.length > 1 &&
    (routing.locales as unknown as string[]).includes(pathSegments[0]) &&
    (routing.locales as unknown as string[]).includes(pathSegments[1])
  ) {
    const newLocale = pathSegments[1];
    const newPath = `/${newLocale}${pathSegments.slice(2).join("/") || ""}`;
    console.log(`Middleware: Redirecting nested locale ${url.pathname} to ${newPath}`);
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Apply next-intl middleware
  const nextIntlMiddleware = createMiddleware({
    ...routing,
    defaultLocale: "en",
    localeDetection: false,
  });

  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};