import { ThemeProvider } from '@emotion/react';
import { WfPageTitleRoot, MainHeader, MainFooter, SelectedRole } from '@uniwise/flow-ui-react';
import { get } from '@uniwise/jwt';
import { PropsWithChildren } from 'react';
import { theme } from './theme';
import { Outlet } from 'react-router-dom';

export const Root: React.FC<PropsWithChildren> = ({ children }) => {
  const labelBundle = {
    admin: 'Admin',
    adminLoginWarning: 'You are logged as admin',
    assessor: 'Assessor',
    author: 'Author',
    create: 'Create',
    editProfile: 'Edit profile',
    invigilator: 'Invigilator',
    logOff: 'Log off',
    logOffAdmin: 'Log off admin',
    manager: 'Manager',
    newFlow: 'New flow',
    newFlowCombined: 'New flow',
    newFlowSeries: 'New flow series',
    participant: 'Participant',
    reviewer: 'Reviewer',
    support: 'Support',
    supporter: 'Supporter',
    supportLinkText: 'Contact support',
    wiseflowLogoLinkText: 'WiseFlow',
  };
  return (
    <ThemeProvider theme={theme}>
      <WfPageTitleRoot licenseName={''} />
      <MainHeader labelBundle={labelBundle} JWT={get()} selectedRole={SelectedRole.ADMIN} />
      <Outlet />
      <MainFooter labelBundle={labelBundle} />
    </ThemeProvider>
  );
};
