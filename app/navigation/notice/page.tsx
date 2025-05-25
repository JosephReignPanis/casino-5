"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="col-span-8 gap-1">
        <h1 className="text-2xl text-yellow-300">이벤트</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-2">
          <div className="flex flex-col bg-zinc-900/90 ">
            <Image
              src={"/notice_image/notice_image1.png"}
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
              src={"/notice_image/notice_image2.png"}
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
              src={"/notice_image/notice_image3.png"}
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
              src={"/notice_image/notice_image4.png"}
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
              src={"/notice_image/notice_image6.png"}
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
              src={"/notice_image/notice_image7.png"}
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
              src={"/notice_image/notice_image8.png"}
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
              src={"/notice_image/notice_image9.png"}
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
              src={"/notice_image/notice_image10.png"}
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
              src={"/notice_image/notice_image11.png"}
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
              src={"/notice_image/notice_image12.png"}
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
        </div>
      </div>
    </>
  );
}
