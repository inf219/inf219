'use client';

import { useRouter } from 'next/navigation';

export default function MakeAgent() {
    const router = useRouter();

    const handleMakeAgent = () => {
        router.push('/agent');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Opprett KI-assistent
                </h1>
                <p className="mb-8 text-center">
                    Klikk på knappen nedenfor for å starte en samtale med KI-assistenten.
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={handleMakeAgent}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Lag agent
                    </button>
                </div>
            </div>
        </main>
    );
}
