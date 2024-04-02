import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isLink?: boolean;
  pathTo?: string;
  buttonType?: 'submit' | 'reset' | 'button' | undefined;
  className: string;
}

const Button = ({
  children,
  isLink = false,
  pathTo = './',
  buttonType = 'button',
  className,
  ...args
}: Props) => {
  if (isLink) {
    return (
      <a href={pathTo} className={'button ' + className} {...args}>
        {children}
      </a>
    );
  }
  return (
    <button type={buttonType} {...args}>
      {children}
    </button>
  );
};

export default Button;
