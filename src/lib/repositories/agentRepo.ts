import {prisma} from "@/lib/prisma";


export class AgentRepository {
    
    async addAgent(agent_id: string, 
        created_by: number, 
        name: string, 
        is_public?: boolean) {
            return await prisma.agents.create({
                data: {
                    agent_id,
                    created_by,
                    name,
                    is_public
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
    
    
    
}