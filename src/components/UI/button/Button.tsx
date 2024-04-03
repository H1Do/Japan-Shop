import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  isLink?: boolean;
  pathTo?: string;
  buttonType?: 'submit' | 'reset' | 'button' | undefined;
  className: string;
  isTransparent?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  isLink = false,
  pathTo = './',
  buttonType = 'button',
  className,
  isTransparent = false,
  onClick = undefined,
  ...args
}: Props) => {
  if (isLink) {
    return (
      <Link
        to={pathTo}
        className={`button ${className} ${isTransparent ? 'button--transparent' : ''}`}
        {...args}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={buttonType}
      className={`button ${className} ${isTransparent ? 'button--transparent' : ''}`}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
