import { NextResponse } from 'next/server';
import jwtDecode from 'jwt-decode';

export function middleware(request) {
    const cookie = request.cookies.get('auth')?.value
    const userToken = request.cookies.get('token')?.value

    const url = request.nextUrl

    if (url.pathname.startsWith('/dashboard')) {

        // console.log(tokenExp)
        // console.log('now', now1)
        if (cookie === undefined) {
            return NextResponse.redirect(new URL('/', url))
        }

        else if (cookie) {
            const tokenExp = new Date(jwtDecode(userToken).exp * 1000)
            const currentTime = new Date()
            if (currentTime > tokenExp) {
                request.cookies.delete('auth')
                request.cookies.delete('token')
                request.cookies.delete('token')
                const response = NextResponse.redirect(new URL('/', url))
                response.cookies.delete('auth')
                response.cookies.delete('token')

                return response;
            }
        }
    }
}