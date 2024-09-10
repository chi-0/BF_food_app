export const RecommendUser = () => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-hover p-2 rounded-[100px]">
      <img
        src="/assets/dummy/user1.jpg"
        className="rounded-[50%] w-[40px] h-[40px] mr-3"
      />
      <div className="flex flex-col">
        <span className="text-sm">Christiano Ronaldo</span>
        <span className="text-s font-light">@CR7</span>
      </div>
    </div>
  );
};
