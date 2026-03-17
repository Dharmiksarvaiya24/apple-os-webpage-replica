export default function Nav() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[0.55rem] font-semibold tracking-[0.3em] text-white">
            OS
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] text-slate-500">Operating Systems</span>
        </div>
        <ul className="flex items-center gap-6 text-xs font-medium uppercase text-slate-500">
          <li className="cursor-pointer hover:text-slate-700 transition-colors">Store</li>
          <li className="cursor-pointer hover:text-slate-700 transition-colors">Mac</li>
          <li className="cursor-pointer hover:text-slate-700 transition-colors">iPad</li>
          <li className="cursor-pointer hover:text-slate-700 transition-colors">iPhone</li>
          <li className="cursor-pointer hover:text-slate-700 transition-colors">Watch</li>
        </ul>
        <div className="flex items-center gap-6 text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M6 9h12l1.2 8H4.8L6 9z" />
            <path d="M8 9V7a4 4 0 0 1 8 0v2" />
            <path d="M11.5 13h1" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>
    </nav>
  )
}
