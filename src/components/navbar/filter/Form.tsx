import { Form as FormSection, Select } from "@/components";
import { FC, SyntheticEvent } from "react";
import { useForm } from "react-hook-form";

interface FormPropsDefault {
  where: "history" | "tags" | "parts" | "priority" | "none";
  tags: string[] | "none";
  isHave: boolean | "none";
}

interface FormProps extends FormPropsDefault {
  index: number;
  setFilter: (
    id: number,
    arg: { name: keyof FormPropsDefault; value: "none" | (string[] & "none") }
  ) => void;
}

export const Form: FC<FormProps> = ({ index, setFilter, ...props }) => {
  const { register } = useForm<FormPropsDefault>({
    values: { ...props },
  });
  const setValue = (
    name: keyof FormPropsDefault,
    value: "none" | (string[] & "none")
  ) => {
    setFilter(index, { name, value });
  };

  const onChange = (event: any) => {
    const element = event.target;

    setValue(element.name, element.value);

    if (element.classList.contains("text-gray-300")) {
      element.classList.remove("text-gray-300");
    }
  };

  return (
    <div>
      <FormSection<FormPropsDefault> defaultValues={props}>
        <div className="flex gap-[10px] items-center text-[14px] font-[400]]">
          <label>تسک هایی که</label>
          <Select
            className="outline-none rounded-[6px] border-gray-[#e9ebf0] border-[1px] h-[27px] w-[182px] text-gray-300"
            options={["تاریخ", "تگ", "اعضا", "اولویت"]}
            register={register}
            name="where"
            required={true}
            optionsHook={{
              onChange,
              value: props.where,
            }}
            defaultValue={props.where}
          />
          <label>آن ها</label>
          <Select
            options={["درس", "کار", "پروژه"]}
            className="outline-none rounded-[6px] border-gray-[#e9ebf0] border-[1px] min-w-[100px] h-[27px] w-[146px] text-gray-300"
            register={register}
            name="tags"
            optionsHook={{
              onChange,
            }}
          />
          <Select
            options={["است", "نیست"]}
            className="outline-none rounded-[6px] border-gray-[#e9ebf0] border-[1px] min-w-[100px] h-[27px] w-[107px] text-gray-300"
            register={register}
            name="isHave"
            optionsHook={{
              onChange,
            }}
          />
        </div>
      </FormSection>
    </div>
  );
};
