import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement> {
  color?: 'white' | 'blur';
  children: ReactNode;
}
