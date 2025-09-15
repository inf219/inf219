'use client';

import { useConversation } from '@elevenlabs/react';
import { useCallback } from 'react';

export function Conversation() {
    const conversation = useConversation({
        onConnect: () => console.log('Connected'),
        onDisconnect: () => console.log('Disconnected'),
        onMessage: (message) => console.log('Message:', message),
        onError: (error) => console.error('Error:', error),
    });

    const getSignedUrl = async (): Promise<string> => {
        const response = await fetch("/api/get-signed-url");
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
    }, [conversation]);

    const stopConversation = useCallback(async () => {
        await conversation.endSession();
    }, [conversation]);

    return (
        <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
            <button
            onClick={startConversation}
            disabled={conversation.status === 'connected'}
            // her er designet på knappen med tailwind
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
            Start samtale
            </button>
            <button
            onClick={stopConversation}
            disabled={conversation.status !== 'connected'}
            // her er designet på den andre knappen med tailwind
            className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
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