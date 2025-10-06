import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const API_KEY = process.env.ELEVENLABS_API_KEY;

    if (!API_KEY) {
        return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    try {
        const res = await fetch("https://api.elevenlabs.io/v1/convai/agents", {
            method: "GET",
            headers: {
                "xi-api-key": API_KEY,
            },
        });

        if (!res.ok) {
            const errText = await res.text();
            return NextResponse.json({ error: "Failed to fetch agents", details: errText }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching agents:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}