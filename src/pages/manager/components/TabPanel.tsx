import { ActiveTab } from '..';

interface TabPanelProps {
  activeTab: ActiveTab;
  value: ActiveTab;
  children?: React.ReactNode;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, activeTab, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== value}
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...other}
    >
      {activeTab === value && children}
    </div>
  );
};
