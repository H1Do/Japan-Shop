interface Props {
  className: string;
}

const Input = ({ className, ...args }: Props) => {
  return <input className={`input ${className}`} {...args} />;
};

export default Input;
