import { NextResponse } from 'next/server';

export function middleware(request) {
    let cookie = request.cookies.get('auth')?.value;
    let url = request.nextUrl

    if(url.pathname.startsWith('/dashboard')){
        if(cookie===undefined){
            return NextResponse.redirect(new URL('/', url))
        }
    }
}