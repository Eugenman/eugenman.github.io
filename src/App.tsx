import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@components/Layout/Layout'

const Home = lazy(() => import('@routes/Home'))
const Skills = lazy(() => import('@routes/Skills'))
const Projects = lazy(() => import('@routes/Projects'))
const Algorithms = lazy(() => import('@routes/Algorithms'))
const About = lazy(() => import('@routes/About'))
const Contact = lazy(() => import('@routes/Contact'))
const NotFound = lazy(() => import('@routes/NotFound'))

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}