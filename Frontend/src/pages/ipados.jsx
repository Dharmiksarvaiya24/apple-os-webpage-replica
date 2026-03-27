import ipad from '../assets/ipad.png'
export default function IPadOSPage() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center px-4 pt-32 text-xl sm:px-6 md:pt-40 lg:pt-24">
      <div className="w-full max-w-5xl text-center">
        <p className="bg-purple-700 bg-clip-text text-2xl font-semibold text-transparent sm:text-4xl lg:text-[30px]">
          iPadOS 26
        </p>
        <p className="mx-auto mt-3 max-w-[320px] text-[42px] font-bold leading-[0.95] text-[#1d1d1f] sm:max-w-[520px] sm:text-[64px] md:text-[70px] lg:mt-2 lg:text-[60px]">
          Work.Flows.
        </p>
      </div>

      <div className="mt-8 flex w-full  justify-center mt-[100px] lg:mb-20">
        <img
          src={ipad}
          alt="iPadOS 26 preview"
          className="w-full max-w-[380px] object-contain sm:max-w-5xl lg:max-w-[1180px]"
        />
      </div>
    </div>
  )
}
