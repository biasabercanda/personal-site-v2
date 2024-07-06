import Link from 'next/link'

const navItems = {
  '/': {
    name: 'about',
  },
  '/blog': {
    name: 'contact',
  },
  
}

export function Navbar() {
  return (
    <aside className="  py-8 tracking-tight flex items-center justify-between">
      <img src="/logo.svg" alt="" />
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
            <div className='px-2 m-1 flex justify-between items-center w-auto gap-x-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-200 cursor-pointer '>
              <div className='flex w-full gap-x-1'>
                <img src="/mdi_spotify_black.svg" alt="" />
                <h1 className='whitespace-nowrap'>IU - Holssi</h1>
              </div>
              <img className="fill-black"  src="/mdi_pause_black.svg" alt="" />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
