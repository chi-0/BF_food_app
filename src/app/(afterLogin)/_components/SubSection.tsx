import { RecommendUser } from "./RecommendUser";
import { SubSearch } from "./SubSearch";

export const SubSection = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] flex-grow rounded-r-md p-3">
      <SubSearch />
      <div className="my-5 border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-md p-2 flex flex-col gap-y-2 shadow-md">
        <h3>팔로우 추천</h3>
        <RecommendUser />
        <RecommendUser />
        <RecommendUser />
      </div>
      <div></div>
    </div>
  );
};
