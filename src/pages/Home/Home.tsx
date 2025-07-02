import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Dropdown, Space, Spin } from 'antd';
import { useState } from 'react';
import styles from './Home.less';

export default function HomePage() {
  const { currentImage, setSearchParams, searchParams } = useModel('image');
  const [loading, setLoading] = useState(true);

  function nextPage() {
    setSearchParams({
      ...searchParams,
      no: searchParams.no + 1,
    });
  }

  function prevPage() {
    setSearchParams({
      ...searchParams,
      no: searchParams.no - 1,
    });
  }
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
        <Dropdown
          trigger={['contextMenu']}
          popupRender={(menus) => (
            <div className={styles.contextMenu}>
              <Space style={{ marginBottom: 10 }}>
                <Button icon={<SettingOutlined />} />
                <Button icon={<DoubleLeftOutlined />} onClick={prevPage} />
                <Button icon={<DoubleRightOutlined />} onClick={nextPage} />
              </Space>
              {menus}
            </div>
          )}
          menu={{
            items: [
              {
                key: '1',
                label: '设为壁纸',
                onClick: () => {
                  // window.electronAPI.openExternal(currentImage?.imgurl);
                },
              },
              {
                key: '2',
                label: '下载壁纸',
                onClick: () => {
                  // window.electronAPI.openExternal(currentImage?.imgurl);
                },
              },
            ],
          }}
        >
          <div className={styles.contentWrapper}>{currentImage?.copyright}</div>
        </Dropdown>
      </Spin>
    </div>
  );
}
