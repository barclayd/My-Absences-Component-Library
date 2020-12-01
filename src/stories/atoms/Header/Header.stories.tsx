import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { HeadingStyle, Header, HeaderProps } from './Header';

export default {
  title: 'Atoms/Header',
  component: Header,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Title = Template.bind({});
Title.args = {
  text: 'Some text',
  style: HeadingStyle.title,
};

export const Heading = Template.bind({});
Heading.args = {
  text: 'Some text',
  style: HeadingStyle.heading,
};

export const Subheading = Template.bind({});
Subheading.args = {
  text: 'Some text',
  style: HeadingStyle.subheading,
};
