import { SubFollow } from "./SubFollow";
import { SubFound } from "./SubFound";
import { SubSearch } from "./SubSearch";

export const SubSection = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] flex-grow rounded-r-md p-3 hidden desktop:block">
      <SubSearch />
      <SubFollow />
      <SubFound />
    </div>
  );
};
