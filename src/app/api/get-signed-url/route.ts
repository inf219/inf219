import { auth } from '@/auth';
import { AgentService } from '@/lib/services/agentService';
import { UserService } from '@/lib/services/userService';
import { NextRequest, NextResponse } from 'next/server'; // Update import to include NextRequest



const agentService = new AgentService();
const userService = new UserService();


export async function GET(request: NextRequest) {  // Use NextRequest to access query params
    try {
        //Sjekk at brukeren er logget inn
        const session = await auth();
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        //Hent brukeren fra databasen
        const user = await userService.getUserByEmail(session.user.email as string);
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        //Hent agent_id fra query params
        const agent_id = request.nextUrl.searchParams.get('agent_id');  // Get agent_id from query params
        if (!agent_id) {
            return NextResponse.json({ error: 'agent_id is required' }, { status: 400 });
        }

        //Hent signert URL fra agentService
        const signedUrl = await agentService.getSignedUrl(agent_id);

        // Return den signerte URL-en
        return NextResponse.json({ signedUrl });

    } catch (error: any) {
        console.error('Error getting signed URL:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }      
}
