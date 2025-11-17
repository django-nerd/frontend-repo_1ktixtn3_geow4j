function Features() {
  const features = [
    {
      title: 'Idea generator',
      desc: 'Turn a topic into campaign-ready ideas in seconds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2a7 7 0 00-4 12.9V18a2 2 0 002 2h4a2 2 0 002-2v-3.1A7 7 0 0012 2zM9 21h6v1H9v-1z" /></svg>
      )
    },
    {
      title: 'Multi-channel publishing',
      desc: 'Publish to blog, LinkedIn, X, and newsletters with one click.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M4 4h16v2H4zM4 11h16v2H4zM4 18h16v2H4z" /></svg>
      )
    },
    {
      title: 'Lead capture',
      desc: 'Built-in forms that sync straight to your CRM or exports.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-9 9a9 9 0 1118 0H3z" /></svg>
      )
    },
  ]
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Everything you need</h2>
        <p className="text-gray-600 mt-3 text-center max-w-2xl mx-auto">From ideation to distribution, keep your pipeline full and your calendar scheduled.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="h-10 w-10 rounded-md bg-blue-600 text-white grid place-items-center">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
