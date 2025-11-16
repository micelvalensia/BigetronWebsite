import Image from "next/image";

export function SponsorCard({ data }: any) {
  return (
    <div className="group relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-[#2a2a2a] rounded-xl p-6 md:p-8 transition-all duration-300 hover:bg-[#333333] hover:scale-105 hover:shadow-xl hover:shadow-red-900/20 border border-transparent hover:border-red-900/30">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-red-600/0 to-red-900/0 group-hover:from-red-600/5 group-hover:to-red-900/10 rounded-xl transition-all duration-300"></div>

      {/* Logo placeholder - replace with actual images */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 rounded-lg flex items-center justify-center text-2xl font-bold">
            <Image
              alt={data.name}
              src={`/assets/sponsor${data.logo}`}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {data.name}
          </p>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600/0 group-hover:border-red-600/50 rounded-tr-xl transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600/0 group-hover:border-red-600/50 rounded-bl-xl transition-all duration-300"></div>
    </div>
  );
}
