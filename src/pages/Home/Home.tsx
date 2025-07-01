import { useModel } from '@umijs/max';
import { Spin } from 'antd';
import { useState } from 'react';
import styles from './Home.less';

export default function HomePage() {
  const { todayImage } = useModel('image');
  const [loading, setLoading] = useState(true);

  console.log(todayImage);
  return (
    <div className={styles.home}>
      <Spin spinning={loading}>
        <img
          src={todayImage?.imgurl}
          alt=""
          referrerPolicy="no-referrer"
          className={styles.backgroundImage}
          onLoad={() => setLoading(false)}
        />
        <div className={styles.contentWrapper}>{todayImage?.name}</div>
      </Spin>
    </div>
  );
}
