import { RecommendUser } from "./RecommendUser";

export const SubFollow = () => {
  return (
    <div className="my-5 border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-md p-2 flex flex-col gap-y-2 shadow-md">
      <h3 className="font-medium mb-1">팔로우 추천</h3>
      <RecommendUser />
      <RecommendUser />
      <RecommendUser />
    </div>
  );
};
