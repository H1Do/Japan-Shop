import { ChangeEvent } from 'react';

interface Props {
  name?: string;
  type?: string;
  required?: boolean;
  value?: string | number;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type = 'text',
  required,
  value,
  className,
  ...args
}: Props) => {
  return (
    <input
      name={name}
      type={type}
      required={required}
      value={value}
      className={`input ${className}`}
      {...args}
    />
  );
};

export default Input;
