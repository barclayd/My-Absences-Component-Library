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
  locations: [
    'Amsterdam',
    'Amsterdam',
    'Amsterdam',
    'Dongguan',
    'Dongguan',
    'Dongguan',
    'Hudson',
    'Hudson',
    'Hudson',
    'Lincoln',
    'Lincoln',
    'Lincoln',
    'Milwaukee',
    'Milwaukee',
    'Milwaukee',
  ],
};
