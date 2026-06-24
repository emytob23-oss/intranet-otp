import Image from "next/image";
import Cards from "./components/Cards";

export default function Home() {
  const cardsData = [
    { id: 1, title: "Sillas de Ruedas", description: "", category: "Ortopedia", image: "../images/Silla-de-Ruedas-Estandar-Fy809.webp" },
    { id: 2, title: "Caminadores", description: "", category: "Movilidad", image: "../images/caminador-stand-up.webp" },
    { id: 3, title: "Muletas", description: "", category: "Apoyo", image: "../images/muletas-ortopedicas.webp" },
    { id: 4, title: "Bastones", description: "", category: "Accesorios", image: "../images/Baston-cuatro-patas-tipo-Cisne-Plateado-base-Mediana.webp" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#141414]">


      <main className="flex-1 bg-[#141414]">

        <section className="px-5 py-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-6xl text-left">
              <span className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-500">
                Ortopedicos y Salud ✨
              </span>

              <h1
                className="text-[44px] leading-[1.05] tracking-[-0.04em] text-white sm:text-[44px] text-left"
                style={{ fontVariationSettings: '"wght" 660, "opsz" 50' }}
              >
                Categorías
              </h1>

              <span className="text-sm font-light text-white/90 text-left block mt-4
              ">
                Selecciona una categoría para consultar productos,
                especificaciones y fichas técnicas.
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cardsData.map((card) => (
                <Cards
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  id={card.id}
                  category={card.category}
                  image={card.image}
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
