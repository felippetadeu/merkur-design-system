import { variant } from 'styled-system';
import { theme } from '../../theme';

export const fontSize = variant({
  prop: 'size',
  variants: {
    sm: {
      fontSize: theme.fontSizes[0]
    },
    md: {
      fontSize: theme.fontSizes[4]
    },
    lg: {
      fontSize: theme.fontSizes[6]
    },
    xl: {
      fontSize: theme.fontSizes[8]
    }
  }
})