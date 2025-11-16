import Image from "next/image";
import { DataNews } from "../type/type";

export function NewsCard({ data }: DataNews) {
  return (
    <div className="w-full h-96 md:h-120 flex flex-col relative">
      <div className="w-full h-[65%] relative rounded-xl overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-br from-red-600/0 to-black/0 group-hover:from-red-600/5 group-hover:to-black/40 transition-all duration-300 z-10"></div>
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-6 border-r-6 border-red-600/0 group-hover:border-red-600 rounded-tr-xl transition-all duration-300 z-10"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-6 border-l-6 border-red-600/0 group-hover:border-red-600 rounded-bl-xl transition-all duration-300 z-10"></div>
        <Image
          alt={data.description}
          src={`/assets/news${data.src}`}
          fill
          className="object-cover hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-3 p-5 h-[20%]">
        <span className="text-lg font-light">{data.date}</span>
        <p className="text-xl md:text-2xl font-semibold">{data.description}</p>
      </div>
    </div>
  );
}
