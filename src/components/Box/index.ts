import styled from 'styled-components'
import { space, color, layout, ColorProps, SpaceProps, LayoutProps } from 'styled-system'

type BoxProps = ColorProps & SpaceProps & LayoutProps;

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout
)

export default Box