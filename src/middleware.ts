import { NextRequest, NextResponse } from 'next/server';
import { getLocaleUrlToRedirect } from './utils/i18nConfig';

export function middleware(request: NextRequest) {
  const newLocaleUrl = getLocaleUrlToRedirect(request);

  if (newLocaleUrl) {
    return NextResponse.redirect(newLocaleUrl);
  }
}

export const config = {
  matcher:
    '/((?!api|_next/static|_next/image|images|logos|docs|favicon.ico).*)',
};
