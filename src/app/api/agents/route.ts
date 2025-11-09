export const runtime = 'nodejs';
import { NextRequest, NextResponse } from "next/server";
// import { agentService } from "@/lib/services/agentService";
// import { userService } from "@/lib/services/userService";

// const agentService = new AgentService();
// const userService = new UserService();

export async function POST(req: NextRequest) {
    const body = await req.json();

    const API_KEY = process.env.ELEVENLABS_API_KEY;


    const res = await fetch('https://api.elevenlabs.io/v1/convai/agents/create', {
        method: 'POST',
        headers: {
            'xi-api-key': API_KEY || '',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    console.log('POST config: ', body)
    if (!res.ok) {
        const errText = await res.text();
        return NextResponse.json({error: 'Failed to create agent', details: errText}, {status: 500});
    }

    const data = await res.json();
    return NextResponse.json({ agentID: data.agent_id });
}