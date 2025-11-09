
//Sendes fra frontend, når en agent opprettes,
//Skal sendes til ElevenLabs API
export type CreateAgentDto = {
  name: string;
  tags?: string[];
  conversation_config: {
    tts: {
      model_id: string;
      voice_id: string;
    };
    agent: {
      first_message: string;
      language: string;
      prompt: {
        prompt: string;
      };
      llm: {
        model: string;
      };
    };
  };
}


//Det som returneres fra databasen om en agent. Det som returneres
//til frontend og brukes i services
export type AgentDto = {
    id: number;
    agent_id: string;
    created_by: number;
    is_public: boolean;
    name: string;
};

// Det som hentes fra ElevenLabs API når en agent opprettes
export type ElevenLabsAgentResponse = {
  agent_id: string;
  name: string;
  // Andre felter ElevenLabs returnerer
}