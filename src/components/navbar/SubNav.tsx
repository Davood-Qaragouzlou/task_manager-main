import icons from "@/data/icons";
import { useState } from "react";
import Filter from "./filter";
import { useContextDate } from "@/contexts/Date";

const SubNav = () => {
  const [column, setColumn] = useState(false);
  const useContext = useContextDate();

  const toggleColumn = (status: boolean) => {
    setColumn(status === undefined ? !column : status);
  };
  return (
    <>
      <section className="py-4 border-b-[#9999] border-b-[1px] ml-[50px] flex relative">
        <div className="text-500 gap-5 color-[#959595] pl-5 flex relative after:absolute after:left-0 after:w-[1px] after:bg-[#9999] after:h-full">
          <button>{icons.search}</button>
          <input
            placeholder="جستجو بین تسک ها"
            className="outline-none py-1 w-40"
          />
        </div>
        <div
          onClick={() => useContext?.time || setColumn(true)}
          className="text-500 gap-5 color-[#959595] flex relative pr-[50px] mr-[12px] items-center"
        >
          {useContext?.time ? (
            useContext.time
          ) : (
            <>
              <button>{icons.filter}</button>
              <span>فیلتر ها</span>
              <span className="bg-[#e9f9ff] p-[4px] rounded-[4px] text-500 font-[12px]">
                دسته بندی شده با : وضعیت
              </span>
            </>
          )}
        </div>
        <Filter status={column} toggle={toggleColumn} />
      </section>
    </>
  );
};
export default SubNav;
