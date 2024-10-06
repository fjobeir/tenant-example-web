import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;
  const subdomain = hostname.split(".")[0];

  // Handling tenant detection through subdomains
  if (subdomain !== "www" && subdomain !== "example") {
    // Store tenant information in request headers or URL, depending on how you access it in your app
    request.headers.set("x-tenant", subdomain);
  }

  // Run the locale detection middleware to ensure correct redirection
  const response = intlMiddleware(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(nl|en)/:path*"],
};
