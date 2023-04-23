import icons from "@/data/icons";
import { FC, useState } from "react";
import Column from "../columns";

interface ProjectItemProps {
  caption: string;
  active?: boolean;
}

const ProjectItem: FC<ProjectItemProps> = ({ caption, active }) => {
  const [column, setColumn] = useState(false);

  const toggleColumn = (status: boolean) => {
    setColumn(status === undefined ? !column : status);
  };

  return (
    <li
      className={`py-[10px] px-2 rounded-[4px] flex justify-between items-center group relative ${
        active ? "" : "hover:bg-[#e9e9e9] transition-all duration-500"
      }`}
      style={{ backgroundColor: active ? "#e9f9ff" : "" }}
    >
      <span className="text-[16px] font-[500]">{caption}</span>
      <button
        className="opacity-0 group-hover:opacity-100 transition-all duration-500"
        onClick={() => setColumn(true)}
      >
        {icons.treeDots}
      </button>
      <Column
        status={column}
        toggle={toggleColumn}
        type="subMore"
        className="top-0 left-0 -translate-x-[100%]"
      />
    </li>
  );
};

export default ProjectItem;
