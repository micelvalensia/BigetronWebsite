import { DataResult } from "../type/type";

export function ResultCard({ data }: DataResult) {
  return (
    <div className="w-full rounded-xl bg-white overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 relative border-gray-200 p-4 text-black">
        <h3 className="font-semibold text-lg ml-4">Mobile Legends</h3>
        <div className="flex gap-3 items-center text-sm">
          <span className="text-gray-600">{data.date}</span>
          <span className="font-semibold">{data.time}</span>
        </div>
        <div className="absolute w-4 h-full left-0 bg-red-600"></div>
      </div>

      {/* Teams Section */}
      <div className="flex gap-4 text-black items-center justify-center p-3">
        {/* Team 1 */}
        <div className="flex flex-col items-center flex-1">
          <h2 className="font-semibold text-center mb-3">Bigetron</h2>
          <div className="border-2 border-gray-300 rounded-lg w-24 md:w-36 h-24 md:h-36 flex items-center justify-center bg-gray-50">
            <span className="text-gray-400 text-sm">Logo</span>
          </div>
        </div>

        {/* Score Section */}
        <div className="flex items-center justify-center px-6">
          <div className="flex flex-col items-center gap-4">
            <div className={`font-anton ${data.win ? "text-green-500" : "text-red-500"}`}>
              {data.win ? "WIN" : "LOSE"}
            </div>
            <div className="flex gap-3 font-bold text-4xl font-anton">
              <span>{data.teamScore}</span>
              <span>:</span>
              <span>{data.enemyScore}</span>
            </div>
            <div className="text-center text-sm">MPL ID S16</div>
          </div>
        </div>

        {/* Team 2 */}
        <div className="flex flex-col items-center flex-1">
          <h2 className="font-semibold text-center mb-3">{data.enemy}</h2>
          <div className="border-2 border-gray-300 rounded-lg w-24 md:w-36 h-24 md:h-36 flex items-center justify-center bg-gray-50">
            <span className="text-gray-400 text-sm">Logo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
