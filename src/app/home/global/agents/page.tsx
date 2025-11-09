import { AgentList } from "@/app/components/agentList";

export default function AgentsPage() {
    return (
        <main className="relative flex items-center justify-center p-16 min-h-screen">
            <div className="flex flex-col items-center gap-8 px-4">
                <h1 className="!text-4xl">
                    Agenter:
                </h1>
                <AgentList />
            </div>
                <img src="/snakkeMaskot.png" alt="Pointing Tale" 
                className="hiddenmd:block absolute -right-50 top-90 -translate-y-1/2 h-80
                drop-shadow-[0_0_16px_rgba(14,165,233,0.55)]
                drop-shadow-[0_0_36px_rgba(14,165,233,0.25)]" />
        </main>
    );
}