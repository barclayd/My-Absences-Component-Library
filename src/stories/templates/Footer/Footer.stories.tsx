import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from './Footer';

export default {
  title: 'Templates/Footer',
  component: Footer,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  initials: 'EM',
  name: 'Elon Musk',
};
