import Nav from './components/Nav.jsx'
import Overview from './pages/overview.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Nav />
      <Overview />
      <Footer />
    </div>
  )
}
