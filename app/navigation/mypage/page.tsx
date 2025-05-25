"use client";
export default function Home() {
  return (
    <>
      <div className="col-span-8 gap-1">
        <h1 className="text-2xl text-yellow-300">입금신청</h1>
        <div className="w-full bg-neutral-900 divide-y divide-neutral-800">
          <div className="flex flex-col md:flex-row p-3">
            <div className="w-full md:w-1/6 text-neutral-400">아이디</div>
            <div className="w-full md:w-2/6 text-white">gun8005</div>
          </div>
          <div className="flex flex-col md:flex-row p-3">
            <div className="w-full md:w-1/6 text-neutral-400">닉네임</div>
            <div className="w-full md:w-2/6 text-white">건바리</div>
          </div>
          <div className="flex flex-col md:flex-row p-3">
            <div className="w-full md:w-1/6 text-neutral-400">은행</div>
            <div className="w-full md:w-2/6 text-white">하나은행</div>
          </div>
          <div className="flex flex-col md:flex-row p-3">
            <div className="w-full md:w-1/6 text-neutral-400">계좌번호</div>
            <div className="w-full md:w-2/6 text-white">891910039*****</div>
          </div>
          <div className="flex flex-col md:flex-row p-3">
            <div className="w-full md:w-1/6 text-neutral-400">비밀번호</div>
            <div className="w-full md:w-2/6 text-white">
              비밀번호 변경은 고객센터로 문의해주세요.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
