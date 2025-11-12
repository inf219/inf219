export const runtime = 'nodejs';
import { NextRequest, NextResponse } from "next/server";
import { AgentService } from "@/lib/services/agentService";
import { CreateAgentDto } from "@/lib/dto/agentDto";
import { UserService } from "@/lib/services/userService";
import { auth } from "@/auth";

const agentService = new AgentService();
const userService = new UserService();

//API route for å opprette en agent! Kalles i frontend (page), med body, konverteres til CreateAgentDto.
//Sendes videre til AgentService som håndterer kall til ElevenLabs og database.
export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        //Hent bruker fra databasen, send feil dersom den ikke finnes
        const user = await userService.getUserByEmail(session.user.email);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        //Sjekk at brukeren har tillatelse til å opprette en agent
        if (user.role !== 'TEACHER' && user.role !== 'ADMIN') {
            return NextResponse.json({ error: "Only teachers or admins can create agents" }, { status: 403 });
        }

        //Hent body fra request og parse til CreateAgentDto
        const body: CreateAgentDto = await req.json();

        //Valider input (Her må vi kanskje legge til flere felt/endre)
        if (!body.name || !body.conversation_config) {
            return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
        );
        }

        //kall service for å faktisk opprette agenten (lagrer også i databasen)
        const createdAgent = await agentService.createAgent(
            body, user.id
        );

        //Returner suksess med den opprettede agenten
        return NextResponse.json(
            {success: true, agent: createdAgent },
            { status: 201 }
        )
    }
    //Håndter feil
    catch (error: any) {
        console.error("Error in creating agent:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, 
            { status: 500 });
    }

}
    

//Henter alle agenter som er lagret i databasen
export async function GET() {
        try {
            const session = await auth();
            if (!session?.user?.email) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
            }

            const user = await userService.getUserByEmail(session.user.email);

            if (!user) {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
            }

            const agents = await agentService.getAgentsForUser(user.id, user.role);

            return NextResponse.json({ agents }, { status: 200 });

        } catch (error: any) {
            console.error("Error in getting agents:", error);
            return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
        }
}
