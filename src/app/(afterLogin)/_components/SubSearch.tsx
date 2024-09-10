import { RiSearchLine } from "react-icons/ri";

export const SubSearch = () => {
  return (
    <form className="w-full">
      <div className="flex items-center w-full bg-[rgba(0,0,0,0.2)] p-2 rounded-md gap-x-1">
        <RiSearchLine className="text-xl text-[rgba(255,255,255,0.8)]" />
        <input
          placeholder="검색어를 입력하세요"
          type="text"
          className="focus:outline-none flex-grow bg-[transparent] text-sm"
        />
      </div>
    </form>
  );
};
