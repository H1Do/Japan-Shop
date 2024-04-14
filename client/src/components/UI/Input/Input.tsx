interface Props {
  className: string;
}

const Input = ({ className, ...args }: Props) => {
  return <input type="tel" className={`input ${className}`} {...args} />;
};

export default Input;
