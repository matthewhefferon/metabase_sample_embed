import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#509EE3]">
      <Head>
        <title>Metabase Embed</title>
        <meta name="description" content="Embedding Metabase in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 w-full h-full items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4 pb-3 text-white">
          Metabase Sample Embed
        </h1>
        <iframe
          src="http://localhost:3000/public/dashboard/0dc6f56d-2d6b-498c-b916-e764d4a4dea5"
          className="flex-1 w-full h-full border-none rounded-lg"
          allowTransparency
        ></iframe>
      </main>
    </div>
  );
}
