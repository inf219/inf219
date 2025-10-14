'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Agent {
    agent_id: string;
    name: string;
    // Add other fields from ElevenLabs response if needed (e.g., description)
}

interface AgentsResponse {
    agents: Agent[];
    has_more: boolean;
    next_cursor: string | null;
}

export function AgentList() {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await fetch("/api/list-agents");
                if (!response.ok) {
                    throw new Error(`Failed to fetch agents: ${response.statusText}`);
                }
                const data: AgentsResponse = await response.json();
                setAgents(data.agents);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        fetchAgents();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <p className="text-lg">Laster inn agenter...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <p className="text-red-500 text-lg">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl"> {/* Increased from max-w-2xl to max-w-3xl (approx 1792px) */}
            <h2 className="text-2xl font-bold mb-4 text-center">Dine Elevenlabs agenter</h2>
            {agents.length === 0 ? (
                <p className="text-center text-gray-500">Ingen agenter funnet.</p>
            ) : (
                <ul className="space-y-5">
                    {agents.map((agent) => (
                        <li
                            key={agent.agent_id}
                            className="p-5 bg-gray-100 rounded-lg border border-blue-300 flex justify-between items-center w-full" 
                        >
                            <div>
                                <h3 className="font-semibold">{agent.name}</h3>
                                <p className="text-sm text-gray-600">ID: {agent.agent_id}</p>
                            </div>
                            <button
                                onClick={() => router.push(`/agent/talk?agent_id=${agent.agent_id}`)}
                                className="px-2 py-1 bg-green-500 text-white rounded"
                            >
                                Snakk med agenten
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}