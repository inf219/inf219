'use client';

import { useConversation } from '@elevenlabs/react';
import { useSearchParams } from 'next/navigation'; // Add this import
import { useCallback } from 'react';

export function Conversation() {
    const searchParams = useSearchParams();  // Add this
    const agent_id = searchParams?.get('agent_id');  // Get agent_id from URL query

    const conversation = useConversation({
        onConnect: () => console.log('Connected'),
        onDisconnect: () => console.log('Disconnected'),
        onMessage: (message) => console.log('Message:', message),
        onError: (error) => console.error('Error:', error),
    });

    const getSignedUrl = async (): Promise<string> => {
        if (!agent_id) {
            throw new Error('Ingen agent ID oppgitt. Velg en agent fra listen.');
        }

        const response = await fetch(`/api/get-signed-url?agent_id=${agent_id}`);  // Pass agent_id as query param
        if (!response.ok) {
            throw new Error(`Failed to get signed url: ${response.statusText}`);
        }
        const { signedUrl } = await response.json();
        return signedUrl;
    };

    const startConversation = useCallback(async () => {
        try {
            // Request microphone permission
            await navigator.mediaDevices.getUserMedia({ audio: true });

            const signedUrl = await getSignedUrl();

            // Start the conversation with your agent
            await conversation.startSession({
                signedUrl,
            });

        } catch (error) {
            console.error('Failed to start conversation:', error);
        }
    }, [conversation, agent_id]);  // Add agent_id to dependencies

    const stopConversation = useCallback(async () => {
        await conversation.endSession();
    }, [conversation]);

    if (!agent_id) {
        return <p className="text-[#CFEAFF]">Ingen agent valgt. Gå tilbake til agentlisten.</p>;  // Optional: Error UI if no agent_id
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
                <button
                    onClick={startConversation}
                    disabled={conversation.status === 'connected'}
                    className="px-4 py-2 disabled:bg-gray-300"
                >
                    Start samtale
                </button>
                <button
                    onClick={stopConversation}
                    disabled={conversation.status !== 'connected'}
                    className="px-4 py-2 rounded disabled:bg-gray-300"
                >
                    Avslutt samtale
                </button>
            </div>

            <div className="flex flex-col items-center">
                {conversation.status === 'disconnected' ? <p>Status: Ikke koblet til</p> : <p>Koblet til</p>}
                {conversation.status === 'disconnected' ? null :
                    <p>Agenten {conversation.isSpeaking ? 'snakker' : 'venter'}</p>}
            </div>
        </div>
    );
}