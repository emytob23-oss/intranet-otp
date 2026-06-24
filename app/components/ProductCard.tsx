"use client";

import { jsPDF } from "jspdf";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  specs: Record<string, string>;
  pdfUrl?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
  specs,
  pdfUrl,
}: ProductCardProps) {
  const formatPrice = (value: number) =>
    new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 }).format(value);

  const formatTextValue = (value: string | number) =>
    String(value).replace(/,(\d)/g, ".$1");

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.download = `${name.toLowerCase().replace(/\s+/g, "-")}-ficha-tecnica.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    const lineHeight = 16;
    let y = 60;

    doc.setFont("poppins", "bold");
    doc.setFontSize(18);
    doc.text(`Ficha Técnica - ${name}`, margin, y);

    y += 30;
    doc.setFont("poppins", "normal");
    doc.setFontSize(12);
    doc.text(`Precio: $${formatPrice(price)}`, margin, y);

    y += lineHeight;
    const descriptionLines = doc.splitTextToSize(description, 500);
    doc.text(descriptionLines, margin, y);

    y += descriptionLines.length * lineHeight + 20;
    doc.setFont("poppins", "bold");
    doc.text("Especificaciones", margin, y);

    y += 20;
    doc.setFont("poppins", "normal");

    Object.entries(specs).forEach(([key, value]) => {
      const text = `${key}: ${formatTextValue(value)}`;
      const lines = doc.splitTextToSize(text, 500);
      doc.text(lines, margin, y);
      y += lines.length * lineHeight;
    });

    const fileName = `${name.toLowerCase().replace(/\s+/g, "-")}-ficha-tecnica.pdf`;
    doc.save(fileName);
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
              ${formatPrice(price)}
            </span>
          </div>
          <p className="text-sm leading-6 text-gray-600">{description}</p>
        </div>
        <div>
          <button
            onClick={handleDownload}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Descargar PDF
          </button>
        </div>
        <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700">
              Especificaciones
            </h4>

          </div>

          <div className="space-y-2">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className="flex items-start justify-between gap-3 text-sm">
                <span className="text-gray-500">{key}</span>
                <span className="text-right font-medium text-gray-900">{formatTextValue(value)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
