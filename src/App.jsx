import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import IdeaGenerator from './components/IdeaGenerator'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <IdeaGenerator />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} ContentPilot. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
