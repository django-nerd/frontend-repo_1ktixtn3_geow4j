import { useState } from 'react'

function IdeaGenerator() {
  const [topic, setTopic] = useState('')
  const [audience, setAudience] = useState('marketers')
  const [ideas, setIdeas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const generate = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setIdeas([])
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/ideas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, audience })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to generate ideas')
      setIdeas(data.ideas || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end gap-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Topic</label>
              <input value={topic} onChange={(e)=>setTopic(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., SEO content, B2B onboarding" />
            </div>
            <div className="w-full sm:w-64">
              <label className="block text-sm font-medium text-gray-700">Audience</label>
              <input value={audience} onChange={(e)=>setAudience(e.target.value)} className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., startups, product managers" />
            </div>
            <button onClick={generate} disabled={loading || !topic} className="h-10 sm:h-auto px-6 py-2 rounded-md bg-gray-900 text-white font-semibold hover:bg-black disabled:opacity-60">{loading ? 'Thinking...' : 'Generate ideas'}</button>
          </div>
          {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
          {ideas.length > 0 && (
            <ul className="mt-6 grid md:grid-cols-2 gap-3">
              {ideas.map((idea, i) => (
                <li key={i} className="p-4 bg-white border border-gray-200 rounded-lg">
                  <span className="text-gray-800">{idea}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default IdeaGenerator
