import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AbsencePageProps, AbsencePage } from './AbsencePage';
import { RegisteredIcon } from '../../atoms/Icon/Icon';
import { definedAbsences } from '../../templates/AbsenceList/AbsenceList.stories';

export default {
  title: 'Pages/Absence',
  component: AbsencePage,
} as Meta;

const Template: Story<AbsencePageProps> = (args) => <AbsencePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Elon Musk',
  navbarIcons: [
    RegisteredIcon.home,
    RegisteredIcon.user,
    RegisteredIcon.logout,
  ],
  activeIcon: RegisteredIcon.home,
  statusOptions: ['All', 'Pending', 'Approved', 'Taken'],
  leaveTypes: ['Paid leave', 'Sickness', 'Annual leave'],
  absences: definedAbsences,
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
  footerIcons: [
    RegisteredIcon.pinterest,
    RegisteredIcon.facebook,
    RegisteredIcon.twitter,
    RegisteredIcon.youtube,
    RegisteredIcon.github,
    RegisteredIcon.vimeo,
    RegisteredIcon.instagram,
    RegisteredIcon.medium,
    RegisteredIcon.linkedin,
    RegisteredIcon.reddit,
  ],
  emailButtonText: 'Sign up',
  emailHeader: 'Lorem Ipsum',
  emailText:
    'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal.',
  emailInputPlaceholder: 'Sign up for emails',
};
