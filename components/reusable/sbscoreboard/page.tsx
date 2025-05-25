import Image from "next/image";

interface GameItem {
  icon: string;
  time: string;
}

interface SbScoreboardProps {
  title: string;
  mainItem: GameItem;
  subItems: GameItem[];
}

export default function SbScoreboard({
  title,
  mainItem,
  subItems,
}: SbScoreboardProps) {
  return (
    <div className="flex flex-col ">
      <div className="flex bg-neutral-800 gap-2 p-2 rounded-t-lg justify-center">
        {title}
      </div>
      <div className="flex flex-row bg-neutral-900 p-2 rounded-b-lg gap-4">
        <div className="flex flex-row gap-2 items-center">
          <Image src={mainItem.icon} width={20} height={20} alt="icon" />
          <p>{mainItem.time}</p>
        </div>
        <div className="flex flex-col gap-2">
          {subItems.map((item, index) => (
            <div key={index} className="flex flex-row gap-2 items-center">
              <Image
                src={item.icon}
                width={20}
                height={20}
                alt="icon"
                className="w-5 h-5"
              />
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
