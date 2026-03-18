export default function Nav() {
  return (
   <nav className="w-full h-10 ">
      <div className="mx-auto flex max-w-6xl items-center items-center pl-[20px] pr-[20px]">
        <img src="https://www.freeiconspng.com/thumbs/apple-logo-icon/apple-icon-27.png" alt="Apple Logo" className="h-4 mt-2 ml-[130px]" />
        <ul className="flex space-x-6 text-xs mt-2 ml-8 font-thin pl-2 pr-2">
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
        <div className="flex space-x-5 ml-8 mt-4 pr-5 pl-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 ">
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
            className="h-5 w-05 pl-2 "
          >
            <path d="M6 9h12l1.2 8H4.8L6 9z" />
            <path d="M8 9V7a4 4 0 0 1 8 0v2" />
            <path d="M11.5 13h1" />
          </svg>
        </div>
      </div>
       <div className="h-14 w-full mt-5 display-flex justify-center items-center">
          <div className="flex space-x-5 text-xs display-flex justify-center items-center">
            <button className="p-4 border-2 border-slate-500 rounded-full  w-[80px] h-[10px] inline-flex items-center justify-center bg-gray-200 border-[1px] border-slate-120 ">Overview</button>
            <button className="p-4 border-2 border-slate-500 rounded-full  w-[50px] h-[10px] inline-flex items-center justify-center bg-gray-200 border-[1px] border-slate-120">iOS</button>
            <button className="p-4 border-2 border-slate-500 rounded-full  w-[80px] h-[10px] inline-flex items-center justify-center bg-gray-200 border-[1px] border-slate-120">macOS</button>
            <button className="p-4 border-2 border-slate-500 rounded-full  w-[80px] h-[10px] inline-flex items-center justify-center bg-gray-200 border-[1px] border-slate-120">iPadOS</button>
            <button className="p-4 border-2 border-slate-500 rounded-full  w-[80px] h-[10px] inline-flex items-center justify-center bg-gray-200 border-[1px] border-slate-120">WatchOS</button>
         </div>
       </div>
   </nav>

  )
}
