import Link from 'next/link';

function ToDo () {

    return (

        <>
            <Link
                href="/"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                >
                <span>Root</span>
                <p>+</p>
            </Link>
            <p>List todo or backend name entities</p>
        </>
    )
}

export default ToDo