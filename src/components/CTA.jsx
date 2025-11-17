import { useState } from 'react'

function CTA() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState(null)

  const submitLead = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, company, source: 'website', consent: true }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ ok: true, msg: data.message })
      setEmail(''); setName(''); setCompany('')
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lead" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Get 10 tailored content ideas for your product</h3>
          <p className="text-gray-600 text-center mt-2">Tell us who you sell to. We’ll email you a ready-to-use content plan.</p>

          <form onSubmit={submitLead} className="mt-8 grid sm:grid-cols-3 gap-3">
            <input value={name} onChange={(e)=>setName(e.target.value)} className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
            <input value={company} onChange={(e)=>setCompany(e.target.value)} className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" placeholder="Work email" />
            <button disabled={loading} className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">{loading ? 'Submitting...' : 'Send me the plan'}</button>
          </form>

          {status && (
            <div className={`mt-4 text-sm text-center ${status.ok ? 'text-green-700' : 'text-red-700'}`}>{status.msg}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTA
