import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Nav />
      <main className="flex min-h-[calc(100vh-56px)] items-center justify-center">
        <span className="text-3xl font-semibold tracking-wide">hello</span>
      </main>
    </div>
  )
}
