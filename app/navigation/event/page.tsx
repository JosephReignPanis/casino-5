"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-yellow-300">이벤트</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-4 gap-2">
        <div className="flex flex-col bg-zinc-900/90  ">
          <Image
            src={"/event_image/banner_event.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white">신규가입 첫충전 이벤트</p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event2.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white">신규가입 첫충전 이벤트</p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event3.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 카지노 & 슬롯 무한매충</p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event4.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 남대문 말뚝박기 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event5.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 지인추천 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event6.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 출석체크 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event7.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 누적 충전 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event8.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 월요일 개인정산 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event9.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 토닥토닥 위로 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event10.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 스포츠 다폴더 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event11.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 스포츠 한폴낙 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event12.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 스포츠 올미당 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event13.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 미니게임 연승 & 연패 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event14.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 미니게임 먹죽먹죽 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event15.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 토요일 로또 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event16.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 슬롯 올인 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event17.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 슬롯 올인 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event18.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 복귀하라 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event19.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 커뮤니티 리뷰 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event20.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> 생일 축하 이벤트 </p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>{" "}
        <div className="flex flex-col bg-zinc-900/90 ">
          <Image
            src={"/event_image/banner_event21.png"}
            width={200}
            height={20}
            alt="banner"
            className="object-fill w-full h-auto"
          />
          <div className="flex flex-row justify-between items-center p-2">
            <p className="text-white"> VIP레벨 고액 전용 당일</p>
            <button className="p-1 text-sm px-3 rounded-sm bg-zinc-700/50">
              상세보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
