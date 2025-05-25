import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const uppernav = [
    {
      name: "입금신청",
      href: "/navigation/charge",
    },
    {
      name: "출금신청",
      href: "/navigation/exchange",
    },
    {
      name: "경기결과",
      href: "/navigation/result",
    },
    {
      name: "베팅내역",
      href: "/navigation/betlist",
    },
    {
      name: "공지사항",
      href: "/navigation/notice",
    },
    {
      name: "이벤트",
      href: "/navigation/event",
    },
    {
      name: "쪽지함",
      href: "/navigation/message",
    },
    {
      name: "고객센터",
      href: "/navigation/help",
    },
    {
      name: "마이페이",
      href: "/navigation/mypage",
    },
    {
      name: "출석체크",
      href: "/navigation/attendance",
    },
  ];

  const userinfo = [
    {
      label: "베팅중인금액:",
      value: "100,000원",
    },
    {
      label: "포인트:",
      value: "56,000P",
    },
    {
      label: "가상머니:",
      value: "500,000원",
    },
  ];
  const lowernav = [
    {
      name: "스포츠 (국내형)",
      href: "/categories/sportscross",
    },
    {
      name: "스페셜",
      href: "/categories/sportsspecial",
    },
    {
      name: "인플레이",
      href: "/inplay",
    },
    {
      name: "실시간",
      href: "/categories/sports-live-kor",
    },
    {
      name: "미니게임",
      href: "/categories/minigame",
    },
    {
      name: "벳365",
      href: "/categories/bet365",
    },
    {
      name: "토큰게임",
      href: "/categories/tokengame",
    },
    {
      name: "카지노",
      href: "/categories/livecasino",
    },
    {
      name: "슬롯",
      href: "/categories/slot",
    },
  ];

  return (
    <div className="hidden lg:block">
      {/* Top Nav */}
      <nav className="bg-[#352503] flex justify-between p-3">
        <div className="flex items-center gap-3  text-sm">
          <Link href="/">
            <Image src="/logo.png" width={105} height={105} alt="Logo" />
          </Link>
          {uppernav.map((upp, index) => (
            <Link key={index} href={upp.href} className="nav-btn-primary">
              {upp.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center gap-5 text-sm">
          <p>홍길동님</p>
          {userinfo.map((userinfo, index) => (
            <div key={index} className="flex flex-row gap-2">
              <p>{userinfo.label}</p>
              <p className="nav-btn-primary">{userinfo.value}</p>
            </div>
          ))}
        </div>
      </nav>

      <hr className="hr-gradient" />

      {/* Bottom Nav */}
      <nav className="navgradient flex justify-end items-center gap-4 p-2">
        {lowernav.map((lowernavs, index) => (
          <div key={index} className="flex items-center ">
            <Link href={lowernavs.href} className="nav-btn-secondary text-sm">
              {lowernavs.name}
            </Link>
          </div>
        ))}

        <div className="flex flex-row gap-2">
          <Link
            href="/navigation/charge"
            className="rounded-full px-4 btn-gold-gradient"
          >
            충전
          </Link>{" "}
          <Link
            href="/navigation/exchange"
            className="rounded-full px-4 btn-gold-gradient"
          >
            환전
          </Link>
        </div>
      </nav>
    </div>
  );
}
