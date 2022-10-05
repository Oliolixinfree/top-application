import InputProps from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(
  (
    { fontsize = 'fs16', className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <input
          className={cn(styles.input, {
            [styles.error]: error,
            [styles.fs16]: fontsize === 'fs16',
            [styles.fs14]: fontsize === 'fs14',
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
