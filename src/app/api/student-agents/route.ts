
import { auth } from "@/auth";
import { PrismaClient } from "generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const session = await auth()
        console.log("session", session);
        const studentId = Number(session?.user.id);
        console.log("Student ID:", studentId);

        // if (!studentId) {
        //return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        //}
        const assignments = await prisma.studentAgentAssignment.findMany({
            where: { studentId },
            select: {
                id: true, // include ID so you can use it as React key
                studentId: true,
                agentId: true,
                student: {
                    select: { id: true, name: true, email: true },
                },
            },
        });

        return NextResponse.json({ assignments }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Kunne ikke hente fra databasen", details: String(error) },
            { status: 500 }
        );
    }
}