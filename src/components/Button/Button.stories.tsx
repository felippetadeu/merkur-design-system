// Button.stories.ts | Button.stories.tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';
import { getThemeColors, getThemeFontSizes, getThemeIcons } from '../../theme/index.storybook';

const colors = getThemeColors();
const fontSizes = getThemeFontSizes();
const icons = getThemeIcons();

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    variant: {
      options: ['default', 'outline'],
      control: {
        type: 'select'
      }
    },
    leftIcon: icons,
    bg: colors,
    fontSize: fontSizes,
    isLoading: {
      control: { type: 'boolean'}
    }
  }
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => {
  return (<Button {...args} />)
};

export const Default = Template.bind({});

Default.args = {
  bg: 'reds.4',
  fontSize: "0",
  variant: 'default',
  children: 'Button',
  isLoading: false
};