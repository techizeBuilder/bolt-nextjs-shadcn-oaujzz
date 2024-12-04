import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const isPublicPath = path === '/auth/login' || path === '/auth/register';

  // Get the token from the cookies
  const token = request.cookies.get('token')?.value || '';

  // Redirect authenticated users away from auth pages
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  // Allow access to auth pages and static files
  if (isPublicPath || path.includes('_next') || path.includes('api')) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to login
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};


// gjkfdgkd