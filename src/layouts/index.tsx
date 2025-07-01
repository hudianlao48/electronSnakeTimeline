import { useEffect } from 'react';
import { Outlet, useModel } from '@umijs/max'
import { ConfigProvider, theme } from 'antd';
import Header from '@/components/Header';
import styles from './index.less'

export default () => {
  const { getTodayImage } = useModel('image');

  async function init() {
    try {
      const res = await getTodayImage();
      console.log(res);
    } catch (e) {
      console.warn(e);
    }
  }
  useEffect(() => {
    init().then()
  }, [])
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
  )
}