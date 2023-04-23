import { FC, MouseEvent, PropsWithChildren, useEffect, useRef } from "react";
import More from "./types/More";
import Layouts from "./Layouts";
import SubWorkSpace from "./types/SubWorkSpace";

interface ColumnProps extends PropsWithChildren {
  type: "more" | "children" | "subMore";
  toggle: (status: boolean) => void;
  status: boolean;
  handelClick?: (type: string, id: string) => void;
  elementType?: "div" | "ul";
  className?: string;
}

const Column: FC<ColumnProps> = ({
  type,
  children,
  toggle,
  status,
  elementType,
  className,
  handelClick,
}) => {
  return (
    <Layouts
      type={elementType ?? "ul"}
      status={status}
      className={className}
      toggle={toggle}
    >
      {type === "more" && (
        <More handelClick={handelClick ? handelClick : () => {}} />
      )}
      {type === "subMore" && (
        <SubWorkSpace handelClick={handelClick ? handelClick : () => {}} />
      )}
      {type === "children" && children}
    </Layouts>
  );
};

export default Column;
