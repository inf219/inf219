import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth';


//Kjører for hver forespørsel til de beskyttede rutene
export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const session = await auth();

    if (!session) {
        console.log("Ingen session, omdirigerer til hjem");
        return NextResponse.redirect(new URL("/", request.url));
    }
    
    // Sjekk lærer-sider
    if (pathname.startsWith('/home/teacher') && session.user.role !== 'TEACHER') {
        console.log("Bruker er ikke lærer, omdirigerer til hjem");
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Sjekk student-sider
    if (pathname.startsWith('/home/student') && session.user.role !== 'STUDENT') {
        console.log("Bruker er ikke student, omdirigerer til hjem");
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();

}

const handleTeacherAccess = (request: NextRequest, session: any) => {
    if (session.user.role !== 'TEACHER') {
        console.log("Bruker er ikke lærer, omdirigerer til hjem");
        return NextResponse.redirect(new URL("/", request.url));
    }
}

const handleStudentAccess = (request: NextRequest, session: any) => {
    if (session.user.role !== 'STUDENT') {
        console.log("Bruker er ikke student, omdirigerer til hjem");
        return NextResponse.redirect(new URL("/", request.url));
    }
}

//Hvilke ruter skal middleware kjøre på
export const config = {
    matcher: [
        "/home/teacher/:path*",
        "/home/student/:path*",
        "/api/auth/signin/:path",
    ]
}