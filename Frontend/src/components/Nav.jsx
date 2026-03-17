export default function Nav() {
  return (
   <nav className="w-full h-10 ">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <img src="https://www.freeiconspng.com/thumbs/apple-logo-icon/apple-icon-27.png" alt="Apple Logo" className="h-4 mt-3 ml-[130px]" />
        <ul className="flex space-x-6 text-sm font-medium font-normal text-sm mt-3 mr-[130px]">
          <li className="hover:text-gray-500 cursor-pointer flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 9h14l1 11H4L5 9zm6 0V6a3 3 0 0 1 6 0v3"
              />
            </svg>
            Store
          </li>
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
        <div className="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-3 text-gray-500 hover:text-gray-700 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </div>
      </div>
   </nav>
  )
}
