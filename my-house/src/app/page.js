import Timer from "./components/timer.js"


export default function Home() {
  return (
    <div className="min-h-screen  text-white flex flex-col">
      
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-5">
        <div>
          <p className="text-green-400 font-semibold tracking-wide mb-2">
            Começando na programação
          </p>
          <h1 className="text-5xl font-bold mb-4">
            Arthur Cerqueira
          </h1>
          <h2 className="text-2xl font-semibold mb-6">
            Cruzeiro em: <span className="text-gray-400"><Timer /></span>
          </h2>
          <p className="text-gray-400 mb-8">
            Site criado para gerenciamento dos projetos :)
          </p>
          <button className="bg-green-400 text-black px-6 py-3 rounded hover:bg-white">
            Ver projetos
          </button>
        </div>
      </section>
    </div>
  );
}

