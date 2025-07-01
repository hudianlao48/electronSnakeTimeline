import React from 'react';
import { useModel } from '@umijs/max';
import styles from './Home.less';

export default function HomePage() {
  const { todayImage } = useModel('image');

  return (
    <div
      className={styles.home}
    >
      <img
        src={todayImage?.imgurl}
        alt=""
        referrerPolicy='no-referrer'
        width="100%"
        height="100%"
        className={styles.backgroundImage}
      />
      <div className={styles.contentWrapper}>
        123
      </div>
    </div>
  );
};
