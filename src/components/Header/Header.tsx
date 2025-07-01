import { useState } from 'react';
import { Button, Row, Col, Typography, Drawer } from 'antd';
import {
  CloseOutlined,
  MenuOutlined,
  MinusOutlined,
  BorderOutlined,
  BlockOutlined,
} from '@ant-design/icons'
import styles from './Header.less';

const {Text} = Typography;
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Row
        className={styles.header}
        align="middle"
        justify="space-between"
      >
        <Col>
          <Button
            icon={<MenuOutlined />}
            type='text'
            className={styles.controlBtnArea}
            onClick={() => setMenuOpen(true)}
          />
          <Text>拾光</Text>
        </Col>
        <Col className={styles.controlBtnArea}>
          <Button icon={<MinusOutlined />} type='text' />
          <Button icon={<BorderOutlined />} type='text' />
          <Button icon={<CloseOutlined />} type='text' danger />
        </Col>
      </Row>
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        placement='left'
        closable={false}
        maskClosable
        className={styles.menuDrawer}
      >
      </Drawer>
    </>
  )
}