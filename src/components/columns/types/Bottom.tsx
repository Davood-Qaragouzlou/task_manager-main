import { FC, ReactNode } from "react";

interface PropsBottom {
  icon?: ReactNode;
  caption: string;
  className?: string;
}

const Bottom: FC<PropsBottom> = ({ icon, caption, className }) => {
  return (
    <button
      className={`flex items-center py-2 gap-1 ${className && className}`}
    >
      <div>{icon}</div>
      <span>{caption}</span>
    </button>
  );
};

export default Bottom;
