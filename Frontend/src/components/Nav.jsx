export default function Nav() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white/70 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-sm font-semibold tracking-[0.2em] text-slate-500">OS</span>
        <div className="flex items-center gap-4 text-xs font-medium uppercase text-slate-500">
          <span>Home</span>
          <span>Mac</span>
          <span>iPhone</span>
          <span>Store</span>
        </div>
      </div>
    </nav>
  )
}
