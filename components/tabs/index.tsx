"use client";
import Image from "next/image";
import { useState } from "react";

// Define sport names as a union type
type Sport = "축구" | "농구" | "야구" | "아이스하키" | "배구" | "LOL";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  // Type the state properly using the Sport keys
  const [dropdownOpen, setDropdownOpen] = useState<Record<Sport, boolean>>({
    축구: false,
    농구: false,
    야구: false,
    아이스하키: false,
    배구: false,
    LOL: false,
  });

  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);

  const sports: Sport[] = ["축구", "농구", "야구", "아이스하키", "배구", "LOL"];


  const handleSportClick = (sport: Sport) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [sport]: !prev[sport],
    }));
  };

  const handleSingaporeClick = () => {
    setSecondDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex">
        {["스포츠"].map((title, i) => (
          <button
            key={title}
            className={`flex-1 p-1 text-center rounded-t-lg ${
              activeTab === i
                ? "bg-neutral-800 text-white text-lg"
                : "bg-neutral-900 hover:bg-zinc-800 text-lg"
            }`}
            onClick={() => setActiveTab(i)}
          >
            <div>{title}</div>
            <div className="text-sm text-yellow-500">123</div>
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <div className="flex flex-col rounded-b-lg  bg-neutral-900">
          {sports.map((sport, index) => (
            <div key={sport}>
              <div
                className="flex flex-row gap-2 justify-between p-2 text-white  py-2 align-middle items-center cursor-pointer "
                onClick={() => handleSportClick(sport)}
              >
                <div className="flex flex-row gap-2 align-middle items-center">
                  <Image
                    src={`/icon_sidebar/icon_${index + 1}.png`}
                    width={30}
                    height={30}
                    alt={sport}
                  />
                  <div>{sport}</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>

              {/* Dropdown 1 */}
              {dropdownOpen[sport] && (
                <div className="bg-zinc-900/70 p-2 text-white">
                  <div
                    onClick={handleSingaporeClick}
                    className="cursor-pointer"
                  >
                    싱가포르 (1)
                  </div>

                  {/* Dropdown 2 */}
                  {secondDropdownOpen && (
                    <div className="bg-zinc-900/50 p-2 mt-2 text-white">
                      <div>Additional Info for 싱가포르</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
