"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { MdPersonSearch, MdOutlinePersonSearch } from "react-icons/md";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { FaUser, FaRegUser } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";

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
    <div className="desktop:w-[12%] w-[5%] min-w-[53px] h-full flex flex-col justify-between">
      <nav className="flex flex-col text-xl gap-y-3">
        <img
          src="/assets/icons/baboLogo_192.png"
          className="w-[45px] rounded-md shadow-md cursor-pointer hover:bg-hover mb-[1rem]"
          onClick={clickHandler}
        />
        <Link
          href={"/"}
          className={clsx(
            "hover:bg-hover p-2 rounded-md flex items-center gap-x-2 justify-center desktop:justify-start",
            path === "/" && "font-semibold bg-hover shadow-md"
          )}
        >
          {path === "/" ? <AiFillHome /> : <AiOutlineHome />}
          <p className="desktop:inline-block hidden">홈</p>
        </Link>
        <Link
          href={"/explore"}
          className={clsx(
            "hover:bg-hover p-2 rounded-md flex items-center gap-x-2 justify-center desktop:justify-start",
            path === "/explore" && "font-semibold bg-hover shadow-md"
          )}
        >
          {path === "/explore" ? <RiSearchFill /> : <RiSearchLine />}
          <p className="desktop:inline-block hidden">검색</p>
        </Link>
        <Link
          href={"/followers"}
          className={clsx(
            "hover:bg-hover p-2 rounded-md flex items-center gap-x-2 justify-center desktop:justify-start",
            path === "/followers" && "font-semibold bg-hover shadow-md"
          )}
        >
          {path === "/followers" ? (
            <MdPersonSearch />
          ) : (
            <MdOutlinePersonSearch />
          )}
          <p className="desktop:inline-block hidden">팔로워</p>
        </Link>
        <Link
          href={"/profile"}
          className={clsx(
            "hover:bg-hover p-2 rounded-md flex items-center gap-x-2 justify-center desktop:justify-start",
            path === "/profile" && "font-semibold bg-hover shadow-md"
          )}
        >
          {path === "/profile" ? <FaUser /> : <FaRegUser />}
          <p className="desktop:inline-block hidden">프로필</p>
        </Link>
        <Link
          href={"/post"}
          className="text-center rounded-[100px] shadow-md p-2 bg-point text-base mt-[1rem] hover:bg-hover desktop:block flex items-center justify-center"
        >
          <p className="desktop:block hidden">게시물 등록</p>
          <IoCloudUploadOutline className="desktop:hidden text-xl" />
        </Link>
      </nav>
      <div
        onClick={logoutHandler}
        className="flex items-center cursor-pointer hover:bg-hover p-2 rounded-[100px] justify-center desktop:jusfify-start"
      >
        <img
          src="/assets/dummy/user1.jpg"
          className="rounded-[50%] w-[40px] h-[40px] desktop:mr-3"
        />
        <div className="hidden flex-col gap-y-2 desktop:flex">
          <span className="text-sm leading-none">Christiano Ronaldo</span>
          <span className="text-s font-light leading-none">@CR7</span>
        </div>
      </div>
    </div>
  );
};
