import React from "react";

const topColor = "#0F172A";

interface Props {
  name?: string | null;
  role?: "Elev" | "Lærer" | string;
}

export default function UserWelcome({ name, role }: Props) {
  return (
    <div
      className="mt-20 border-2 shadow-xl rounded-full p-20 h-64 
      border-[var(--border_color)] bg-[var(--header)] 
      flex flex-col items-center justify-center"
    >
      <h1>
        Velkommen, {name ?? "bruker"}
      </h1>
      {role && (
        <h2>
          #{role}
        </h2>
      )}
    </div>
  );
}
