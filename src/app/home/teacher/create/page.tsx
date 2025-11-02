'use client';

import InputBox from "@/app/components/inputBox";
import { useState } from "react";


export default function CreateAgent() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [agentName, setAgentName] = useState('');
  const [firstMessage, setFirstMessage] = useState('');
  const [aiPrompt, setPrompt] = useState('')


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
              prompt: aiPrompt,
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
    <main className={`flex flex-col justify-center items-start min-h-screen ${loading ? 'cursor-wait' : 'cursor-default'}`}>

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
      <InputBox
        value={aiPrompt}
        onChange={setPrompt}
        placeHolder={`Beskriv agentens personlighet og kunnskap \n\nEksempel: Du er en hjelpsom assistent som kan svare på spørsmål om historie.`}
        size="large">
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
