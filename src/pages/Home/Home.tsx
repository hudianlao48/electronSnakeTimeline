import { useModel } from '@umijs/max';
import { Spin } from 'antd';
import { useState } from 'react';
import styles from './Home.less';

export default function HomePage() {
  const { currentImage } = useModel('image');
  const [loading, setLoading] = useState(true);

  console.log(currentImage);
  return (
    <div className={styles.home}>
      <Spin spinning={loading}>
        <img
          src={currentImage?.imgurl}
          alt=""
          referrerPolicy="no-referrer"
          className={styles.backgroundImage}
          onLoad={() => setLoading(false)}
        />
        <div className={styles.contentWrapper}>{currentImage?.name}</div>
      </Spin>
    </div>
  );
}
