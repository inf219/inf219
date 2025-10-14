"use client";

import { useRouter } from "next/navigation";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function HomePage() {
  const router = useRouter();

  const handleLoginRedirect = (role: string) => {
    router.push(`/api/auth/signin?role=${role}&callbackUrl=/home/${role}`); // Legger til rollen som query-parameter
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Velkommen til appen</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleLoginRedirect("student")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Logg inn som elev
        </button>
        <button
          onClick={() => handleLoginRedirect("teacher")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Logg inn som lærer
        </button>
      </div>
    </div>
  );
}
