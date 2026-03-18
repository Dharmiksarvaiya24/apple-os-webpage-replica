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
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-lg mt-24 px-4 ">
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
     <div className="w-full bg-red-600 text-white px-6 py-4">
  <p className="text-center font-semibold">Your alert message here</p>
</div>
    </div>
    
  )
}
