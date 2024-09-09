import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center p-2">
      {children}
    </div>
  );
};

export default Layout;
