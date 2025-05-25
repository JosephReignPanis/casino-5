"use client";
import { useState } from "react";
import DividendsBonus from "@/components/reusable/dividendsBonus/page";
import MatchCard from "@/components/reusable/matchcard/page";
const sports = [
  {
    id: "스포츠(해외형)",
    name: "스포츠(해외형)",
    icon: "/sports_nav/icon_sports01.png",
  },
  {
    id: "스포츠(국내형)",
    name: "스포츠(국내형)",
    icon: "/sports_nav/icon_sports02.png",
  },
  {
    id: "스포츠(스페셜)",
    name: "스포츠(스페셜)",
    icon: "/sports_nav/icon_sports04.png",
  },
  {
    id: "스포츠(실시간)",
    name: "스포츠(실시간)",
    icon: "/sports_nav/icon_sports03.png",
  },
  { id: "미니게임", name: "미니게임", icon: "/sports_nav/icon_sports05.png" },
  { id: "벳365", name: "벳365", icon: "/sports_nav/icon_sports09.png" },
];

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("스포츠(해외형)");
  return (
    <>
      {" "}
      <div className="flex overflow-x-auto bg-neutral-900">
        {sports.map((sport) => (
          <div
            key={sport.id}
            className={`min-w-[100px] grid grid-cols-1 place-items-center py-2 border-r-2 border-zinc-950/50 ${
              selectedSport === sport.id ? "bg-zinc-800" : ""
            }`}
            onClick={() => setSelectedSport(sport.id)}
          >
            <button className="flex flex-col items-center justify-center space-y-1 focus:outline-none">
              <p className="m-0 text-xs p-1">{sport.name}</p>
              <p className="text-xs text-gray-400">(123)</p>
            </button>
          </div>
        ))}
      </div>
      {/* Content Section */}
      <div className="grid grid-cols-2 gap-2 text-white rounded-b-lg">
        <div className="col-span-2 ">
          {selectedSport === "스포츠(해외형)" && (
            <>
              <DividendsBonus
                title="★ 다폴더 보너스 추가 배당 (자동)"
                description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />

              <MatchCard
                flagSrc="/flag_icon/uk.png"
                sportIconSrc="/sports_nav/icon_sports02.png"
                league="J 리그컵"
                date="03월26일(수) 19:00"
                teamA="Sydney CBD"
                teamB="Hurstville"
                betCount="배팅 +11"
                odds={[
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                ]}
              />
            </>
          )}
          {selectedSport === "스포츠(국내형)" && (
            <>
              <DividendsBonus
                title="★ 다폴더 보너스 추가 배당 (자동)"
                description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />

              <MatchCard
                flagSrc="/flag_icon/uk.png"
                sportIconSrc="/sports_nav/icon_sports02.png"
                league="J 리그컵"
                date="03월26일(수) 19:00"
                teamA="Sydney CBD"
                teamB="Hurstville"
                betCount="배팅 +11"
                odds={[
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                ]}
              />
            </>
          )}
          {selectedSport === "스포츠(스페셜)" && (
            <>
              <DividendsBonus
                title="★ 다폴더 보너스 추가 배당 (자동)"
                description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />

              <MatchCard
                flagSrc="/flag_icon/uk.png"
                sportIconSrc="/sports_nav/icon_sports02.png"
                league="J 리그컵"
                date="03월26일(수) 19:00"
                teamA="Sydney CBD"
                teamB="Hurstville"
                betCount="배팅 +11"
                odds={[
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                ]}
              />
            </>
          )}
          {selectedSport === "스포츠(실시간)" && (
            <>
              <DividendsBonus
                title="★ 다폴더 보너스 추가 배당 (자동)"
                description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />

              <MatchCard
                flagSrc="/flag_icon/uk.png"
                sportIconSrc="/sports_nav/icon_sports02.png"
                league="J 리그컵"
                date="03월26일(수) 19:00"
                teamA="Sydney CBD"
                teamB="Hurstville"
                betCount="배팅 +11"
                odds={[
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                ]}
              />
            </>
          )}
          {selectedSport === "미니게임" && (
            <>
              <DividendsBonus
                title="★ 다폴더 보너스 추가 배당 (자동)"
                description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />

              <MatchCard
                flagSrc="/flag_icon/uk.png"
                sportIconSrc="/sports_nav/icon_sports02.png"
                league="J 리그컵"
                date="03월26일(수) 19:00"
                teamA="Sydney CBD"
                teamB="Hurstville"
                betCount="배팅 +11"
                odds={[
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                ]}
              />
            </>
          )}
          {selectedSport === "벳365" && (
            <>
              <DividendsBonus
                title="★ 다폴더 보너스 추가 배당 (자동)"
                description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />

              <MatchCard
                flagSrc="/flag_icon/uk.png"
                sportIconSrc="/sports_nav/icon_sports02.png"
                league="J 리그컵"
                date="03월26일(수) 19:00"
                teamA="Sydney CBD"
                teamB="Hurstville"
                betCount="배팅 +11"
                odds={[
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                ]}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
