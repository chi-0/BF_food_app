"use client";

export const SubFound = () => {
  const moreHandler = (data: string) => {
    console.log(data + " 페이지 이동!@#!@#");
  };

  const dummyData = ["마라롱샤", "대하구이", "라면", "떡볶이", "우동"];

  return (
    <div className="my-5 border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-md p-2 flex flex-col gap-y-2 shadow-md">
      <h3 className="font-medium mb-1">많이 찾는 음식</h3>
      {dummyData.map((menu, index) => (
        <div key={menu} className="flex items-center justify-between">
          <h4
            className="text-sm font-semilight cursor-pointer"
            onClick={() => moreHandler(menu)}
          >
            {index + 1 + ". " + menu}
          </h4>
          <button
            className="text-s text-point font-light"
            onClick={() => moreHandler(menu)}
          >
            더보기
          </button>
        </div>
      ))}
    </div>
  );
};
