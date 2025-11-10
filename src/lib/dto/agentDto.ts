
//Sendes fra frontend, når en agent opprettes,
//Skal sendes til ElevenLabs API
// Opprettes i frontend -> backend -> ElevenLabs API
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
      prompt: { prompt: string;};
      llm: {model: string; };
    };
  };
}


//Det som returneres fra databasen om en agent.
// Backend -> Frontend
export type AgentDto = {
    id: number;
    agent_id: string;
    created_by: number;
    name: string;
};


// Elevenlabs -> Backend (Brukes internt)
//Det som returneres fra ElevenLabs API når en agent opprettes
export type ElevenLabsCreateAgentResponse = {
    agent_id: string;
  // Andre felter ElevenLabs returnerer
}

//Det som returneres fra ElevenLabs når man henter signert URL
export type SignedUrlResponse = {
    signed_url: string;
}

//Den som skal sendes til elevenlabs for å hente signert URL
export type GetSignedUrlRequest = {
    agent_id: string;
}