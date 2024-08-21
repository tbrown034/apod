import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-5xl font-bold">NASA or Not?</h1>
      <p className="text-xl ">
        Can you spot the difference between the real and AI-generated images?
        Challenge yourself with this cosmic guessing game.
      </p>
      <div className="flex gap-4">
        <Link
          href="/game"
          className="px-4 py-2 mt-8 font-semibold text-black transition duration-300 bg-white rounded-full shadow-lg hover:bg-blue-500 hover:text-white"
        >
          Play Now
        </Link>
        <Link
          href="/admin"
          className="px-4 py-2 mt-8 font-semibold text-black transition duration-300 bg-white rounded-full shadow-lg hover:bg-blue-500 hover:text-white"
        >
          Admin
        </Link>
      </div>
    </main>
  );
}
