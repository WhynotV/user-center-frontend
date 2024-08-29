import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '咕咕の用户中心',
  pwa: false,
  logo: 'https://raw.githubusercontent.com/WhynotV/tuchuang/main/img/%E5%8F%AF%E7%88%B1%E8%9D%99%E8%9D%A0%E4%BE%A0.svg',
  iconfontUrl: '',
};

export default Settings;
