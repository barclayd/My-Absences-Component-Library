import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Icon, IconProps, RegisteredIcon } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconName: RegisteredIcon.arrow,
  iconSize: '22px',
};
export const LargeSize = Template.bind({});
LargeSize.args = {
  iconSize: '60px',
};
