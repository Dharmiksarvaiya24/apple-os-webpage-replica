import Nav from './components/Nav.jsx'
import Overview from './pages/overview.jsx'

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Nav />
      <Overview />
    </div>
  )
}
