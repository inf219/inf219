'use client';

import Card from "@/app/components/card";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Agent {
  agent_id: string;
  name: string;
  tags?: string;
}

interface AgentsResponse {
  agents: Agent[];
}

export default function AssignAgentPage() {
  const { studentId } = useParams(); // Get studentId from URL
  const [agents, setAgents] = useState<Agent[]>([]); // the list of the agents fetched
  const [assigned, setAssigned] = useState<string[]>([]); // List of the agent IDs already assigned to the student
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all agents from ElevenLabs
        const agentsRes = await fetch('/api/list-agents');
        if (!agentsRes.ok) {
          throw new Error('Failed to fetch agents');
        }
        // get the agents that are alreade assigned to the sudent
        const agentsData: AgentsResponse = await agentsRes.json();
        setAgents(agentsData.agents);

        // Fetch assigned agent IDs for this student
        const assignedRes = await fetch(`/api/get-assigned-agents?studentId=${studentId}`);
        if (!assignedRes.ok) throw new Error('Failed to fetch assignments');
        const assignedData = await assignedRes.json();
        setAssigned(assignedData.assignedAgentIds);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId]);

  // this handles the checkbox
  const handleAssign = async (agentId: string, assign: boolean, agentName: string) => {
    // help from chat gpt to assign and unnasign
    setAssigned((prev) => 
      assign ? [...new Set([...prev, agentId])] : prev.filter((id) => id !== agentId)
    );

    try {
      const res = await fetch('/api/assign-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: parseInt(studentId as string), agentId, assign, agentName }),
      });
      if (!res.ok) throw new Error('Failed to update assignment');
    } catch (err) {
      // Revert on error
      setAssigned((prev) => 
        assign ? prev.filter((id) => id !== agentId) : [...new Set([...prev, agentId])]
      );
      console.error(err);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-64"><p>Laster inn...</p></div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-64"><p className="text-red-500">Error: {error}</p></div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Tildel agenter til student</h1>
        
        {agents.length === 0 ? (
          <p className="text-center">Ingen agenter funnet.</p>
        ) : (
          <ul className="space-y-5">
            {agents.map((agent) => (
              <Card key={agent.agent_id} className="!flex !justify-between">
                <div className="px-4">
                  <h3 className="font-semibold">{agent.name}</h3>
                  <p className="text-sm text-gray-600">{agent.tags}</p>
                </div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={assigned.includes(agent.agent_id)}
                    onChange={(e) => handleAssign(agent.agent_id, e.target.checked, agent.name)}
                    className="mr-2"
                  />
                  Tildelt
                </label>
              </Card>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}