import {
  DashboardIcon,
  // AcquirerIcon,
  // DeviceMgtIcon,
  // DisputeMgtIcon,
  // ProductMgtIcon,
  // TerminalIcon,
  ReportIcon,
  UserRoleIcon,
} from '@/SVGs/CustomSVGs';
import { BsBoxSeam, BsPeople } from 'react-icons/bs';
import { MdDevices } from 'react-icons/md';
import { LiaTerminalSolid, LiaUsersSolid } from 'react-icons/lia';

export const SidebarData = [
  {
    id: 'tab1',
    icon: <DashboardIcon />,
    title: 'Dashboard',
    url: '/',
  },

  {
    id: 'tab2',
    icon: <ReportIcon />,
    title: 'Report',
    dropdown: [
      {
        id: 'tab2a',
        title: 'Transaction History',
        url: '/report/transaction-history',
      },
    ],
  },
  {
    id: 'tab3',
    icon: <LiaTerminalSolid size={23} />,
    title: 'Terminal Management',
    dropdown: [
      {
        id: 'tab3a',
        title: 'Terminals',
        url: '/terminal-management/terminals',
      },
      {
        id: 'tab3b',
        title: 'Device Components',
        url: '/terminal-management/device-components',
      },
      {
        id: 'tab3c',
        title: 'Key Exchange Index',
        url: '/terminal-management/exchange-index',
      },
    ],
  },
  {
    id: 'tab4',
    icon: <UserRoleIcon />,
    title: 'Users & Role Mgt',
    dropdown: [
      { id: 'tab4a', title: 'Users', url: '/users-role-mgt/users' },
      {
        id: 'tab4b',
        title: 'Role & Permission',
        url: '/users-role-mgt/role-permission',
      },
      {
        id: 'tab4c',
        title: 'System Audit',
        url: '/users-role-mgt/system-audit',
      },
    ],
  },
  {
    id: 'tab5',
    icon: <MdDevices size={23} />,
    title: 'Devices Management',
    dropdown: [
      {
        id: 'tab5a',
        title: 'Device Components',
        url: '/devices-management/device-components',
      },
      {
        id: 'tab5b',
        title: 'Device Type',
        url: '/devices-management/device-type',
      },
      {
        id: 'tab5c',
        title: 'Device Models',
        url: '/devices-management/device-models',
      },
    ],
  },
  {
    id: 'tab6',
    icon: <LiaUsersSolid size={23} />,
    title: 'Acquirer Management',
    dropdown: [
      { id: 'tab6a', title: 'Acquirer', url: '/acquirer-management/acquirer' },
      { id: 'tab6b', title: 'Wallet', url: '/acquirer-management/wallet' },
      { id: 'tab6c', title: 'Region', url: '/acquirer-management/region' },
      { id: 'tab6d', title: 'Branch', url: '/acquirer-management/branch' },
      {
        id: 'tab6e',
        title: 'Merchant Branch',
        url: '/acquirer-management/merchant-branch',
      },
    ],
  },
  {
    id: 'tab7',
    icon: <BsPeople size={23} />,
    title: 'Dispute Management',
    url: '/dispute-management',
  },
  {
    id: 'tab7',
    icon: <BsBoxSeam size={23} />,
    title: 'Product & Service Mgt',
    url: '/product-mgt',
  },
];
