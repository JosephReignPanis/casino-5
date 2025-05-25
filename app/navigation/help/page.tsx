"use client";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-yellow-300">입금신청</h1>
      <div className="flex flex-col gap-2 md:hidden rounded-lg">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 text-white"
          >
            <div className="flex justify-between text-yellow-300">
              <span>일시</span>
              <span>아이디</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>제목</span>
              <span>gun8005</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>상태</span>
              <span>아이디</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>삭제</span>
              <span>gun8005</span>
            </div>
          </div>
        ))}
      </div>

      {/* Keep the table visible on desktop only */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-neutral-900 table-auto rounded-lg">
          <thead>
            <tr>
              <th className="text-yellow-300 text-center align-middle p-2">
                일시
              </th>
              <th className="text-yellow-300 text-center align-middle p-2">
                제목
              </th>
              <th className="text-yellow-300 text-center align-middle p-2">
                상태
              </th>
              <th className="text-yellow-300 text-center align-middle p-2">
                삭제
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-b-2 border-neutral-800">
                <td className="p-4 text-center align-middle">아이디</td>
                <td className="p-4 text-center align-middle">gun8005</td>
                <td className="p-4 text-center align-middle">아이디</td>
                <td className="p-4 text-center align-middle">gun8005</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
