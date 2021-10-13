import { ColorProps, SpaceProps } from "styled-system";

export type StyleProps = ColorProps & SpaceProps & {
  variant?: string;
  size?: 'sm'|'md'|'lg'|'xl';
  bg?: string;
  fontSize?: string;
  theme?: any;
  textColor?: string;
}