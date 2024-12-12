import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BeakerIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>  <ArrowLongRightIcon className="w-5 md:w-6" /> app for categorize some document different stack</p>
        <p> <ArrowLongRightIcon className="w-5 md:w-6" /> halp user easy work every day</p>

        <Link
          href="/rec/home"
          className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
        >
          <span>Login</span>
          <ArrowRightIcon className="w-5 md:w-6" />
        </Link>

        <Link
          href="/rec/todo"
          className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
        >
          <span>ToDo</span>
          <BeakerIcon className="w-5 md:w-6" />
        </Link>

        <h2> <ArrowLongRightIcon className="w-5 md:w-6" /> Success load</h2>
       
        <p>create CI/CD success install</p>
      </main>
    </div>

  );
}
