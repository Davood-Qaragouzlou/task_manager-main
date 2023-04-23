import icons from "@/data/icons";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";

/* TYPE PROPS */
interface NavbarProps {
  title: string;
}

/* DATA ARRAY FOR LIST NAVIGATOR */
const listItem = [
  { name: "نمایش ستون", slug: "/", icon: icons.showColumn },
  { name: "نمایش لیستی", slug: "/show-list", icon: icons.showList },
  { name: "تقویم", slug: "/calender", icon: icons.calender },
];

const Navbar: FC<NavbarProps> = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);
  const ulElementRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    /* SET LINE ACTIVE IN NAVBAR */
    const reSize = () => {
      if (ulElementRef.current) {
        [...ulElementRef.current.children].forEach((child) => {
          const element = child.firstElementChild
            ?.lastElementChild as HTMLSpanElement;

          if (element && element.classList.contains("text-[#208d8e]")) {
            const element = child.getBoundingClientRect();
            const toggleClassList = () => {
              ["transition-all", "duration-500"].forEach((value) => {
                scrollLineRef.current?.classList.toggle(value);
              });
            };

            toggleClassList();

            scrollLine({
              top: element.top + window.scrollY,
              left: element.left + window.scrollX,
              width: element.width,
            });

            const timeOut = setTimeout(() => {
              toggleClassList();
              clearTimeout(timeOut);
            }, 0);
          }
        });
      }
    };

    /* ADD EVENT RESIZE IN WINDOW */
    window.addEventListener("resize", reSize);

    /* REMOVE EVENT RESIZE IN WINDOW */
    return () => window.removeEventListener("resize", reSize);
  }, []);

  /* HANDEL CLICK FOR ITEM LIST */
  const handleItemClick = (
    index: number,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    setActiveIndex(index);
    const element = event.currentTarget.getBoundingClientRect();
    scrollLine({
      top: element.top + window.scrollY,
      left: element.left + window.scrollX,
      width: element.width,
    });
  };

  /* SET POSITION TO SCROLL LINE */
  const scrollLine = (arg: { left: number; top: number; width: number }) => {
    if (scrollLineRef.current) {
      scrollLineRef.current.style.left = arg.left + "px";
      scrollLineRef.current.style.top = arg.top + 46 + "px";
      scrollLineRef.current.style.width = arg.width + 1 + "px";
    }
  };

  return (
    <>
      <section className="flex justify-between pt-[40px] border-b-[#9999] border-b-[1px] ml-[50px]">
        <div className="flex pb-4">
          <h2 className="text-[20px] font-[600] px-[10px] relative after:absolute after:left-0 after:w-[1px] after:bg-[#9999] after:h-full">
            {title}
          </h2>
          <nav>
            <ul className="flex cursor-pointer" ref={ulElementRef}>
              {listItem.map((item, index) => {
                return (
                  <li
                    key={item.slug}
                    className="text-[16px] h-8 font-[500] relative after:absolute after:top-0 after:left-0 after:w-[1px] after:bg-[#9999] after:h-full"
                    onClick={(event: React.MouseEvent<HTMLLIElement>) => {
                      handleItemClick(index, event);
                    }}
                  >
                    <Link
                      href={`${item.slug}`}
                      shallow={true}
                      className="px-[16px] flex gap-2 items-center justify-center h-full"
                    >
                      {activeIndex === index ? (
                        <>
                          <div>{item.icon("#208d8e")}</div>
                          <span className="text-[#208d8e]">{item.name}</span>
                        </>
                      ) : (
                        <>
                          <div>{item.icon()}</div>
                          <span>{item.name}</span>
                        </>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div
              className="bg-[#208d8e] h-1 absolute transition-all duration-500"
              ref={scrollLineRef}
            />
          </nav>
        </div>
        <button className="flex gap-[11px]">
          <div>{icons.share("black")}</div>
          <span>اشتراک گذاری</span>
        </button>
      </section>
    </>
  );
};

export default Navbar;
