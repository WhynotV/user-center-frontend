import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage ='咕咕出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'blog',
          title: "Whynot'Blog",
          href: 'https://whynotgu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 咕咕 GitHub</>,
          href: 'https://github.com/WhynotV',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Try for you',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
