import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Saved from './pages/Saved'
import Digest from './pages/Digest'
import Settings from './pages/Settings'
import Proof from './pages/Proof'
import Home from './pages/Home'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/digest" element={<Digest />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/proof" element={<Proof />} />
      </Routes>
    </Layout>
  )
}
