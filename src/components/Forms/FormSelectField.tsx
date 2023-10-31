"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};
type SelectFieldProps = {
  name: string;
  options?: SelectOptions[];
  placeholder?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  name,
  options,
  size,
  value,
  placeholder,
  label,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            size={size}
            onChange={onChange}
            options={options}
            value={value}
            placeholder={placeholder}
            defaultValue={defaultValue}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
