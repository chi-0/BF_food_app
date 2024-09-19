import { FC, ReactNode } from "react";
import { Navbar } from "./_components/Navbar";
import { Category } from "./_components/Category";
import { SubSection } from "./_components/SubSection";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full bg-[url('/assets/img/homeBg.jpg')] bg-cover bg-no-repeat">
      <div className="w-full h-full bg-[rgba(0,0,0,0.6)] flex justify-center items-center">
        <div className="w-[90%] h-[85%] bg-[rgba(255,255,255,0.8)] rounded-md backdrop-blur">
          <div className="w-full flex h-full p-5 gap-x-5">
            <Navbar />
            <div className="desktop:w-[88%] w-[95%] h-full rounded-md shadow-md flex gap-x-[1px]">
              <div className="desktop:w-[80%] w-[100%] h-full flex flex-col">
                <Category />
                <div className="w-full h-[92%] bg-[rgba(255,255,255,0.7)] rounded-b-md overflow-y-scroll desktop:rounded-br-none">
                  {children}
                </div>
              </div>
              <SubSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
