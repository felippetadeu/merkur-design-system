import { FontSizeProps, SizeProps, SpaceProps, ColorProps } from 'styled-system';

export interface ButtonProps extends SizeProps, FontSizeProps, SpaceProps, ColorProps{
  variant?: 'default'|'outline',
  bg: string,
  color?: string,
  children?: React.ReactNode,
  leftIcon?: any
}