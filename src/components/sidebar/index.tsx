import { FC, useState } from "react";

import { Header, DynamicListProject, Search, User } from "./utilities";

const SideBar: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <section className="w-max flex flex-col bg-[#fafbfc] pr-[50px] pt-[40px] pl-6 border-l-2 border-[#aaa] h-screen">
      <Header />
      <Search toggle={toggle} status={isVisible} />
      <DynamicListProject isVisible={isVisible} />
      <User />
    </section>
  );
};

export default SideBar;
