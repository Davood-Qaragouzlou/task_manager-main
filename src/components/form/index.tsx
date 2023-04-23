import React, { FC, PropsWithChildren, Fragment } from "react";
import {
  FieldValues,
  RegisterOptions,
  useForm,
  UseFormReturn,
} from "react-hook-form";

type FormProps<TDefault> = {
  defaultValues: TDefault;
  onSubmit?: (data: TDefault) => void;
  className?: string;
};

export const Form = <TDefault extends FieldValues>({
  defaultValues,
  children,
  onSubmit,
  className,
}: PropsWithChildren<FormProps<TDefault>>): JSX.Element => {
  const { handleSubmit, register } = useForm<TDefault>({
    defaultValues,
  });

  return (
    <form
      onSubmit={onSubmit && handleSubmit(onSubmit)}
      className={className && className}
    >
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

type InputProps = {
  register: UseFormReturn["register"];
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  register,
  name,
  ...rest
}): JSX.Element => {
  return <input {...register(name)} {...rest} />;
};

type SelectProps = {
  register: UseFormReturn["register"];
  options: string[];
  name: string;
  optionsHook?: RegisterOptions;
};
export const Select: FC<SelectProps> = ({
  register,
  options,
  name,
  optionsHook,
  ...rest
}): JSX.Element => {
  const optionsInput = optionsHook ?? {};
  return (
    <>
      {
        <select
          {...register(name, { ...optionsInput })}
          {...rest}
          defaultValue={"none"}
        >
          <option value="none" disabled>
            انتخاب کنید
          </option>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      }
    </>
  );
};
