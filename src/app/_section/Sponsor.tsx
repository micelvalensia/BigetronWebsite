import Image from "next/image";

export function SponsorComp() {
  const sponsors = [
    { id: 1, name: "IQOO", logo: "/assets/iqoo.png" },
    { id: 2, name: "Bagus", logo: "/assets/bagus.png" },
    { id: 3, name: "Dunia Games", logo: "/assets/dg.png" },
    { id: 4, name: "Yoritos", logo: "/assets/yoritos.png" },
    { id: 5, name: "CBN Fiber", logo: "/assets/cbn.png" },
  ];

  return (
    <div className="w-full bg-linear-to-b from-[#1a1a1a] to-[#212121] py-12 md:py-16 relative overflow-hidden">
      {/* Top Gradient Overlay */}
      <div className="absolute w-full top-0 h-[150px] bg-[linear-gradient(to_top,rgba(0,0,0,0)_10%,rgba(0,0,0,100)_100%)]"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-2">
            OUR SPONSORS
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
        </div>

        {/* Sponsors Grid */}
        <div className="flex flex-wrap gap-6 md:gap-8 items-center justify-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="group relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-[#2a2a2a] rounded-xl p-6 md:p-8 transition-all duration-300 hover:bg-[#333333] hover:scale-105 hover:shadow-xl hover:shadow-red-900/20 border border-transparent hover:border-red-900/30"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-red-600/0 to-red-900/0 group-hover:from-red-600/5 group-hover:to-red-900/10 rounded-xl transition-all duration-300"></div>

              {/* Logo placeholder - replace with actual images */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 rounded-lg flex items-center justify-center text-2xl font-bold">
                    <Image
                      alt={sponsor.name}
                      src={sponsor.logo}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {sponsor.name}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600/0 group-hover:border-red-600/50 rounded-tr-xl transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600/0 group-hover:border-red-600/50 rounded-bl-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm md:text-base">
            Powered by our amazing partners
          </p>
        </div>
      </div>
    </div>
  );
}
