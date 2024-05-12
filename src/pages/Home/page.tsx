const Home = () => {
  return (
    <main className="h-screen">
      <div className="relative -z-10">
        <div className="bg-gradient-to-r from-teal-400 via-green-500 to-emerald-600 section-container relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="wave wave1 absolute bottom-0 left-0 h-5/6 bg-teal-400 w-full"></div>
            <div className="wave wave2 absolute bottom-0 left-0 h-4/6 bg-green-500 w-full"></div>
            <div className="wave wave3 absolute bottom-0 left-0 h-3/6 bg-emerald-600 w-full"></div>
          </div>
        </div>
      </div>

      <header className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Interview with AI</h1>
        <p className="text-lg text-gray-600">Revolutionize Your Hiring Process with AI</p>
      </header>

      <section className="max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
        <button className="btn btn-primary">Sign Up</button>
      </section>
    </main>
  )
}

export default Home
