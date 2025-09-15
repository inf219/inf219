'use client';

// Leo 
export default function Home() {
  return (
    <button
    onClick={() => (window.location.href = "/api/auth/signin?callbackUrl=/home")}
    className="bg-blue-600 text-white px-4 py-2 rounded">
      Logg inn
    </button>
  )
}



