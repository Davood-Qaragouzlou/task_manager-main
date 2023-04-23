import { FC } from "react";

import icons from "@/data/icons";

const User: FC = () => (
  <div className="mt-auto mb-[33px]">
    <div className="flex gap-2 items-center">
      <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-indigo-200">
        MN
      </div>
      <span>نیلوفر موجودی</span>
    </div>
    <button className="flex items-center gap-2 mt-[8px]">
      <div>{icons.exit}</div>
      <span className="text-[#323232]">خروج</span>
    </button>
  </div>
);

export default User;
