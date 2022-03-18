import React, { FC, useState } from "react";

interface IProps {
  options: [string, string];
  onChange: (value: string) => void;
}

const Index: FC<IProps> = ({ options,onChange }) => {
  const [value, setValue] = useState(options[0]);

    const handleChange = (value:string) => {
        setValue(value);
        onChange(value)
    }

  const selectedClass = `rounded-full btn btn-primary hover:bg-primary`;
  const unselectedClass = `px-4 `;
  const commonClass = `text-brand-lg normal-case`
  return (
    <div className="flex gap-2 p-1 border-2 rounded-full border-darkcharcoal">
      {options.map((option, index) => (
        <button
          className={`${value === option ? selectedClass : unselectedClass} ${commonClass}`}
          key={index}
          onClick={() => handleChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Index;
