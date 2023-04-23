import icons from "@/data/icons";
import { FC, useState } from "react";
import { Column } from "..";
import ProjectItem from "./ProjectItem";

interface ProjectItemProps {
  color: string;
  caption: string;
  subProject: any[];
}

const WorkSpaceItem: FC<ProjectItemProps> = ({
  color,
  caption,
  subProject,
}) => {
  const [column, setColumn] = useState(false);

  const toggleColumn = (status: boolean) => {
    setColumn(status === undefined ? !column : status);
  };

  return (
    <ul className="py-1 m-0 relative">
      <li>
        <div className="flex justify-between items-center group hover:bg-[#e9e9e9] py-2 rounded-[4px] transition-all duration-500 px-2">
          <div className="flex items-center gap-[8px]">
            <div
              className="w-[20px] h-[20px] rounded-[4px]"
              style={{ backgroundColor: color }}
            />
            <span className="text-[16px] font-[500]">{caption}</span>
          </div>
          <button
            className="opacity-0 group-hover:opacity-100 transition-all duration-500"
            onClick={() => setColumn(true)}
          >
            {icons.treeDots}
          </button>
        </div>
        <ul className="pr-[28px] mt-[5px]">
          {subProject.map(({ caption }, index) => (
            <ProjectItem caption={caption} key={caption} />
          ))}
        </ul>
      </li>
      <Column
        status={column}
        toggle={toggleColumn}
        type="more"
        className="top-0 left-0 -translate-x-[100%]"
      />
    </ul>
  );
};

export default WorkSpaceItem;
