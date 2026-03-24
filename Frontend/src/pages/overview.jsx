import { useEffect, useRef, useState } from 'react'
import wwdcImage from '../assets/wwdc.png'
import overviewVideo from '../assets/media/overview.mov'
import h1 from '../assets/media/h1.png'
import h2 from '../assets/media/h2.mov'
import h3 from '../assets/media/h3.png'
import h4 from '../assets/media/h4.mov'
import h5 from '../assets/media/h5.png'

const videoSources = [
  overviewVideo,
]

const highlightSlides = [
  { type: 'image', src: h1 },
  { type: 'video', src: h2 },
  { type: 'image', src: h3 },
  { type: 'video', src: h4 },
  { type: 'image', src: h5 },
]

// Easy-to-replace image URLs for the new cards.
const intelligenceImageEndpoints = {
  translation: 'https://www.apple.com/v/os/c/images/shared/apple_intelligence/live_translation_airpods__dl4u3vszum2q_large_2x.jpg',
  visualSearch: 'https://www.apple.com/in/os/images/shared/apple_intelligence/live_translation__x2fac526k0im_large_2x.jpg',
  smartNotes: 'https://www.apple.com/in/os/images/shared/apple_intelligence/icon_ask_model__d1tqjy3fi3ma_large_2x.jpg',
  shortcuts: 'https://www.apple.com/v/os/c/images/shared/apple_intelligence/genmoji__b2htoaj2to76_large_2x.jpg',
  creative: 'https://www.apple.com/v/os/c/images/shared/fitness/workout_startframe__fr1ocdjxywyi_large_2x.jpg',
}

// Card content for the first carousel copy.
const firstIntelligenceCards = [
  {
    title: 'Live Translation',
    description: 'Translate calls, texts and in-person conversations in real time with natural language support that feels immediate.',
    caption: 'Available on: iPhone, iPad, Mac, Apple Watch\n\nAvailable in selected languages',
    image: intelligenceImageEndpoints.translation,
    imageAlt: 'Available on: iPhone, iPad, Mac, Apple Watch\n\nAvailable in selected languages',
  },
  {
    title: 'Visual Search',
    description: 'Surface details from what is on screen, jump into apps faster and turn quick questions into useful next steps.',
    caption: 'Available on: iPhone',
    image: intelligenceImageEndpoints.visualSearch,
    imageAlt: 'Available on: iPhone',
  },
  {
    title: 'Smart Notes',
    description: 'Compare notes, summarize meetings and turn scattered thoughts into clearer actions with a lightweight workflow.',
    caption: 'Available on: iPhone, iPad, Mac',
    image: intelligenceImageEndpoints.smartNotes,
    imageAlt: 'Available on: iPhone, iPad, Mac',
  },
  {
    title: 'Shortcut Actions',
    description: 'Automate everyday tasks with suggested actions, reusable prompts and streamlined steps across your favorite tools.',
    caption: 'Available on: iPhone, iPad, Mac',
    image: intelligenceImageEndpoints.shortcuts,
    imageAlt: 'Available on: iPhone, iPad, Mac',
  },
  {
    title: 'Creative Playground',
    description: 'Experiment with visuals, remix ideas and build polished concepts faster with a focused and flexible creative space.',
    caption: 'Available on: Apple Watch',
    image: intelligenceImageEndpoints.creative,
    imageAlt: 'Dummy placeholder for creative playground artwork',
  },
]

// Card content for the second carousel copy.
// Edit only this image block for the second section images.
const secondIntelligenceImageEndpoints = {
  translation: 'https://www.apple.com/in/os/images/shared/continuity_communication/calls__f2ec2qqhtpei_large_2x.jpg',
  visualSearch: 'https://www.apple.com/in/os/images/shared/continuity_communication/screen__eaw571n83i0y_large_2x.jpg',
  smartNotes: 'https://www.apple.com/in/os/images/shared/continuity_communication/hold_assist__de7h86bgr2gm_large_2x.jpg',
  shortcuts: 'https://www.apple.com/v/os/c/images/shared/continuity_communication/background__d9dmgghg5ewm_large_2x.jpg',
  creative: 'https://www.apple.com/in/os/images/shared/continuity_communication/polls__d7ecjbxem7cm_large_2x.jpg',
}

// Edit only this card block for the second section content.
const secondIntelligenceCards = [
  {
    title: 'Manage unwanted calls',
    description: ' Call Screening automatically answers unknown callers without interrupting you. Once the caller shares their name and the reason for their call, your phone rings and you can decide if you want to pick up.9',
    caption: 'Available on: iPhone, iPad, Mac, Apple Watch\n\nAvailable in selected languages',
    image: secondIntelligenceImageEndpoints.translation,
    imageAlt: 'Available on: iPhone, iPad, Mac, Apple Watch\n\nAvailable in selected languages',
  },
  {
    title: 'Screen new senders.',
    description: 'Approve unknown numbers with new screening tools that detect spam and give you control over who appears in your conversations in Messages and your recent calls in Phone and FaceTime.',
    caption: 'Available on: iPhone',
    image: secondIntelligenceImageEndpoints.visualSearch,
    imageAlt: 'Available on: iPhone',
  },
  {
    title: 'Let the Phone app wait on hold for you.',
    description: 'Hold Assist keeps your spot in line while you wait for a live agent and notifies you when they’re ready.10',
    caption: 'Available on: iPhone, iPad, Mac',
    image: secondIntelligenceImageEndpoints.smartNotes,
    imageAlt: 'Available on: iPhone, iPad, Mac',
  },
  {
    title: 'Add a background to any conversation.',
    description: ' Create a poll to help the group chat decide. Everyone in the conversation can contribute options and watch as votes come in.',
    caption: 'Available on: iPhone, iPad, Mac',
    image: secondIntelligenceImageEndpoints.shortcuts,
    imageAlt: 'Available on: iPhone, iPad, Mac',
  },
  {
    title: 'Polls in Messages. ',
    description: 'Experiment with visuals, remix ideas and build polished concepts faster with a focused and flexible creative space.',
    caption: 'Available on: Apple Watch',
    image: secondIntelligenceImageEndpoints.creative,
    imageAlt: 'Dummy placeholder for creative playground artwork',
  },
]

// First copy text.
const firstAppleIntelligenceContent = {
  label: 'Apple Intelligence',
  title: 'Smarter in even more places.',
  description:
    'Apple Intelligence is integrated into even more places to help you communicate across languages, surface helpful details faster and keep creative workflows moving with less friction.',
  cards: firstIntelligenceCards,
}

// Second copy text. Change this block only when you want a different second section.
const secondAppleIntelligenceContent = {
  label: 'Communication',
  title: 'Goodbye distractions.',
  description:
    'From voice to text to video, there are more ways than ever to express yourself. And new features give you more power to reduce interruptions.',
  cards: secondIntelligenceCards,
}

function CarouselArrow({ direction = 'left' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${direction === 'right' ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 5l-7 7 7 7" />
    </svg>
  )
}

// Reusable Apple Intelligence block.
function AppleIntelligenceShowcase({ section }) {
  const intelligenceCarouselRef = useRef(null)
  const [showIntelligenceSection, setShowIntelligenceSection] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Fade the section in after mount.
  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setShowIntelligenceSection(true)
    })

    return () => {
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  // Keep arrow buttons in sync with scroll position.
  useEffect(() => {
    const carousel = intelligenceCarouselRef.current

    if (!carousel) {
      return undefined
    }

    const updateNavigationState = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth

      setCanScrollLeft(carousel.scrollLeft > 8)
      setCanScrollRight(carousel.scrollLeft < maxScrollLeft - 8)
    }

    updateNavigationState()
    carousel.addEventListener('scroll', updateNavigationState, { passive: true })
    window.addEventListener('resize', updateNavigationState)

    return () => {
      carousel.removeEventListener('scroll', updateNavigationState)
      window.removeEventListener('resize', updateNavigationState)
    }
  }, [])

  const scrollIntelligenceCarousel = (direction) => {
    const carousel = intelligenceCarouselRef.current

    if (!carousel) {
      return
    }

    const firstCard = carousel.querySelector('[data-apple-card]')
    const computedStyles = window.getComputedStyle(carousel)
    const gap = Number.parseFloat(computedStyles.columnGap || computedStyles.gap || '0')
    const scrollAmount = firstCard ? firstCard.clientWidth + gap : carousel.clientWidth * 0.85

    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className="relative left-1/2 right-1/2 -mx-[50vw] mt-[150px] w-screen overflow-hidden bg-[#f6f6f8] px-5 py-16 sm:px-8 md:px-12 lg:mt-[100px] lg:px-16 lg:py-24"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0) 18%), radial-gradient(circle at 15% 20%, rgba(255,255,255,0.9) 0%, rgba(246,246,248,0) 40%), radial-gradient(circle at 85% 15%, rgba(186,214,255,0.28) 0%, rgba(246,246,248,0) 28%), radial-gradient(circle at 82% 82%, rgba(255,205,228,0.22) 0%, rgba(246,246,248,0) 22%)',
      }}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-1000 ease-out ${
          showIntelligenceSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Header copy */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[18px] font-semibold tracking-[-0.03em] text-[#1d1d1f] sm:text-[22px]">
              {section.label}
            </p>
            <h2 className="mt-4 max-w-2xl text-[48px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#1d1d1f] sm:text-[64px] lg:text-[86px]">
              {section.title}
            </h2>
            <p className="mt-6 max-w-2xl text-[18px] font-medium leading-[1.65] text-[#6e6e73] sm:text-[20px]">
              {section.description}
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3 lg:pb-3">
            <button
              type="button"
              aria-label="Scroll carousel left"
              onClick={() => scrollIntelligenceCarousel(-1)}
              disabled={!canScrollLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/80 text-[#1d1d1f] shadow-[0_18px_40px_rgba(15,23,42,0.10)] backdrop-blur-xl disabled:cursor-not-allowed disabled:opacity-35"
            >
              <CarouselArrow direction="left" />
            </button>
            <button
              type="button"
              aria-label="Scroll carousel right"
              onClick={() => scrollIntelligenceCarousel(1)}
              disabled={!canScrollRight}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/80 text-[#1d1d1f] shadow-[0_18px_40px_rgba(15,23,42,0.10)] backdrop-blur-xl disabled:cursor-not-allowed disabled:opacity-35"
            >
              <CarouselArrow direction="right" />
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-[#f6f6f8] to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-[#f6f6f8] to-transparent lg:block" />

          <div
            ref={intelligenceCarouselRef}
            className="apple-intelligence-carousel flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {section.cards.map((card) => (
              <article
                key={card.title}
                data-apple-card
                className="flex min-h-[520px] shrink-0 snap-start basis-[88%] flex-col rounded-[32px] border border-white/80 bg-white/80 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:basis-[72%] sm:p-6 lg:basis-[42%] xl:basis-[32%]"
              >
                <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-white via-[#f6f8fc] to-[#eef2f8] sm:h-[320px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,255,255,0))]" />
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-cover object-center"
                  />
                </div>

                {/* Card text */}
                <div className="mt-6 flex flex-1 flex-col px-1">
                  <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.04em] text-[#1d1d1f]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[17px] font-light leading-[1.65] text-[#6e6e73]">
                    {card.description}
                  </p>
                  <p className="mt-auto pt-6 text-sm font-light text-[#8b8b91] whitespace-pre-line">{card.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const videosRef = useRef([])
  const highlightVideosRef = useRef([])
  const [activeSlide, setActiveSlide] = useState(0)

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

  useEffect(() => {
    const sliderInterval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % highlightSlides.length)
    }, 4000)

    return () => {
      window.clearInterval(sliderInterval)
    }
  }, [])

  useEffect(() => {
    highlightVideosRef.current.forEach((video, index) => {
      if (!video) {
        return
      }

      if (index === activeSlide) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [activeSlide])

  return (
    <>
      <style>{`
        .apple-intelligence-carousel {
          scrollbar-width: none;
        }

        .apple-intelligence-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="min-h-[90vh] flex w-full flex-col items-center justify-center text-xl mt-[200px]  lg:text-lg lg:mt-24">
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
        <div className="w-full lg:px-6 lg:py-4">
          <div className="mx-auto mt-[100px] w-full max-w-6xl rounded-[48px] bg-red-100 lg:mt-[80px] lg:rounded-[40px]">
            <div className="flex h-[420px] flex-col items-center justify-between rounded-[48px] bg-white px-6 py-8 text-center md:flex-col lg:flex-row lg:h-[300px] lg:items-stretch lg:rounded-[40px] lg:px-8 lg:py-6 lg:text-left">
              <div className="order-1 flex w-full max-w-[390px] items-center justify-center mb-6 lg:order-2 lg:mr-[100px] lg:mb-[50px]">
                <div className="w-full overflow-hidden rounded-[32px] lg:rounded-[40px]">
                  <img
                    src={wwdcImage}
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
            <div className="mt-[100px] w-full overflow-hidden rounded-[32px] lg:rounded-[40px]">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {highlightSlides.map((slide, index) => (
                  <div key={`${slide.src}-${index}`} className="w-full shrink-0">
                    {slide.type === 'video' ? (
                      <video
                        ref={(element) => (highlightVideosRef.current[index] = element)}
                        src={slide.src}
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <img
                        src={slide.src}
                        alt={`Highlight slide ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center gap-3">
                {highlightSlides.map((_, index) => (
                  <button
                    key={`navigator-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      activeSlide === index ? 'bg-black' : 'bg-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-4 text-sm font-medium text-gray-500">
                  {activeSlide + 1} / {highlightSlides.length}
                </span>
              </div>
            </div>
          </div>

          <AppleIntelligenceShowcase section={firstAppleIntelligenceContent} />
          <AppleIntelligenceShowcase section={secondAppleIntelligenceContent} />
        </div>
      </div>
    </>
  )
}
