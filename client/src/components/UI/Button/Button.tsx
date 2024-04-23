import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  isLink?: boolean;
  pathTo?: string;
  buttonType?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
  isTransparent?: boolean;
  isSvg?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  isLink = false,
  pathTo = './',
  buttonType = 'button',
  className,
  isTransparent = false,
  isSvg = false,
  onClick = undefined,
  ...args
}: Props) => {
  if (isLink) {
    return (
      <Link
        to={pathTo}
        className={`button ${className} ${isTransparent ? 'button--transparent' : ''} ${isSvg ? 'button--svg' : ''}`}
        {...args}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={buttonType}
      className={`button ${className} ${isTransparent ? 'button--transparent' : ''} ${isSvg ? 'button--svg' : ''}`}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
