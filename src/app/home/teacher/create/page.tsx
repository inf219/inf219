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
    <main className={`flex flex-col items-center py-22 ${loading ? 'cursor-wait' : 'cursor-default'}`}>

    <div className={`relative inline-block overflow-visible
  max-w-xl w-full mx-auto rounded-2xl
  bg-white/6 backdrop-blur-lg backdrop-saturate-150
  border border-cyan-400/30 ring-1 ring-white/5
  shadow-[0_0_40px_rgba(34,211,238,0.08)]
  hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]
  transition-shadow p-8`}>
      <h1 className="text-center text-2xl font-semibold mb-6 text-[#00C6FB]">Opprett en agent</h1>
      
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
      <button
        onClick={handleCreate}
        className={`!w-full !sm:w-auto !inline-flex !items-center !justify-center !rounded-lg
         !px-4 !py-2.5 !font-medium !shadow-sm !transition
         !hover:bg-sky-700 !active:bg-sky-800
         !focus:outline-none !focus:ring-2 !focus:ring-sky-500 !focus:ring-offset-2
         !disabled:bg-sky-300 !disabled:cursor-not-allowed${loading ? ' cursor-wait' : ''}`}>
        <p>{loading ? '⏳ Laster...' : 'Opprett agent'}</p>
      </button>
      <div>
        {loading && <p className="mt-8 text-center">Oppretter {agentName}...</p>}
        {!loading && response && <p className="mt-4 text-center">{response}</p>}
      </div>
    <img src="/pointingMaskot.png" alt="Pointing Tale" className="hidden md:block absolute left-full -translate-y-1/2
             h-80 z-20
             drop-shadow-[0_0_16px_rgba(14,165,233,0.55)]
             drop-shadow-[0_0_36px_rgba(14,165,233,0.25)]" />
    </div>
    </main>
  );
}



