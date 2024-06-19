// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Metabase Embed</title>
        <meta name="description" content="Embedding Metabase in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 w-full h-full items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4 pb-3 text-gray-800">Metabase Sample Embed</h1>
        <iframe
          src="http://localhost:3000/public/dashboard/86ba6172-9c36-4d92-88f4-1d070d077081"
          className="flex-1 w-full h-full border-none"
          allowTransparency
          allowFullScreen
        ></iframe>
      </main>
    </div>
  );
}
