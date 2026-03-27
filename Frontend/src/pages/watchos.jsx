import watch from '../assets/watch.png'
export default function WatchOSPage() {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center px-4 pt-32 text-xl sm:px-6 md:pt-40 lg:pt-24">
      <div className="w-full max-w-5xl text-center">
        <p className="bg-green-700 bg-clip-text text-2xl font-semibold text-transparent sm:text-4xl lg:text-[30px]">
          watchOS 26
        </p>
        <p className="mx-auto mt-3 max-w-[320px] text-[42px] font-bold leading-[0.95] text-[#1d1d1f] sm:max-w-[520px] sm:text-[64px] md:text-[70px] lg:mt-2 lg:text-[60px]">
          Gets you. So you
          <br />
          can get after it.
        </p>
      </div>

      <div className="mt-8 flex w-full justify-center  mt-[100px]  lg:mb-20">
        <img
          src={watch}
          alt="watchOS 26 preview"
          className="w-full max-w-[300px] object-contain sm:max-w-3xl lg:max-w-4xl"
        />
      </div>
    </div>
  )
}
