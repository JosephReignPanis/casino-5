"use client";

import { useState } from "react";

export default function Home() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const data = [
    {
      status: "읽음",
      title: "야구시즌 관련경기",
      date: "2025-03-27",
      message:
        "다가오는 야구 시즌 관련 경기 마감 규정 안내차 쪽지 보내드립니다...",
      link: "평생남대문.com",
    },
    {
      status: "읽음",
      title: "축구 경기",
      date: "2025-03-28",
      message: "이번 주 축구 경기 일정이 변경되었습니다.",
      link: "sportsupdate.com",
    },
  ];

  return (
    <>
      <div className="col-span-8 gap-1">
        <h1 className="text-2xl text-yellow-300 mb-4">입금신청</h1>

        <div className="max-h-screen overflow-y-auto">
          {/* Header */}
          <div className="grid grid-cols-4 bg-neutral-900 text-yellow-300 p-4 border-b border-neutral-800 font-semibold text-center">
            <div>일시</div>
            <div>제목</div>
            <div>작성일</div>
            <div>삭제</div>
          </div>

          {/* Scrollable Rows */}
          <div className="overflow-y-auto max-h-[400px]">
            {" "}
            {/* Set your desired max height */}
            {data.map((item, index) => (
              <div key={index} className="border-b border-neutral-800">
                {/* Main Row */}
                <div
                  className="grid grid-cols-4 bg-neutral-900 hover:bg-neutral-800 cursor-pointer text-center items-center"
                  onClick={() => toggleRow(index)}
                >
                  <div className="p-2">
                    <p className="inline-block text-xs py-1 px-3 bg-neutral-700 rounded-full">
                      {item.status}
                    </p>
                  </div>
                  <div className="p-2 text-sm truncate whitespace-nowrap overflow-hidden">
                    {item.title}
                  </div>
                  <div className="p-2 text-sm truncate whitespace-nowrap overflow-hidden">
                    {item.date}
                  </div>
                  <div className="p-2 text-sm">🗑️</div>
                </div>

                {/* Expandable Row */}
                {expandedRow === index && (
                  <div className="bg-zinc-950 text-white text-center p-4">
                    <p className="pb-2">안녕하세요 남대문 운영진입니다.</p>
                    <p className="pb-2">
                      ----------------------------------------------
                    </p>
                    <p className="pb-2">{item.message}</p>
                    <p className="text-yellow-400">평생 주소 : {item.link}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-row w-full justify-center mt-4 gap-2">
            <button className="border text-sm border-yellow-400 text-yellow-400 px-4 py-3 hover:text-black hover:bg-yellow-400 rounded-lg">
              입금신청하기
            </button>
            <button className="bg-zinc-800 text-sm text-white px-4 py-3 hover:bg-zinc-700 rounded-lg">
              입금신청하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
