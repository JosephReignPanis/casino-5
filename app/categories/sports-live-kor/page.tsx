"use client";
import { useState } from "react";
import Image from "next/image";
import LeagueCard from "@/components/reusable/leaguecard/page";
const sports = [
  { id: "all", name: "All", icon: "/sports_nav/icon_sports01.png" },
  { id: "soccer", name: "축구", icon: "/sports_nav/icon_sports02.png" },
  { id: "basketball", name: "농구", icon: "/sports_nav/icon_sports04.png" },
];

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("all");
  return (
    <>
      <div className="col-span-8 gap-1">
        {/* Sports Navigation */}
        <div className="grid grid-cols-3 bg-neutral-900 overflow-auto">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className={`grid grid-cols-1 place-items-center py-2 border-r-2 border-zinc-950/50 ${
                selectedSport === sport.id ? "bg-zinc-800" : ""
              }`}
              onClick={() => setSelectedSport(sport.id)}
            >
              <button className="flex flex-col items-center justify-center space-y-1 focus:outline-none">
                <Image
                  src={sport.icon}
                  height={30}
                  width={30}
                  alt={sport.name}
                />
                <p className="font-medium">{sport.name}</p>
                <p className="text-sm text-gray-400">(123)</p>
              </button>
            </div>
          ))}
        </div>
        <div className="flex p-2 text-2xl bg-neutral-900 my-2">
          스포츠 해외형
        </div>
        {/* Content Section */}{" "}
        <div className="bg-zinc-800 p-2 ">
          <p className="text-lg text-yellow-400">
            {" "}
            다폴더 보너스 추가 배당 (자동){" "}
          </p>{" "}
          <p> (3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)</p>
          <div className="flex flex-row w-full gap-1 mt-2 rounded-sm">
            <div className="flex flex-row text-sm bg-zinc-900 justify-between text-violet-300 p-2 w-full rounded-sm">
              <p>3폴더이상</p>
              <p>1.03</p>
            </div>{" "}
            <div className="flex flex-row text-sm bg-zinc-900 justify-between text-yellow-300 p-2 w-full rounded-sm">
              <p>3폴더이상</p>
              <p>1.03</p>
            </div>{" "}
            <div className="flex flex-row text-sm bg-zinc-900 justify-between text-blue-300 p-2 w-full rounded-sm">
              <p>3폴더이상</p>
              <p>1.03</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-white">
          {" "}
          <div className="col-span-2">
            {selectedSport === "all" && (
              <>
                <div className="max-h-screen overflow-y-auto">
                  <LeagueCard
                    imageSrc="/sports_nav/icon_sports01.png"
                    league="aaaaa"
                    date="4월30일(목)"
                    time="20:00"
                  />
                </div>
              </>
            )}
            {selectedSport === "soccer" && (
              <>
                <div className="max-h-screen overflow-y-auto">
                  <LeagueCard
                    imageSrc="/sports_nav/icon_sports02.png"
                    league="bbbbb"
                    date="4월50일(목)"
                    time="20:00"
                  />
                </div>
              </>
            )}
            {selectedSport === "basketball" && (
              <>
                <div className="max-h-screen overflow-y-auto">
                  <LeagueCard
                    imageSrc="/sports_nav/icon_sports04.png"
                    league="ccccc"
                    date="03월27일(목)"
                    time="20:00"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
