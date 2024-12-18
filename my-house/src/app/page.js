export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5">
        <div className="text-green-400 text-2xl font-bold">Arthur Cerqueira</div>
        <div className="flex space-x-6 items-center">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">Account</a>
          <a href="#" className="hover:text-green-400">Sign In</a>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-green-400">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-5">
        <div>
          <p className="text-green-400 font-semibold tracking-wide mb-2">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="text-5xl font-bold mb-4">
            Grow with data.
          </h1>
          <h2 className="text-3xl font-semibold mb-6">
            Fast, flexible financing for <span className="text-gray-400">D</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
          </p>
          <button className="bg-green-400 text-black px-6 py-3 rounded hover:bg-white">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
