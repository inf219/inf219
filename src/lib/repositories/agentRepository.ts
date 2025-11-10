import {prisma} from "@/lib/prisma";


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

    async findById(id: number) {
        return await prisma.agents.findUnique({
            where: {id},
        });
    }
    
    async findByStudentId(student_id: number) {
        return await prisma.agents.findMany({
            where: {student_id},
        });
    }
    
    
}