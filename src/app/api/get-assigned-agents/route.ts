import { auth } from "@/auth";
import { PrismaClient } from "generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const session = await auth();
    const userRole = session?.user?.role;

    // Only teachers/admins can access this
    if (userRole !== "TEACHER" && userRole !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    // getting the studentId
    const studentId = req.nextUrl.searchParams.get("studentId");
    // if there is no student-id, error
    if (!studentId) {
        return NextResponse.json({ error: "Missing studentId" }, { status: 400 });
    }

    try {
        // try to find the agetns that are already assigned to the student
        const assignments = await prisma.studentAgentAssignment.findMany({
            where: { studentId: parseInt(studentId) },
            select: { agentId: true },
        });

        const assignedAgentIds = assignments.map((a) => a.agentId);
        return NextResponse.json({ assignedAgentIds });
    } catch (error) {
        console.error("Error fetching assignments:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}