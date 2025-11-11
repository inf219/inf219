'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Card from './card';

interface AgentsResponse {
    id: number;
    agent_id: string;
    name: string;
    created_by: number;
    tags?: string[];
    // Add other fields from ElevenLabs response if needed (e.g., description)
}

export function AgentList() {
    const [agents, setAgents] = useState<AgentsResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await fetch("/api/agents");
                if (!response.ok) {
                    throw new Error(`Failed to fetch agents: ${response.statusText}`);
                }
                const data = await response.json();
                setAgents(data.agents);
            } catch (err) {
                console.error(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        fetchAgents();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-64">
                <p className="text-lg text-[var(--loading_color)]">Laster inn agenter...</p>
            </div>
        );
    }

    // if (error) {
    //     return (
    //         <div className="flex justify-center items-center min-h-64">
    //             <p className="text-red-500 text-lg text-[var(--loading_color)]">Error: {error}</p>
    //         </div>
    //     );
    // }

    return (
        <div className="w-full max-w-3xl"> {/* Increased from max-w-2xl to max-w-3xl (approx 1792px) */}
            {agents.length === 0 ? (
                <p className="text-center text-[var(--loading_color)]">Ingen agenter funnet.</p>
            ) : (
                <ul className="space-y-5">
                    {agents.map((agent) => (
                        <Card
                            key={agent.agent_id}
                            className='!flex !justify-between'>
                            <div className='px-4'>
                                <h3 className="font-semibold">{agent.name}</h3>
                                <p className="text-sm text-gray-600">{agent.tags}</p>
                            </div>
                            <button
                                onClick={() => router.push(`/home/global/talk?agent_id=${agent.agent_id}`)}
                                className="px-2 py-1">
                                Snakk med {agent.name}
                            </button>
                            
                        </Card>
                    ))}
                </ul>
            )}
        </div>
    );
}