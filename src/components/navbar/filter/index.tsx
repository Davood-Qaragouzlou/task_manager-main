import React, { FC, useState } from "react";
import icons from "@/data/icons";
import { Column } from "@/components";
import { Form } from "./Form";
import { useForm } from "react-hook-form";
import { useContextDate } from "@/contexts/Date";

interface FilterProps {
  status: boolean;
  toggle: (arg?: boolean) => void;
}

interface FormProps {
  where: "history" | "tags" | "parts" | "priority" | "none";
  tags: string[] | "none";
  isHave: boolean | "none";
}

const Filter: FC<FilterProps> = ({ status, toggle }) => {
  const [listFilter, setListFilter] = useState<FormProps[]>([]);

  const deleteFilterById = (id: number) => {
    let copy = [...listFilter];
    copy.splice(id, 1);
    setListFilter(() => [...copy]);
  };

  const updateFilterById = (
    id: number,
    arg: { name: keyof FormProps; value: "none" | (string[] & "none") }
  ) => {
    let copy = [...listFilter];
    copy[id][arg.name] = arg.value;
    setListFilter(() => [...copy]);
  };

  return (
    <Column
      type="children"
      status={status}
      toggle={toggle}
      className="min-w-[718px] pb-4  top-[80%]"
    >
      <div className="flex justify-between items-center mb-[17px]">
        <h2 className="text-[24px] font-[600]">فیلتر ها</h2>
        <button onClick={() => toggle(false)}>{icons.xIcon}</button>
      </div>
      <ul className="space-y-5  relative">
        {listFilter &&
          listFilter.map((filter, index) => (
            <li key={index} className="flex justify-around gap-[70px]">
              <Form {...filter} setFilter={updateFilterById} index={index} />
              <div onClick={() => deleteFilterById(index)}>
                {icons.delete("#000")}
              </div>
            </li>
          ))}
      </ul>
      <button
        className="text-[12px] font-[600] text-[#208d8e] mt-[27px]"
        onClick={() => {
          setListFilter((prev) => [
            ...prev,
            { where: "none", isHave: "none", tags: "none" },
          ]);
        }}
      >
        افزودن فیلتر جدید
      </button>
    </Column>
  );
};

export default Filter;
