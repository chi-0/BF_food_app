"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { MdPersonSearch, MdOutlinePersonSearch } from "react-icons/md";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { FaUser, FaRegUser } from "react-icons/fa6";

export const Navbar = () => {
  const path = usePathname();
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };

  const logoutHandler = () => {
    router.push("/login");
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <nav className="flex flex-col text-xl gap-y-3">
        <img
          src="/assets/icons/baboLogo_192.png"
          className="w-[45px] rounded-md shadow-md cursor-pointer hover:bg-hover mb-[1rem]"
          onClick={clickHandler}
        />
        <Link
          href={"/"}
          className={clsx(
            "hover:bg-hover p-2 rounded-md flex items-center gap-x-2",
            path === "/" && "font-semibold bg-hover shadow-md"
          )}
        >
          {path === "/" ? <AiFillHome /> : <AiOutlineHome />}홈
        </Link>
        <Link
          href={"/explore"}
          className={clsx(
            "hover:bg-hover p-2 rounded-md flex items-center gap-x-2",
            path === "/explore" && "font-semibold bg-hover shadow-md"
          )}
        >
          {path === "/explore" ? <RiSearchFill /> : <RiSearchLine />}
          검색
        </Link>
        <Link
          href={"/followers"}
          className={clsx(
            "hover:bg-hover p-2 rounded-md flex items-center gap-x-2",
            path === "/followers" && "font-semibold bg-hover shadow-md"
          )}
        >
          {path === "/followers" ? (
            <MdPersonSearch />
          ) : (
            <MdOutlinePersonSearch />
          )}
          팔로워
        </Link>
        <Link
          href={"/profile"}
          className={clsx(
            "hover:bg-hover p-2 rounded-md flex items-center gap-x-2",
            path === "/profile" && "font-semibold bg-hover shadow-md"
          )}
        >
          {path === "/profile" ? <FaUser /> : <FaRegUser />}
          프로필
        </Link>
        <Link
          href={"/post"}
          className="text-center rounded-[100px] shadow-md p-2 bg-point text-base mt-[1rem] hover:bg-hover"
        >
          게시물 등록
        </Link>
      </nav>
      <div
        onClick={logoutHandler}
        className="flex items-center cursor-pointer hover:bg-hover p-2 rounded-[100px]"
      >
        <img
          src="/assets/dummy/user1.jpg"
          className="rounded-[50%] w-[40px] h-[40px] mr-3"
        />
        <div className="flex flex-col">
          <span className="text-sm">Christiano Ronaldo</span>
          <span className="text-s font-light">@CR7</span>
        </div>
      </div>
    </div>
  );
};
