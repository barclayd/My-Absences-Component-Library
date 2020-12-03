import React from 'react';
import { StyledAbsenceBody, StyledBody } from './StyledAbsencePage';
import { Header } from '../../templates/Header/Header';
import { NavBar } from '../../templates/NavBar/NavBar';
import { RegisteredIcon } from '../../atoms/Icon/Icon';
import { Heading, HeadingStyle } from '../../atoms/Header/Heading';
import { FilterBox } from '../../organism/FilterBox/FilterBox';
import { AbsenceList } from '../../templates/AbsenceList/AbsenceList';
import { Absence } from '../../organism/AbsenceRecord/AbsenceRecord';
import { Footer } from '../../templates/Footer/Footer';

export interface AbsencePageProps {
  /**
   * Username
   */
  name: string;
  /**
   * Username
   */
  navbarIcons: RegisteredIcon[];
  /**
   * Default active icon
   */
  activeIcon: RegisteredIcon;
  /**
   * Default active icon
   */
  statusOptions: string[];
  /**
   * Default active icon
   */
  leaveTypes: string[];
  /**
   * Default active icon
   */
  absences: Absence[];
  /**
   * Default active icon
   */
  locations: string[];
  /**
   * Default active icon
   */
  footerIcons: RegisteredIcon[];
  /**
   * Default active icon
   */
  copyright: string;
  /**
   * Default active icon
   */
  emailHeader: string;
  /**
   * Default active icon
   */
  emailText: string;
  /**
   * Default active icon
   */
  emailInputPlaceholder: string;
  /**
   * Default active icon
   */
  emailButtonText: string;
}

/**
 * Primary UI component for user interaction
 */
export const AbsencePage: React.FC<AbsencePageProps> = ({
  name,
  navbarIcons,
  activeIcon,
  statusOptions,
  leaveTypes,
  absences,
  footerIcons,
  copyright,
  emailInputPlaceholder,
  locations,
  emailButtonText,
  emailText,
  emailHeader,
}) => (
  <>
    <Header name={name} />
    <StyledBody>
      <NavBar
        icons={navbarIcons}
        activeIcon={activeIcon}
        onIconClick={() => {}}
      />
      <StyledAbsenceBody>
        <Heading style={HeadingStyle.title} text="Absence" color="#333333" />
        <FilterBox
          statusOptions={statusOptions}
          leaveTypes={leaveTypes}
          onStatusChange={() => {}}
          onTypeChange={() => {}}
        />
        <AbsenceList absences={absences} />
      </StyledAbsenceBody>
    </StyledBody>
    <Footer
      locations={locations}
      icons={footerIcons}
      copyright={copyright}
      emailHeader={emailHeader}
      emailText={emailText}
      emailInputPlaceholder={emailInputPlaceholder}
      emailButtonText={emailButtonText}
    />
  </>
);
