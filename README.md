# Language Learning App

This is a Next.js app using React for the frontend, Prisma for database management, and SQLite for local storage. It includes authentication with NextAuth (Feide) and ElevenLabs integration. The app allows users to talk to agents and learn languages interactively.

## Prerequisites

- Node.js (version 18 or higher) installed on your machine.
- npm (comes with Node.js) for package management.

## Installation

All dependencies (including Next.js, Prisma, clsx, next-auth@beta, @elevenlabs/react) can be installed with:

```bash
npm install
```

## Features

- User roles: Student/Teacher (from Prisma schema).
- Database models: User (with email, name, role). Post model is commented out for now.
- View the database easily with Prisma Studio

# Elevenlabs configuration

- You need to make a user on elevenlabs, and make an API-key.
- You also need to save the voice you want to use on your user
- The voice has its own voice-id which either needs to be "CMVyxPycEkgLpEF85ShA" or you can change the voice-id in the program in: agent/create

## Configuration

Before running the app, create a `.env.local` file in the root of the project and add the following environment variables:

    FEIDE_CLIENT_ID=<your_client_id>
    FEIDE_CLIENT_SECRET=<your_client_secret>
    FEIDE_ISSUER=<your_feide_issuer>
    NEXTAUTH_SECRET=<hemligLangRandomStreng>
    NEXTAUTH_URL=http://localhost:3000/
    ELEVENLABS_API_KEY=<your_api_key>
    NEXT_PUBLIC_AGENT_ID=<your_agent_id>

Also create a `.env` file in the root of the project and add the following environment variables:
DATABASE_URL=<file:./testDB.db>

Set up the database with Prisma:
npx prisma db push
This created testsDB based on prisma/schema.prisma

- To view/edit the database, run:

```bash
  npx prisma studio
```

- Then open http://localhost:5555

## Running the app

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to see the app.


##Illustrasjoner og grafikk:
- Maskoten Tale er AI - generert (chatGPT)
