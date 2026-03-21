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
    <div className="min-h-[90vh] flex w-full flex-col items-center justify-center text-xl mt-[200px] px-4 lg:text-lg lg:mt-24">
      <div className="w-full max-w-5xl text-center">
        <p className="font-semibold text-3xl md:text-[60px] lg:text-[40px]">OS Overview</p>
        <p className="mt-3 font-bold leading-[1] text-[72px] lg:mt-2 lg:text-[60px] md:text-[70px] md:mt-5">
          Stunning design.
          <br />
          Stellar experiences.
        </p>
        <div className="mt-6 flex flex-col gap-4 text-[19px] font-light leading-[1.6] text-gray-600 items-center text-center lg:mt-5 lg:gap-3 lg:text-[15px] lg:leading-[1.5] md: text-[35px] md:mt-8">
          <p>
            Introducing our broadest design update ever, a more helpful Apple Intelligence and exciting features
            available on iOS 26, iPadOS 26, macOS Tahoe, watchOS 26 and tvOS 26.
          </p>
          <div className="flex items-center gap-3 text-[19px] font-light lg:gap-2 lg:text-[15px]">
            <h6 className="text-blue-600 mt-5 cursor-pointer lg:mt-4  md:text-[35px] md:mt-8 lg:text-[15px]">Watch the event</h6>
            <span className="text-[24px] text-blue-600 mt-5 lg:mt-4 lg:text-lg">›</span>
          </div>
        </div>
        <div className="mt- w-full gap-4 md:grid-cols-2 lg:mt-8 lg:gap-6 lg:grid-cols-1 ">
          {videoSources.map((src, index) => (
            <div key={`${src}-${index}`} className="overflow-hidden  ">
              <video
                ref={(el) => (videosRef.current[index] = el)}
                src={src}
                muted
                loop
                playsInline
                className="md:h-[600px] w-full  lg:h-100"
              />
            </div>
          ))}
        </div>
      </div>
     <div className="w-full bg-[#f6f6f8] px-4 py-6 h-[200vh] lg:px-6 lg:py-4">
        <div className="mx-auto mt-[100px] w-full max-w-6xl rounded-[48px] bg-red-100 lg:mt-[80px] lg:rounded-[40px]">
          <div className="flex h-[420px] flex-col items-center justify-between rounded-[48px] bg-white px-6 py-8 text-center md:flex-col lg:flex-row lg:h-[300px] lg:items-stretch lg:rounded-[40px] lg:px-8 lg:py-6 lg:text-left">
         <div className="order-1 flex w-full max-w-[390px] items-center justify-center mb-6 lg:order-2 lg:mr-[100px] lg:mb-[50px]">
              <div className="w-full overflow-hidden rounded-[32px] lg:rounded-[40px]">
                <img
                  src="./src/assets/wwdc.png"
                  alt="Recap backdrop"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="order-2 flex flex-1 flex-col items-center justify-between text-[40px] font-semibold text-[#000000] lg:order-1 lg:items-start lg:text-[30px]">
              <p className="mt-[10px] leading-tight lg:mt-[50px] lg:ml-[50px]">
                A Quick recap of what we <br /> announced at WWDC25.
              </p>
              <span className="mb-[20px] text-lg font-light text-blue-600 lg:mb-[100px] lg:ml-[50px] lg:text-xs">Watch the film ›</span>
            </div>
          </div>
        </div>
          <div className='mx-auto mt-[170px] w-full max-w-6xl text-bold font-bold text-[#000000] lg:mt-[150px]'>
             <p className='text-[62px] font-medium text-[#000000] lg:text-[50px]'>Get the highlights.</p>
            </div>
      
      </div>
    </div>
    
  )
}
