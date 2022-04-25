import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import Analytics from '@mui/icons-material/Analytics';
import BugReportIcon from '@mui/icons-material/BugReport';
import SourceIcon from '@mui/icons-material/Source';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const navbarList = [
  {
    icon: DashboardOutlined,
    desc: 'Dashboard',
    badge: 0,
    path: '/dashboard'
  },
  {
    icon: SourceIcon,
    desc: 'Projects',
    badge: 0,
    path: '/projects'
  },
  {
    icon: BugReportIcon,
    desc: 'Bugs',
    badge: 0,
    path: '/bugs'
  },
  {
    icon: Analytics,
    desc: 'Analytics',
    badge: 0,
    path: '/analytics'
  },
  {
    icon: AdminPanelSettingsIcon,
    desc: 'Admin Panel',
    badge: 0,
    path: '/admin'
  }
];

export default navbarList;
