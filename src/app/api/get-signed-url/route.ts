import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch(
            `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${process.env.NEXT_PUBLIC_AGENT_ID}`,
            {
                headers: {
                    'xi-api-key': process.env.ELEVENLABS_API_KEY!,
                },
            }
        );
        console.log(response);
        console.log(process.env.ELEVENLABS_API_KEY)

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
