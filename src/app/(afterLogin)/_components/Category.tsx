"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const tabs = ["All", "Popular", "Restaurant", "Cafe", "Bar & Pub"];

export const Category = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="w-full h-[8%] bg-[rgba(255,255,255,0.7)] rounded-t-md desktop:rounded-tr-none grid grid-cols-5 mb-[1px]">
      {tabs.map((tab, index) => (
        <div
          className={clsx(
            "h-full hover:bg-hover pb-1",
            index === 0 && "rounded-tl-md"
          )}
          key={tab}
        >
          <Link
            className="flex flex-col h-full justify-end items-center font-medium"
            href="/"
            role="tab"
            aria-selected={selectedTab === tab}
            onClick={() => handleClick(tab)}
          >
            <div className="relative pb-1">
              <span>{tab}</span>
              {selectedTab === tab && (
                <div className="w-full h-[3px] bg-point rounded-[10px] absolute bottom-0 left-0" />
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
