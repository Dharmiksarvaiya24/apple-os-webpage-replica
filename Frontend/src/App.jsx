import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import IOSPage from './pages/ios.jsx'
import IPadOSPage from './pages/ipados.jsx'
import MacOSPage from './pages/macos.jsx'
import OverviewPage from './pages/overview.jsx'
import WatchOSPage from './pages/watchos.jsx'

function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/ios" element={<IOSPage />} />
        <Route path="/macos" element={<MacOSPage />} />
        <Route path="/ipados" element={<IPadOSPage />} />
        <Route path="/watchos" element={<WatchOSPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
