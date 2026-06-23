import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  description: string;
}

export default function Cards({ id, title, description }: CardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="flex h-full flex-col bg-white border border-gray-200 p-6 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-300 group"
    >
      <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-4 group-hover:w-full transition-all duration-300"></div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="mt-auto text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
