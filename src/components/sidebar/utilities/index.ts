import dynamic from "next/dynamic";

export { default as Header } from "./Header";
export { default as Search } from "./Search";
export { default as User } from "./User";

export const show = {
  opacity: 1,
  display: "block",
};

export const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export const DynamicListProject = dynamic(() => import("./ListProject"), {
  ssr: false,
});
