import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { LinkProps, Link } from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Sign out',
  color: 'black',
  size: '20px',
};
