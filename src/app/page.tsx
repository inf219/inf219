'use client';

export default function Home() {
  return (
    <button
    onClick={() => (window.location.href = "/api/auth/signin")}
    className="bg-blue-600 text-white px-4 py-2 rounded">
      Logg inn med feide
    </button>
  )
}



