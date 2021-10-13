// Button.stories.ts | Button.stories.tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';
import * as Fa from 'react-icons/fa';
import { theme } from '../../theme';
import { getThemeColors } from '../../theme/index.storybook';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    color: {
      control: { type: 'color' }
    },
    variant: {
      options: ['default', 'outline'],
      control: {
        type: 'select'
      }
    },
    leftIcon: {
      options: Object.keys(Fa),
      mapping: Fa,
      control: {
        type: 'select'
      }
    },
    bg: {
      options: getThemeColors(),
      mapping: getThemeColors(),
      control: {
        type: 'select'
      }
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
  children: 'Button'
};