import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const pageLinks = [
  { label: 'Overview', to: '/' },
  { label: 'iOS', to: '/ios' },
  { label: 'macOS', to: '/macos' },
  { label: 'iPadOS', to: '/ipados' },
  { label: 'WatchOS', to: '/watchos' },
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
   <nav className="w-full h-24 relative z-50 bg-white lg:h-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between pl-[0px] pr-[0px] lg:justify-start ">
        <NavLink to="/" className="block">
          <img src="https://www.freeiconspng.com/thumbs/apple-logo-icon/apple-icon-27.png" alt="Apple Logo" className="h-[50px] ml-0 mt-4 md:ml-[50px] md:mt-[20px] lg:h-4 lg:ml-[130px] lg:mt-[10px]"/>
        </NavLink>
        <ul className="hidden lg:flex space-x-6 text-xs mt-3 ml-8 font-thin pl-2 pr-2 h-4">
          <li className="hover:text-gray-500 cursor-pointer">Store</li>
          <li className="hover:text-gray-500 cursor-pointer">Mac</li>
          <li className="hover:text-gray-500 cursor-pointer">iPad</li>
          <li className="hover:text-gray-500 cursor-pointer">iPhone</li>
          <li className="hover:text-gray-500 cursor-pointer">Watch</li>
          <li className="hover:text-gray-500 cursor-pointer">Airpords</li>
          <li className="hover:text-gray-500 cursor-pointer">TV & Home</li>
          <li className="hover:text-gray-500 cursor-pointer">Entertaiment</li>
          <li className="hover:text-gray-500 cursor-pointer">Accescories</li>
          <li className="hover:text-gray-500 cursor-pointer">Support</li>
        </ul>
        <div className="flex items-center space-x-10 ml-auto mt-4 pr-0 pl-0 lg:ml-8 lg:pr-5 lg:pl-5 lg:space-x-5 lg: mr-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[90px] w-12 lg:h-4 lg:w-4 ">
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[60px] w-13 pl-2 lg:h-5 lg:w-10 lg:mt-1 "
          >
            <path d="M6 9h12l1.2 8H4.8L6 9z" />
            <path d="M8 9V7a4 4 0 0 1 8 0v2" />
            <path d="M11.5 13h1" />
          </svg>
          <button
            type="button"
            className="flex flex-col gap-[10px] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            
            <span className="block h-[4.5px] w-12 bg-black" />
            <span className="block h-[4.5px] w-12 bg-black" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="absolute left-0 top-full z-50 mt-5 flex w-full flex-col gap-8 border-t border-slate-100 bg-white px-10 py-12 text-[50px] font-thin shadow-md lg:hidden">
          <li className="hover:text-gray-500 cursor-pointer">Store</li>
          <li className="hover:text-gray-500 cursor-pointer">Mac</li>
          <li className="hover:text-gray-500 cursor-pointer">iPad</li>
          <li className="hover:text-gray-500 cursor-pointer">iPhone</li>
          <li className="hover:text-gray-500 cursor-pointer">Watch</li>
          <li className="hover:text-gray-500 cursor-pointer">Airpords</li>
          <li className="hover:text-gray-500 cursor-pointer">TV & Home</li>
          <li className="hover:text-gray-500 cursor-pointer">Entertaiment</li>
          <li className="hover:text-gray-500 cursor-pointer">Accescories</li>
          <li className="hover:text-gray-500 cursor-pointer">Support</li>
        </ul>
      )}
       <div className="sticky top-0 z-40 h-36 w-full overflow-x-auto overflow-y-hidden bg-white [-webkit-overflow-scrolling:touch] lg:mt-8 lg:h-14 lg:ml-[400px]">
          <div className="flex min-w-max items-center gap-5 px-8 text-2xl lg:gap-8 lg:text-xs ml-[80px]">
            {pageLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `shrink-0 rounded-full border-[1px] border-slate-300 px-8 py-6 text-center text-black transition-colors lg:px-4 lg:py-2 ${
                    isActive ? 'bg-black text-white' : 'bg-gray-200'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
         </div>
       </div>
   </nav>

  )
}
