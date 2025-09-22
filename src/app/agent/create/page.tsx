'use client';

import { useState } from "react";


export default function CreateAgent() {
  const [response, setResponse] = useState<string | null>(null);
  const handleCreate = async() => {
        const res = await fetch('/api/agents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversation_config: {
          agent: {
            firstMessage: 'Hei! For en nydelig dag for en hyggelig prat',
            language: 'no',
            prompt: {
              prompt: 'Du er en hjelpsom norsk assistent.',
            },
            llm: {
              model: 'turbo_v2_5',
            },
          },
          tts: {
            voiceId: 'CMVyxPycEkgLpEF85ShA',
            model_id: 'eleven_turbo_v2_5',
          },
        },
        platform_settings: {
          name: 'TestOpprettAgent',
          tags: ['test', 'norsk'],
        },
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setResponse(`Agent opprettet! ID: ${data.name}`);
    } else {
      setResponse(`Feil: ${data.error}`);
    }
  };

 
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Opprett en agent</h1>
      <button
        onClick={handleCreate}
      >
        Opprett agent
      </button>
      {response && <p className="mt-4">{response}</p>}
    </main>
  );
}
