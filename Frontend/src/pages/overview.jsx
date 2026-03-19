import { useEffect, useRef } from 'react'

const videoSources = [
  '/src/assets/media/overview.mov',
  
]

export default function HomePage() {
  const videosRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.6 },
    )

    videosRef.current.forEach((video) => {
      if (video) {
        observer.observe(video)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-lg mt-24  ">
      <div className="max-w-2xl text-center">
        <p className="font-semibold text-2xl">OS Overview</p>
        <p className="mt-2 font-bold leading-[1] text-[60px]">
          Stunning design.
          <br />
          Stellar experiences.
        </p>
        <div className="mt-5 flex flex-col gap-3 text-[15px] font-light leading-[1.5] text-gray-600 items-center text-center">
          <p>
            Introducing our broadest design update ever, a more helpful Apple Intelligence and exciting features
            available on iOS 26, iPadOS 26, macOS Tahoe, watchOS 26 and tvOS 26.
          </p>
          <div className="flex items-center gap-2 text-[15px] font-light">
            <h6 className="text-blue-600 mt-4">Watch the event</h6>
            <span className="text-lg text-blue-600 mt-4">›</span>
          </div>
        </div>
        <div className="mt-8  w-full gap-4 md:grid-cols-2">
          {videoSources.map((src, index) => (
            <div key={`${src}-${index}`} className="overflow-hidden  ">
              <video
                ref={(el) => (videosRef.current[index] = el)}
                src={src}
                muted
                loop
                playsInline
                className="h-90 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
     <div className="w-full bg-[#f6f6f8] px-6 py-4 h-[200vh]">
        <div className="bg-red-100 w-[90%] ml-[60px] mt-[80px] rounded-[40px]">
          <div className="flex h-[300px] flex-col justify-between rounded-[40px] bg-white px-8 py-6  md:flex-row">
            <div className="flex flex-1 flex-col justify-between text-[30px] font-semibold text-[#000000]">
              <p className="leading-tight mt-[50px] ml-[50px]">
                A Quick recap of what we <br /> announced at WWDC25.
              </p>
              <span className="text-xs font-light text-blue-600 mb-[100px] ml-[50px]">Watch the film ›</span>
            </div>
            <div className="flex w-full max-w-[390px] items-center justify-center mr-[100px] mb-[50px]">
              <div className="aspect-[0/0] w-full overflow-hidden ">
                <img
                  src="./src/assets/wwdc.png"
                  alt="Recap backdrop"
                  className="h-full w-full rounded-[34px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
          <div className=' w-[90%] ml-[70px] mt-[150px] text-bold font-bold text-[#000000] '>
             <p className=' text-[50px] font-medium text-[#000000] '>Get the highlights.</p>
            </div>
      
      </div>
    </div>
    
  )
}
