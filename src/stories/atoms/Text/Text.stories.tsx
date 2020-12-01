import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Text, TextProps } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text:
    'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal.',
  color: 'black',
};

export const ColouredText = Template.bind({});
ColouredText.args = {
  text:
    'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal.',
  color: 'orange',
};

export const LargeText = Template.bind({});
LargeText.args = {
  text:
    'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal.',
  size: '66px',
  color: 'black',
};
