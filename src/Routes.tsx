import {
  TablerIconsProps,

  // General
  IconHome,
  IconMessage,
  IconBox,
  IconUser,
  IconSettings,

  // Organization
  // IconSettings,
  IconUsers,
  IconPlant,
  IconCreditCard,
  IconFileInvoice,

  // Project
  IconChartBar,
  // IconSettings,
  IconApi,
  IconCode,
} from '@tabler/icons-react';

import {
  HomePage,
  ChatPage,
  ProjectsPage,
  ProfilePage,
  SettingsPage,
} from '@/ui-general/pages';

import {
  SettingsPage as OrganizationSettingsPage,
  MembersPage,
  PlanPage,
  PaymentMethodsPage,
  InvoicesPage,
} from '@/ui-organization/pages';

import {
  OverviewPage,
  ApiItemsPage,
  CodeGenPage,
  SettingsPage as ProjectSettingsPage,
} from '@/ui-project/pages';

export interface BaseRoute {
  icon: (props: TablerIconsProps) => JSX.Element;
  label: string;
  path: string;
  element: React.ReactNode;
  notifications: number;
}

export const RouteGeneral: BaseRoute[] = [
  {
    icon: IconHome,
    label: 'Home',
    path: '',
    element: <HomePage />,
    notifications: 0,
  },
  {
    icon: IconMessage,
    label: 'Chat',
    path: 'chat',
    element: <ChatPage />,
    notifications: 0,
  },
  {
    icon: IconBox,
    label: 'Projects',
    path: 'projects',
    element: <ProjectsPage />,
    notifications: 0,
  },
  {
    icon: IconUser,
    label: 'Profile',
    path: 'profile',
    element: <ProfilePage />,
    notifications: 0,
  },
  {
    icon: IconSettings,
    label: 'Settings',
    path: 'settings',
    element: <SettingsPage />,
    notifications: 0,
  },
];

export const RouteOrganization: BaseRoute[] = [
  {
    icon: IconSettings,
    label: 'Settings',
    path: 'settings',
    element: <OrganizationSettingsPage />,
    notifications: 0,
  },
  {
    icon: IconUsers,
    label: 'Members',
    path: 'members',
    element: <MembersPage />,
    notifications: 0,
  },
  {
    icon: IconPlant,
    label: 'Plan',
    path: 'plan',
    element: <PlanPage />,
    notifications: 0,
  },
  {
    icon: IconCreditCard,
    label: 'Payment Methods',
    path: 'payment-methods',
    element: <PaymentMethodsPage />,
    notifications: 0,
  },
  {
    icon: IconFileInvoice,
    label: 'Invoices',
    path: 'invoices',
    element: <InvoicesPage />,
    notifications: 0,
  },
];

export const RouteProject: BaseRoute[] = [
  {
    icon: IconChartBar,
    label: 'Overview',
    path: 'overview',
    element: <OverviewPage />,
    notifications: 0,
  },
  {
    icon: IconApi,
    label: 'ApiItems',
    path: 'api-items',
    element: <ApiItemsPage />,
    notifications: 0,
  },
  {
    icon: IconCode,
    label: 'CodeGen',
    path: 'codegen',
    element: <CodeGenPage />,
    notifications: 0,
  },
  {
    icon: IconSettings,
    label: 'Settings',
    path: 'settings',
    element: <ProjectSettingsPage />,
    notifications: 0,
  },
];
