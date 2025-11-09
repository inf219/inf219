import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt";


//Kjører for hver forespørsel til de beskyttede rutene
export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const token = await getToken({ 
        req: request,
        secret: process.env.NEXTAUTH_SECRET});

    if (!token) {
        console.log("Ingen session, omdirigerer til hjem");
        return NextResponse.redirect(new URL("/", request.url));
    }

    const userRole = token.role as string

    if (userRole === 'ADMIN') {
        return NextResponse.next();
    }

    // Sjekk lærer-sider
    if (pathname.startsWith('/home/teacher') && (userRole !== 'TEACHER')) {
        console.log("Bruker er ikke lærer, omdirigerer til hjem");
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Sjekk student-sider
    if (pathname.startsWith('/home/student') && userRole !== 'STUDENT') {
        console.log("Bruker er ikke student, omdirigerer til hjem");
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();

}


//Hvilke ruter skal middleware kjøre på
export const config = {
    matcher: [
        "/home/teacher/:path*",
        "/home/student/:path*",
        "/api/auth/signin/:path",
    ]
}