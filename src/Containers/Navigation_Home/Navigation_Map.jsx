 import * as Icon from '../../Imports/icons';
export const navItems = [

  { to: '/CE/Dashboard', text: 'Home', icon: <Icon.Dashboard_Cubes /> },

  {
    text: 'Assets',
    icon: <Icon.Dashboard_Cubes />,
    dropdownItems: [
      { to: '/CE/Savings_Dashboard', text: 'Savings' },
    ],
  },

  {
    text: 'Settings',
    icon: <Icon.Settings />,
    dropdownItems: [
      { to: '/CE/Settings/Security', text: 'Security' },
    ],
  },

];