import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log(`nextUrl, ${JSON.stringify(req.nextUrl)}`);
  console.log(`url, ${JSON.stringify(req.url)}`);

  return;
}
