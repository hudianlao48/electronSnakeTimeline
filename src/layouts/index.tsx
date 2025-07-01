import Header from '@/components/Header';
import { Outlet, useModel } from '@umijs/max';
import { ConfigProvider, theme } from 'antd';
import { useEffect } from 'react';
import styles from './index.less';

export default () => {
  const { currentImageSource, getTodayImage } = useModel('image');
  async function toGetTodayImage() {
    try {
      await getTodayImage();
    } catch (e) {
      console.warn(e);
    }
  }
  useEffect(() => {
    toGetTodayImage().then();
  }, [currentImageSource]);
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
