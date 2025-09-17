import React from "react";

const topColor = "#9ADBE8";

interface Props {
  name?: string | null;
  role?: "Elev" | "Lærer" | string;
}

export default function UserWelcome({ name, role }: Props) {
  return (
    <div
      className="mt-10 border-2 shadow-xl rounded-full p-20 h-64"
      style={{ backgroundColor: topColor, borderColor: "#6ECAD9" }}
    >
      <h1 className="text-6xl font-medium text-center text-black">
        Velkommen, {name ?? "bruker"}
      </h1>
      {role && (
        <h2 className="mt-4 text-xl font-medium text-center text-gray-500">
          #{role}
        </h2>
      )}
    </div>
  );
}
