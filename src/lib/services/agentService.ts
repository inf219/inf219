import { AgentRepository } from "../repositories/agentRepo";
import { CreateAgentDto, ElevenLabsAgentResponse, AgentDto } from "../dto/agentDto";
import { NextResponse } from "next/dist/server/web/spec-extension/response";


const agentRepository = new AgentRepository();

export class AgentService {
    private API_KEY: string;

    constructor() {
        this.API_KEY = process.env.ELEVENLABS_API_KEY || '';
    }

    async createAgent(dto: CreateAgentDto, created_by: number, is_public?: boolean) {
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
        throw new Error("Failed to create agent at ElevenLabs", { cause: { status: res.status, body: errText } });
    }

    const data = await res.json();
    //Parse responsen fra ElevenLabs
    const elevenLabsData: ElevenLabsAgentResponse = data;
    console.log('ElevenLabs response data: ', elevenLabsData);

    //Lagre agenten i databasen
    const savedAgent = await agentRepository.addAgent(
        elevenLabsData.agent_id,
        created_by,
        dto.name,
        is_public ?? true //Default true, må endres dersom lærere ikke skal ha tilgang til alle
    );

    console.log('Saved agent: ', savedAgent);

    return {
        id: savedAgent.id,
        agent_id: savedAgent.agent_id,
        name: savedAgent.name,
        created_by: savedAgent.created_by,
        is_public: savedAgent.is_public,
    } as AgentDto;

    }

}