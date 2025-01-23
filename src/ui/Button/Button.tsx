import { FC } from 'react';
import { clsx } from 'clsx';

import { ButtonCommonProps } from './Button.types';

const Button: FC<ButtonCommonProps> = ({ children, onClick, className, ...props }) => (
  <button
    type="button"
    {...props}
    className={clsx(
      'mt-9 px-[30px] py-[15px]',
      'bg-bloody-red hover:bg-rose-950',
      'text-white uppercase font-bold',
      'leading-secondary text-[10px] tracking-primary',
      className,
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
