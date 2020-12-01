import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { HeadingStyle, Heading, HeadingProps } from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Title = Template.bind({});
Title.args = {
  text: 'Some text',
  style: HeadingStyle.title,
};

export const NormalHeading = Template.bind({});
NormalHeading.args = {
  text: 'Some text',
  style: HeadingStyle.heading,
};

export const Subheading = Template.bind({});
Subheading.args = {
  text: 'Some text',
  style: HeadingStyle.subheading,
};
