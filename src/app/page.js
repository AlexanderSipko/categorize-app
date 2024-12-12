import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>app for categorize some document different stack</p>
        <p>halp user easy work every day</p>

        <Link
          href="/home"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Home page</span>
          <p>+</p>
        </Link>

        <Link
          href="/todo"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>ToDo</span>
          <p>+~~~~~~~~~~~~`</p>
        </Link>

        <h2>Success load</h2>
        <p>create CI/CD success install</p>
      </main>
    </div>

  );
}
