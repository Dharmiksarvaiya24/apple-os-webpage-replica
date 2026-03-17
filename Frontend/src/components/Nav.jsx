export default function Nav() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white/80 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <img
          src="https://www.freeiconspng.com/thumbs/apple-logo-icon/apple-icon-27.png"
          alt="Apple logo"
          className="h-6"
        />
        <ul className="flex items-center gap-6 text-sm font-thin uppercase tracking-[0.2em] text-slate-500">
          <li className="hover:text-slate-700 transition-colors">Store</li>
          <li className="hover:text-slate-700 transition-colors">Mac</li>
          <li className="hover:text-slate-700 transition-colors">iPad</li>
          <li className="hover:text-slate-700 transition-colors">iPhone</li>
          <li className="hover:text-slate-700 transition-colors">Watch</li>
          <li className="hover:text-slate-700 transition-colors flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M6 9h12l1 8H5z" />
              <path d="M9 9V7a3 3 0 0 1 6 0v2" />
              <path d="M8 13h8" />
            </svg>
            Bag
          </li>
          <li className="hover:text-slate-700 transition-colors">AirPods</li>
        </ul>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-slate-500 hover:text-slate-700"
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
      </div>
    </nav>
  )
}
