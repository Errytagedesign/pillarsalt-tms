import { ReactElement } from 'react';
import Home from '@/Pages/Home/Home';
import ProductMgt from '@/Pages/ProductMgt/ProductMgt';
import TransactionHistory from '@/Pages/Reports/TransactionHistory/TransactionHistory';
import Terminals from '@/Pages/TerminalMgt/Terminals/Terminals';
import { ExchangeIndex } from '@/Pages/TerminalMgt/ExchangeIndex/ExchangeIndex';
import Users from '@/Pages/UserRoleMgt/Users/Users';
import RolePermission from '@/Pages/UserRoleMgt/RolePermission/RolePermission';
import SysAudit from '@/Pages/UserRoleMgt/SysAudit/SysAudit';
import DeviceComponents from '@/Pages/DeviceMgt/DeviceComponents/DeviceComponents';
import TerminalDeviceComponents from '@/Pages/TerminalMgt/DeviceComponents/TerminalDeviceComponents';
import { DeviceType } from '@/Pages/DeviceMgt/DeviceType/DeviceType';
import DeviceModels from '@/Pages/DeviceMgt/DeviceModels/DeviceModels';
interface Route {
  path: string;
  name: string;
  element: ReactElement;
}

const dashboardRoutes: Route[] = [
  { path: '/', name: 'Dashboard', element: <Home /> },
  {
    path: '/report/transaction-history',
    name: 'Transaction History',
    element: <TransactionHistory />,
  },
  {
    path: 'terminal-management/terminals',
    name: 'Terminals',
    element: <Terminals />,
  },
  {
    path: 'terminal-management/device-components',
    name: 'Device Components',
    element: <TerminalDeviceComponents />,
  },
  {
    path: 'terminal-management/exchange-index',
    name: 'Key Exchange Index',
    element: <ExchangeIndex />,
  },
  {
    path: '/users-role-mgt/users',
    name: 'Users',
    element: <Users />,
  },
  {
    path: '/users-role-mgt/role-permission',
    name: 'Role & Permission',
    element: <RolePermission />,
  },
  {
    path: '/users-role-mgt/system-audit',
    name: 'System Audit',
    element: <SysAudit />,
  },
  {
    path: '/devices-management/device-components',
    name: 'Device Components',
    element: <DeviceComponents />,
  },
  {
    path: '/devices-management/device-type',
    name: 'Device Type',
    element: <DeviceType />,
  },
  {
    path: '/devices-management/device-models',
    name: 'Device Models',
    element: <DeviceModels />,
  },
  {
    path: '/acquirer-management/acquirer',
    name: 'Acquirer',
    element: <DeviceComponents />,
  },
  {
    path: '/acquirer-management/wallet',
    name: 'Wallet',
    element: <DeviceComponents />,
  },
  {
    path: '/acquirer-management/region',
    name: 'Region',
    element: <DeviceType />,
  },
  {
    path: '/acquirer-management/branch',
    name: 'Device Models',
    element: <DeviceModels />,
  },
  {
    path: '/acquirer-management/merchant-branch',
    name: 'Merchant Branch',
    element: <DeviceModels />,
  },
  {
    path: '/dispute-management',
    name: 'Dispute Management',
    element: <ProductMgt />,
  },
  {
    path: '/product-mgt',
    name: 'Product & Service Mgt',
    element: <ProductMgt />,
  },
];

export default dashboardRoutes;
