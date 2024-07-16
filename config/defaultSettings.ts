import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  fixSiderbar: true,
  layout: 'top',
  splitMenus: false,
  navTheme: 'light',
  contentWidth: 'Fixed',
  colorPrimary: '#1890ff',
  siderMenuType: 'sub',
  fixedHeader: true,
};

export default Settings;
