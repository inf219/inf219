
import { PrismaClient } from "generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const assignments = await prisma.studentAgentAssignment.findMany({
            include: {
                student: {
                    select: { id: true, name: true, email: true }
                }
            }
        });

        return NextResponse.json({ assignments }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Kunne ikke hente fra DB", details: String(error) },
            { status: 500 }
        );
    }
}