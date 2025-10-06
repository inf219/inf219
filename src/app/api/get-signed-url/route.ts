import { NextRequest, NextResponse } from 'next/server'; // Update import to include NextRequest

export async function GET(request: NextRequest) {  // Use NextRequest to access query params
    const agent_id = request.nextUrl.searchParams.get('agent_id');  // Get agent_id from query

    if (!agent_id) {
        return NextResponse.json({ error: 'Agent ID er påkrevd' }, { status: 400 });
    }

    try {
        const response = await fetch(
            `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${agent_id}`,  // Use dynamic agent_id
            {
                headers: {
                    'xi-api-key': process.env.ELEVENLABS_API_KEY!,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Failed to get signed URL');
        }

        const data = await response.json();
        return NextResponse.json({ signedUrl: data.signed_url });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to generate signed URL' },
            { status: 500 }
        );
    }
}
