import {prisma} from "@/lib/prisma";
import type { Agents } from "@prisma/client";

//Alle metoder for å snakke med databasen (agents og studentAgentAssignment tabellene)
export class AgentRepository {
    
    async addAgent(
        agent_id: string, 
        created_by: number, 
        name: string,) {
            return await prisma.agents.create({
                data: {
                    agent_id,
                    created_by,
                    name,
                }
            });
    }

    async findAll() {
        return await prisma.agents.findMany({
        });
    }

    //Obs. Søker på DATABASE id, ikke elevenlabs agent_id
    async findById(id: number) {
        return await prisma.agents.findUnique({
            where: {id},
        });
    }
    
    async findByStudentId(student_id: number) {
        const assignments = await prisma.studentAgentAssignment.findMany({
            where: {student_id},
            include: {
                agent: true
            }
        });

        return assignments.map(assignment => assignment.agent);
    }

    async deleteById(id: number) {
        return await prisma.agents.delete({
            where: {id},
        });
    }
    
    
}