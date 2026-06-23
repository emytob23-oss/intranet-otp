"use client";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  specs: Record<string, string>;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
  specs,
}: ProductCardProps) {
  const handleDownload = () => {
    const content = [
      `Ficha Técnica - ${name}`,
      `Precio: $${price}`,
      `Descripción: ${description}`,
      "",
      "Especificaciones:",
      ...Object.entries(specs).map(([key, value]) => `${key}: ${value}`),
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name.toLowerCase().replace(/\s+/g, "-")}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-64 bg-gray-100 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="p-6 space-y-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
              ${price}
            </span>
          </div>
          <p className="text-sm leading-6 text-gray-600">{description}</p>
        </div>

        <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              Especificaciones
            </h4>
           {/*  <button
              onClick={handleDownload}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Descargar PDF
            </button> */}
          </div>
          <div className="space-y-2">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className="flex items-start justify-between gap-3 text-sm">
                <span className="text-gray-500">{key}</span>
                <span className="text-right font-medium text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
