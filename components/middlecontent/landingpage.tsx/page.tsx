import Image from "next/image";
export default function LandingPage() {
  const notices = [
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];

  const events = [
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];
  interface CardListProps {
    data: { type: string; title: string; date: string }[];
    badgeColor: string;
  }

  const CardList: React.FC<CardListProps> = ({ data, badgeColor }) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center p-2 border-b border-zinc-600 hover:bg-zinc-800/50"
        >
          <div className="flex flex-row gap-2 items-center">
            <div
              className={`px-2 py-1 text-xs text-center font-bold items-center flex rounded-lg ${badgeColor}`}
            >
              {item.type}
            </div>
            <p className="truncate max-w-40 text-sm overflow-hidden whitespace-nowrap ">
              {item.title}
            </p>
          </div>

          <p className="truncate max-w-[100px] text-sm overflow-hidden whitespace-nowrap text-zinc-400">
            {item.date}
          </p>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="block sm:hidden">
        <Image
          src="/banner.png"
          width={120}
          height={100}
          alt="placeholder"
          className="w-full pb-2"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/banner_games/banner_1.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full pb-2"
            />
            <Image
              src={"/banner_games/banner_2.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full pb-2"
            />
            <Image
              src={"/banner_games/banner_3.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full pb-2"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/banner_games/banner_4.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full pb-2"
            />
            <Image
              src={"/banner_games/banner_5.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full pb-2"
            />
            <Image
              src={"/banner_games/banner_6.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full pb-2"
            />
          </div>
        </div>
      </div>

      <div className="col-span-7 hidden sm:block h-full">
        <Image
          src={"/banner.png"}
          width={1000}
          height={400}
          alt="text"
          className="object-cover w-full"
        />
        <div className="grid grid-cols-3 gap-2 pt-2">
          {" "}
          <Image
            src={"/banner_games/banner_1.png"}
            width={100}
            height={100}
            alt="thumbnail"
            className="object-cover w-full"
          />{" "}
          <Image
            src={"/banner_games/banner_2.png"}
            width={100}
            height={100}
            alt="thumbnail"
            className="object-cover w-full"
          />{" "}
          <Image
            src={"/banner_games/banner_3.png"}
            width={100}
            height={100}
            alt="thumbnail"
            className="object-cover w-full"
          />{" "}
          <Image
            src={"/banner_games/banner_4.png"}
            width={100}
            height={100}
            alt="thumbnail"
            className="object-cover w-full"
          />{" "}
          <Image
            src={"/banner_games/banner_5.png"}
            width={100}
            height={100}
            alt="thumbnail"
            className="object-cover w-full"
          />{" "}
          <Image
            src={"/banner_games/banner_6.png"}
            width={100}
            height={100}
            alt="thumbnail"
            className="object-cover w-full"
          />{" "}
        </div>
      </div>
    </>
  );
}
