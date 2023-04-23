import { FC } from "react";
import { motion } from "framer-motion";

import { works } from "@/fackData";
import WorkSpaceItem from "../WorkSpaceItem";
import { hide, show } from ".";

interface ListProjectProps {
  isVisible: boolean;
}

const ListProject: FC<ListProjectProps> = ({ isVisible }) => (
  <motion.nav className="mt-[10px]" animate={isVisible ? show : hide}>
    {works.map(({ caption, color, subProject }, index) => (
      <WorkSpaceItem
        color={color}
        subProject={subProject}
        caption={caption}
        key={index}
      />
    ))}
  </motion.nav>
);

export default ListProject;
