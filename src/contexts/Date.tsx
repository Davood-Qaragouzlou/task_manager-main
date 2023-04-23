import {
  useContext,
  createContext,
  useState,
  FC,
  PropsWithChildren,
} from "react";

type Date = {
  time: string;
  setTime: (value: string) => void;
};

const DateContext = createContext<Date | null>(null);
export const useContextDate = () => useContext(DateContext);

const DateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [time, setTime] = useState<string>("");

  return (
    <DateContext.Provider value={{ time, setTime }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
