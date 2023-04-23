import { FC, PropsWithChildren } from "react";
import { SideBar, Navbar, SubNav } from "@/components";

interface PropsByChildren extends PropsWithChildren {}

const Layouts: FC<PropsByChildren> = ({ children }) => {
  return (
    <main className="flex">
      <div>
        <SideBar />
      </div>
      <div className="flex-1 pr-[16px]">
        <Navbar title={"پروژه اول"} />
        <SubNav />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layouts;
