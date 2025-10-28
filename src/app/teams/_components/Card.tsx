interface CardsType {
  game: string
}
export default function Card({game}: CardsType) {
  const clipId = `clip-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="h-[480px] sm:h-[350px] md:h-[580px] flex items-center justify-center w-full relative ">
      <svg className="absolute inset-0 w-0 h-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path 
            d="
              M0,0.01
              L0.33,0.01
              A0.05,0.05 0 0 0 0.34,0.015
              Q0.405,0.095 0.41,0.1
              L0.99,0.1
              Q0.995,0.1 1,0.105
              L1,0.99
              Q1,1 0.99,1
              L0.01,1
              Q0,1 0,0.99
              Z

            " />
          </clipPath>
        </defs>
      </svg>
      <div className=" absolute top-2 right-0 w-[60%] text-center">
        <span className="text-white font-bold text-lg">{game}</span>
      </div>
      <div 
        className="w-full h-full bg-red-700 rounded-lg flex items-center justify-center"
        style={{clipPath: `url(#${clipId})`}}
      >
      </div>
    </div>
  )
}