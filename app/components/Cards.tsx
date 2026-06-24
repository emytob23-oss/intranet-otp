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
      className="flex h-full flex-col bg-[#1A1A1A] shadow-xl  p-6 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-300 group"
    >
      <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-green-500 rounded mb-4 group-hover:w-full transition-all duration-300"></div>
      <h3 className="text-lg  mb-2 text-white">
        {title}
      </h3>
      
    </Link>
  );
}
