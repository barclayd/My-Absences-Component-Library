import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderProps, Header } from './Header';

export default {
  title: 'Templates/Header',
  component: Header,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  initials: 'EM',
  name: 'Elon Musk',
};
