'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Agent {
    agent_id: string;
    name: string;
    tags?: string;
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
            {agents.length === 0 ? (
                <p className="text-center text-gray-500">Ingen agenter funnet.</p>
            ) : (
                <ul className="space-y-5">
                    {agents.map((agent) => (
                        <li
                            key={agent.agent_id}
                            className="p-5 bg-white/6 rounded-lg border border-cyan-400/30 ring-1 ring-white/5
                                shadow-[0_0_40px_rgba(34,211,238,0.08)]
                                hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]
                                flex transition-shadow p-8 justify-between items-center w-full" 
                        >
                            <div className='px-4'>
                                <h3 className="font-semibold text-gray-100">{agent.name}</h3>
                                <p className="text-sm text-gray-400">{agent.tags}</p>
                            </div>
                            <button
                                onClick={() => router.push(`/agent/talk?agent_id=${agent.agent_id}`)}
                                className="px-2 py-1">
                                Snakk med {agent.name}
                            </button>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}