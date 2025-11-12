export const runtime = 'nodejs';
import { NextRequest, NextResponse } from "next/server";
import { AgentService } from "@/lib/services/agentService";
import { UserService } from "@/lib/services/userService";
import { auth } from "@/auth";

const agentService = new AgentService();
const userService = new UserService();

export async function GET(req: NextRequest) {
    try {
        //Sjekk autentisering
        const session = await auth();
        
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        //Hent bruker
        const user = await userService.getUserByEmail(session.user.email as string);
        
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        //Sjekk at bruker er lærer eller admin
        if (user.role !== 'TEACHER' && user.role !== 'ADMIN') {
            return NextResponse.json(
                { error: "Only teachers and admins can access this" },
                { status: 403 }
            );
        }

        //Hent agenter fra ElevenLabs via service
        const data = await agentService.getAllAgentsFromElevenlabs();

        //Returner data
        return NextResponse.json(data);

    } catch (error: any) {
        console.error("Error fetching agents from ElevenLabs:", error);
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}