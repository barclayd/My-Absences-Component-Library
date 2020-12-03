import React from 'react';
import { AbsencePage } from './stories/pages/Absence/AbsencePage';
import { RegisteredIcon } from './stories/atoms/Icon/Icon';
import { definedAbsences } from './stories/templates/AbsenceList/AbsenceList.stories';

function App() {
  return (
    <AbsencePage
      name="Elon Musk"
      navbarIcons={[
        RegisteredIcon.home,
        RegisteredIcon.user,
        RegisteredIcon.logout,
      ]}
      activeIcon={RegisteredIcon.home}
      statusOptions={['All', 'Pending', 'Approved', 'Taken']}
      leaveTypes={['Paid leave', 'Sickness', 'Annual leave']}
      absences={definedAbsences}
      locations={[
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
      ]}
      footerIcons={[
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
      ]}
      copyright="© All rights reserved, 2020"
      emailHeader="Lorem Ipsum"
      emailText="Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal. Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodal."
      emailInputPlaceholder="Sign up for newsletter"
      emailButtonText="Sign up"
    />
  );
}

export default App;
