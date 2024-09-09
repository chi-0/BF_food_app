import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full bg-[url('/assets/img/testImg.jpg')] bg-cover bg-no-repeat">
      <div></div>
      <div>
        <div></div>
        <div>{children}</div>;
      </div>
    </div>
  );
};

export default Layout;
