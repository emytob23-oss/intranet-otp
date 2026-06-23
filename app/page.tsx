import Image from "next/image";
import Cards from "./components/Cards";

export default function Home() {
  const cardsData = [
    { id: 1, title: "Sillas de Ruedas", description: "Sillas de ruedas en acero con ficha técnica completa" },
    { id: 2, title: "Caminadores", description: "" },
    
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      
      <main className="flex-1">
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
              Categorías
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              Selecciona una categoría para ver todos los productos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cardsData.map((card) => (
                <Cards 
                  key={card.id}
                  id={card.id}
                  title={card.title} 
                  description={card.description} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 text-gray-600 py-8 text-center">
        <p>&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
