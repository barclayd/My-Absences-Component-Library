import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder text',
};
