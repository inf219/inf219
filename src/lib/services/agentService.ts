import { AgentRepository } from "../repositories/agentRepository";
import { CreateAgentDto, ElevenLabsCreateAgentResponse, AgentDto } from "../dto/agentDto";
import { user } from "@elevenlabs/elevenlabs-js/api";



const agentRepository = new AgentRepository();

export class AgentService {
    private API_KEY: string;

    constructor() {
        this.API_KEY = process.env.ELEVENLABS_API_KEY || '';
    }

    //Oppretter en agent i Elevenlabs og lagrer den i databasen
    async createAgent(dto: CreateAgentDto, created_by: number) {
    const res = await fetch('https://api.elevenlabs.io/v1/convai/agents/create', {
      method: 'POST',
      headers: {
        'xi-api-key': this.API_KEY || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    });

    console.log('POST config: ', dto)
    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Failed to create agent at ElevenLabs: ${errText}`);
    }

    const elevenLabsData: ElevenLabsCreateAgentResponse = await res.json();
    if (!elevenLabsData.agent_id) {
        throw new Error(`Invalid response from ElevenLabs: missing agent_id`, { cause: elevenLabsData });
    }
    console.log('ElevenLabs response: ', elevenLabsData);

    //Lagre agenten i databasen
    const savedAgent = await agentRepository.addAgent(
        elevenLabsData.agent_id,
        created_by,
        dto.name,
    );

    console.log('Saved agent: ', savedAgent);

    //MÅ vurdere hva som faktisk skal returneres her! (går direkte til frontend via route)
    return {
        id: savedAgent.id,
        agent_id: savedAgent.agent_id,
        name: savedAgent.name,
        created_by: savedAgent.created_by,
    } as AgentDto;

    }

    //Henter signert URL for å starte en samtale med en agent
    async getSignedUrl(agent_id: string) {
        const res = await fetch(
            `https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=${agent_id}`,
            {
                headers: {
                    'xi-api-key': this.API_KEY,
                },
            }
        );
               
        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`Failed to get signed URL from ElevenLabs: ${errText}`);
        }

        const data = await res.json();
        if (!data.signed_url) {
            throw new Error(`Invalid response from ElevenLabs: missing signed_url`, { cause: data });
        }

        return data.signed_url;

    }

    async getAgentsForUser(userId: number, userRole: string) {
        if (userRole === 'ADMIN' || userRole === 'TEACHER') {
            return await agentRepository.findAll();
        }
        if (userRole === 'STUDENT') {
            return await agentRepository.findByStudentId(userId);
        }
    }

}