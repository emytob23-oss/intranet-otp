import Link from "next/link";
import Image from "next/image";
interface CardProps {
  id: number;
  title: string;
  description: string;
  category?: string;
  image?: string;
}

export default function Cards({ id, title, description, category, image }: CardProps) {
  return (
<Link
      href={`/products/${id}`}
      className="group relative flex min-h-[520px] overflow-hidden rounded-[28px] bg-[#111111] shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
    >
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#151515] to-black" />
      )}

      {/* Oscurecimiento para mejorar la lectura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/30" />

      {/* Contenido superior */}
      <div className="relative z-10 flex w-full flex-col p-7 text-white sm:p-8">
        <span className="text-sm font-light text-white/85">
          {category}
        </span>

        <h3 className="mt-4 max-w-[340px] text-3xl  leading-[1.05] tracking-[-0.035em]"   style={{ fontVariationSettings: '"wght" 600, "opsz" 50' }}>
          {title}
        </h3>

        {description && (
          <p className="mt-4 max-w-[340px] text-sm leading-6 text-white/75">
            {description}
          </p>
        )}

        {/* Botón visual */}
        <span
          aria-hidden="true"
          className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-3xl font-medium leading-none text-black shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-400"
        >
          <span className="-translate-y-[2px]">+</span>
        </span>
      </div>
    </Link>
  );
}
