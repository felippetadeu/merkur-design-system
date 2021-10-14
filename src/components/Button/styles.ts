import styled, {  } from 'styled-components';
import { color, space, variant, fontSize, size } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { theme } from '../../theme';
import { invertColor, getNextColor } from '../../theme/utils';
import { ButtonProps } from './Button.props';

const buttonVariant = (props: ButtonProps) => {
  return variant({
    prop: 'variant',
    variants: {
      default: {
        backgroundColor: themeGet(`colors.${props.bg}`, themeGet('colors.purples.4'))(props),
        color: props.color ? props.color : invertColor(themeGet(`colors.${props.bg}`)(props)),
        '&:hover': {
          backgroundColor: props.bg ? themeGet('colors.'+getNextColor(props.bg), `colors.${props.bg}`)(props) : themeGet('colors.gray.4'),
          color: props.color ? props.color : invertColor(themeGet('colors.'+getNextColor(props.bg), themeGet(`colors.${props.color}`)(props))(props)),
        }
      },
      outline: {
        border: `1px solid ${themeGet(`colors.${props.bg}`)(props)}`,
        background: 'transparent',
        color: props.color ? props.color : themeGet(`colors.${props.bg}`)(props),
        '&:hover': {
          backgroundColor: themeGet(`colors.${props.bg}`)(props),
          color: props.color ? props.color : invertColor(themeGet(`colors.${props.bg}`)(props)),
        }
      }
    }
  })
}

export const Container = styled.button<ButtonProps>`
  ${color}
  ${space}
  ${fontSize}
  ${size}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  text-transform: capitalize;
  font-size: ${props => themeGet(`fonts.${String(props.fontSize)}`)(props)};
  border: none;
  cursor: pointer;
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  user-select: none;

  ${props => props.variant && buttonVariant(props) }

  svg {
    margin: 0px 8px 0px 0px;
    &.spin {
      animation: spin infinite 5s linear; 
    }
  }

  :disabled {
    pointer-events: none;
  }
  
  @keyframes spin { 
    from { 
      transform: rotate(0deg); 
    } 
    to { 
      transform: rotate(360deg); 
    }
  }
`

Container.defaultProps = {
  variant: 'default',
  fontSize: theme.fontSizes[2].toString(),
}