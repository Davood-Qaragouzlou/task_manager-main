import { FC, useState } from "react";

import { motion } from "framer-motion";
import icons from "@/data/icons";

interface SearchProps {
  toggle: () => void;
  status: boolean;
}

const show = {
  opacity: 1,
  display: "block",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

const Search: FC<SearchProps> = ({ toggle, status }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="mt-[31px]">
        <div className="flex justify-between">
          <span className="text-[16px] font-[600]">ورک اسپیس ها</span>
          <div>
            {/* search icon */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVisible(!isVisible)}
              className="mr-28"
            >
              {icons.search}
            </motion.button>
            {/* ArrowDown icon */}
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => toggle()}>
              <div
                className={`${
                  !status && "after:rotate-45 before:-rotate-45 duration-500"
                } text-[#323232] relative before:absolute after:absolute before:w-3 before:h-[2px] before:bg-[#323232] after:w-3 after:h-[2px] after:bg-[#323232] before:-right-[3.3px] after:left-0 before:transition-all after:transition-all before:top-0 after:top-0 h-3 w-4 mr-[17px]`}
              />
            </motion.button>
          </div>
        </div>

        <motion.div initial={hide} animate={isVisible ? show : hide}>
          <div className="flex justify-start rounded-[4px] mt-[13px] bg-[#f6f7f9] items-center p-1 gap-[10px] ">
            <span className="">{icons.search}</span>
            <input
              type="search"
              placeholder="جستجو کنید"
              className="w-full border-none bg-transparent  outline-none py-2 text-[12px]"
            />
          </div>
        </motion.div>
      </div>
      <button className="flex justify-center gap-2 items-center bg-[#b3b3b3b3] text-[12px] text-[#1e1e1e] w-full rounded-[6px] py-1 mt-[13px]">
        <span>{icons.plusSquare()}</span>
        <span>ساختن اسپیس جدید</span>
      </button>
    </>
  );
};

export default Search;
