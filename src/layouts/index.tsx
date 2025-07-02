import Header from '@/components/Header';
import { Outlet } from '@umijs/max';
import { ConfigProvider, theme } from 'antd';

import styles from './index.less';

export default () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className={styles.mainLayout}>
        <Header />
        <Outlet />
      </div>
    </ConfigProvider>
  );
};
