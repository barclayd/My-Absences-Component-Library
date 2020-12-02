import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { NavBar, NavBarProps } from './NavBar';
import { RegisteredIcon } from '../../atoms/Icon/Icon';
import styled from 'styled-components';

export default {
  title: 'Templates/Nav Bar',
  component: NavBar,
} as Meta;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background: #eeeeee;
`;

const Template: Story<NavBarProps> = (args) => (
  <Background>
    <NavBar {...args} />
  </Background>
);

export const Primary = Template.bind({});
Primary.args = {
  icons: [RegisteredIcon.home, RegisteredIcon.user, RegisteredIcon.logout],
  activeIcon: RegisteredIcon.home,
  minHeight: '90vh',
};
