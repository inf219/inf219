'use client';

import { useState } from "react";
import InputBox from "@/app/components/inputBox";


export default function CreateAgent() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [agentName, setAgentName] = useState('');
  const [firstMessage, setFirstMessage] = useState('');


  const handleCreate = async () => {
    setLoading(true);
    const res = await fetch('/api/agents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversation_config: {
          tts: {
            model_id: 'eleven_turbo_v2_5',
            voice_id: 'CMVyxPycEkgLpEF85ShA',
          },
          agent: {
            first_message: firstMessage,
            language: 'no',
            prompt: {
              prompt: 'Du er en hyggelig bergenser som liker å hjelpe med skole',
            },
            llm: {
              model: 'turbo_v2_5',
            },
          },
        },
        name: agentName,
        tags: ['test', 'norsk'],
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setResponse(`Agent med navn "${agentName}" er opprettet`);
    } else {
      setResponse(`Feil: ${data.error}`);
    }
    setLoading(false);
  };


  return (
    <main className={`flex flex-col justify-center items-center min-h-screen ${loading ? 'cursor-wait' : 'cursor-default'}`}>

      <h1 className="text-2xl font-bold mb-4 items-center">Opprett en agent</h1>
      <InputBox
        value={agentName}
        onChange={setAgentName}
        placeHolder="Navn på agenten">
      </InputBox>
      <InputBox
        value={firstMessage}
        onChange={setFirstMessage}
        placeHolder="Hva skal agenten si først?">
      </InputBox>
      <div
        onClick={handleCreate}
        className={`bg-blue-600 hover:bg-blue-400 text-white px-4 py-2 rounded-xl w-fit flex items-center gap-2 hover:scale-105 transition duration-200 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}>
        <p>{loading ? '⏳ Laster...' : 'Opprett agent'}</p>
      </div>
      <div>
        {loading && <p className="mt-4">Oppdaterer {agentName} sin personlighet...</p>}
        {!loading && response && <p className="mt-4">{response}</p>}
      </div>
    </main>
  );
}
