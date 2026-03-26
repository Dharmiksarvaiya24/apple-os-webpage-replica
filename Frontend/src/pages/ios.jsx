export default function IOSPage() {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center px-4 pt-32 text-xl sm:px-6 md:pt-40 lg:pt-24">
      <div className="w-full max-w-5xl text-center">
        <p className="bg-[linear-gradient(90deg,_rgba(30,171,227,1)_0%,_rgba(87,199,133,1)_100%)] bg-clip-text text-2xl font-semibold text-transparent sm:text-[40px] lg:text-[30px]">
          iOS 26
        </p>
        <p className="mx-auto mt-3 max-w-[320px] text-[42px] font-bold leading-[0.95] text-[#1d1d1f] sm:max-w-[520px] sm:text-[64px] md:text-[70px] lg:mt-2 lg:text-[60px]">
          New look.
          <br />
          Even more magic.
        </p>
      </div>

      <img
        src="https://i.ibb.co/Y7Q1FhbL/Screenshot-2026-03-25-at-11-19-51-PM.png"
        alt="iOS 26"
        className="mb-10 mt-8 w-full max-w-[340px] sm:max-w-3xl lg:mt-10 lg:max-w-5xl"
      />
    </div>
  )
}
