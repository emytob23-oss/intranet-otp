import Image from "next/image";
import Cards from "./components/Cards";

export default function Home() {
  const cardsData = [
    { id: 1, title: "Sillas de Ruedas", description: "Sillas de ruedas en acero con ficha técnica completa" },
    { id: 2, title: "Caminadores", description: "" },
    
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#141414]">

      
      <main className="flex-1 bg-[#141414]">

        <section className="px-5 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-500">
                Ortopedicos y Salud ✨
              </span>

              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Categorías
              </h1>

              <p className="mt-5 font-thin leading-7 text-gray-300 sm:text-lg">
                Selecciona una categoría para consultar productos,
                especificaciones y fichas técnicas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cardsData.map((card) => (
                <Cards
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  id={card.id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0D1111] border-t border-gray-800 text-gray-300 py-8 text-center">
        <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
