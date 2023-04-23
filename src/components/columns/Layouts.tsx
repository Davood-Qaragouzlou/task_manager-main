import { FC, MouseEvent, PropsWithChildren, useEffect, useRef } from "react";

interface LayoutsProps extends PropsWithChildren {
  type: "div" | "ul";
  status: boolean;
  toggle: (status: boolean) => void;
  className?: string;
}

const defaultClass = `shadow-[0px_4px_16px_rgba(0,_0,_0,_0.16)] absolute z-10 bg-white p-3 rounded-lg text-[#1e1e1e] mt-[12px] transition-all duration-500`;

const Layouts: FC<LayoutsProps> = ({
  type,
  children,
  className,
  status,
  toggle,
}) => {
  const menuRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      toggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {type === "div" && (
        <div
          className={`${defaultClass} ${className}`}
          style={{
            opacity: status ? 1 : 0,
            visibility: status ? "visible" : "hidden",
          }}
          ref={menuRef}
        >
          {children}
        </div>
      )}
      {type === "ul" && (
        <ul
          className={`${defaultClass} ${className}`}
          style={{
            opacity: status ? 1 : 0,
            visibility: status ? "visible" : "hidden",
          }}
          ref={menuRef}
        >
          {children}
        </ul>
      )}
    </>
  );
};

export default Layouts;
