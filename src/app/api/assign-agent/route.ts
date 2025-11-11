import { auth } from "@/auth";
import { PrismaClient } from "generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const session = await auth();
    const userRole = session?.user?.role;

    if (userRole !== "TEACHER" && userRole !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const body = await req.json();
    const { studentId, agentId, assign, agentName } = body;

    if (!studentId || !agentId || typeof assign !== "boolean") {
        return NextResponse.json({ error: "Missing or invalid parameters" }, { status: 400 });
    }

    try {
        if (assign) {
            // Assign: Create if not exists (@@unique prevents duplicates)
            await prisma.studentAgentAssignment.upsert({
                where: { studentId_agentId: { studentId: parseInt(studentId), agentId } },
                update: { agentName },
                create: { studentId: parseInt(studentId), agentId, agentName },
            });
        } else {
            // Unassign: Delete if exists
            await prisma.studentAgentAssignment.deleteMany({
                where: { studentId: parseInt(studentId), agentId },
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error updating assignment:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}