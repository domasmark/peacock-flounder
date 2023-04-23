import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  defaultValue,
  onChange
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || options[0]?.value || ""
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;