'use client';

import Card from "@/app/components/card";
import InfoTooltip from "@/app/components/InfoTooltip";
import InputBox from "@/app/components/inputBox";
import { string } from "@elevenlabs/elevenlabs-js/core/schemas";
import { useState } from "react";


export default function CreateAgent() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [agentName, setAgentName] = useState('');
  const [firstMessage, setFirstMessage] = useState('');
  const [aiPrompt, setPrompt] = useState('')

const example = `Eksempel:
Du er vennlig, engasjert og konkret. Snakk rolig, bruk korte og tydelige setninger.
Vær oppmuntrende og bruk humor der det passer.
Du bruker naturlig språk, uten faguttrykk som kan være vanskelig for en elev å forstå.

Oppgaver du kan hjelpe med:
* Øve på dagligdagse samtaler (For eksempel: på butikken, på skolen, med venner).
* Forklar ord og uttrykk på en enkel måte.
* Gi eksempler fra hverdagen for å gjøre ting lettere å forstå.
* Gi små uttaleøvelser og hjelp eleven med å bygge setninger.
* Snakk om temaer som interesserer eleven.`
;
  

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
    <main className={`flex flex-col items-center py-8 ${loading ? 'cursor-wait' : 'cursor-default'}`}>

    <Card>
      <h1 className="text-center !text-4xl font-semibold mb-6">Opprett en agent</h1>
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
      <InfoTooltip text={example} />
      <InputBox
        value={aiPrompt}
        onChange={setPrompt}
        placeHolder={`Beskriv agentens personlighet og kunnskap \n\nEksempel: Du er en hjelpsom assistent som kan svare på spørsmål om historie.`}
        size="large">
      </InputBox>
      <button
        onClick={handleCreate}
        className={`!w-full
         !disabled:bg-sky-300 !disabled:cursor-not-allowed${loading ? ' cursor-wait' : ''}`}>
        <p>{loading ? '⏳ Laster...' : 'Opprett agent'}</p>
      </button>
      <div>
        {loading && <p className="mt-8 text-center text-[var(--loading_color)]">Oppretter {agentName}...</p>}
        {!loading && response && <p className="mt-4 text-center text-[var(--loading_color)]">{response}</p>}
      </div>
    </Card>
        <img src="/pointingMaskot.png" alt="Pointing Tale" 
            className="w-54 relative z-10 
              md:translate-x-90 md:-translate-y-60
              drop-shadow-[0_0_16px_rgba(14,165,233,0.55)]
              drop-shadow-[0_0_36px_rgba(14,165,233,0.25)]" />
    </main>
  );
}



