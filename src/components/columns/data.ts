import icons from "@/data/icons";

type typeOperation =
  | "delete"
  | "copy"
  | "editWorkSpace"
  | "editColor"
  | "createWorkSpace"
  | "share";

interface type {
  icon: JSX.Element;
  caption: string;
  operation: typeOperation;
  className?: string;
}

const dataMoreType: type[] = [
  {
    icon: icons.plus,
    caption: "ساختن پروژه جدید",
    operation: "createWorkSpace",
  },
  {
    icon: icons.editWorkSpace,
    caption: "ویرایش نام ورک اسپیس",
    operation: "editWorkSpace",
  },
  {
    icon: icons.editColor,
    caption: "ویرایش رنگ",
    operation: "editColor",
  },
  {
    icon: icons.copyLink,
    caption: "کپی لینک",
    operation: "copy",
  },
  {
    icon: icons.delete(),
    caption: "حذف",
    operation: "delete",
  },
  {
    icon: icons.share(),
    caption: "اشتراک گذاری",
    operation: "share",
    className: "bg-[#208d8e] rounded-[6px] text-white w-full px-2",
  },
];

const dataSubMore: type[] = [
  {
    icon: icons.plus,
    caption: "ساختن تسک جدید",
    operation: "createWorkSpace",
  },
  {
    icon: icons.editWorkSpace,
    caption: "ویرایش نام پروژه",
    operation: "editWorkSpace",
  },
  {
    icon: icons.copyLink,
    caption: "کپی لینک",
    operation: "copy",
  },
  {
    icon: icons.delete(),
    caption: "حذف",
    operation: "delete",
  },
  {
    icon: icons.share(),
    caption: "اشتراک گذاری",
    operation: "share",
    className: "bg-[#208d8e] rounded-[6px] text-white w-full px-2",
  },
];

export default {
  dataMoreType,
  dataSubMore,
};
