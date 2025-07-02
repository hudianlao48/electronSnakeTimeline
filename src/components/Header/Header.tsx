import Sidebar from '@/components/Sidebar';
import {
  BorderOutlined,
  CloseOutlined,
  MenuOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { useState } from 'react';
import styles from './Header.less';

const { Text } = Typography;
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleCloseClick() {
    window.electronAPI.closeApp();
  }
  return (
    <>
      <Row className={styles.header} align="middle" justify="space-between">
        <Col>
          <Button
            icon={<MenuOutlined />}
            type="text"
            className={styles.controlBtnArea}
            onClick={() => setMenuOpen(true)}
          />
          <Text>拾光</Text>
        </Col>
        <Col className={styles.controlBtnArea}>
          <Button icon={<MinusOutlined />} type="text" />
          <Button icon={<BorderOutlined />} type="text" />
          <Button
            icon={<CloseOutlined />}
            type="text"
            danger
            onClick={handleCloseClick}
          />
        </Col>
      </Row>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
