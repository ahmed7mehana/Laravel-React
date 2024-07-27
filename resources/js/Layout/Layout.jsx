import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
  return (
    <main>
      <header className='bg-black text-white p-4 flex justify-between'>
        <Link className='m-3 text-xl' href="/">Home</Link>
        {/* <Link className='m-3 text-xl' href="/about">About</Link> */}
        <Link className='m-3 text-xl' href="/post/create">Create</Link>
      </header>
      <article>{children}</article>
    </main>
  )
}