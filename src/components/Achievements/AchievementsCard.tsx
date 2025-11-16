import { DataCard } from "../type/type";

export function AchievementCard({ data }: DataCard) {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/achievements${data.image})`,
      }}
      className={`h-full w-full 
      max-w-xl 
      min-w-[80vw] md:min-w-[350px] 
      bg-gray-600 flex justify-center items-center 
      rounded-xl text-white bg-center bg-cover group transition-all duration-300`}
    >
      <div className="absolute inset-0 bg-black/0 hidden group-hover:bg-black/40 transition-all duration-300 group-hover:flex justify-center items-center">
        {data.title}
      </div>
    </div>
  );
}
