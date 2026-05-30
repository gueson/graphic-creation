import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
});

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const staticPrefixes = ['/images/', '/_next/', '/favicon.ico'];
  if (staticPrefixes.some(prefix => path.startsWith(prefix))) {
    return NextResponse.next();
  }
  
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|images|_next|favicon.ico).*)',
  ],
};
