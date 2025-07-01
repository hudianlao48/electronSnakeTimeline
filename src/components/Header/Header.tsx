import {
  BorderOutlined,
  CloseOutlined,
  MenuOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { useModel } from '@umijs/max';
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Form,
  Row,
  Select,
  Typography,
} from 'antd';
import { useState } from 'react';
import styles from './Header.less';

const { Text } = Typography;
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    initialState: { imageSourceList },
  } = useModel('@@initialState');
  const { currentImageSource, setCurrentImageSource } = useModel('image');

  function handleImageSourceChange(value: string) {
    setCurrentImageSource(value);
  }
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
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        placement="left"
        closable={false}
        maskClosable
        className={styles.menuDrawer}
      >
        <Avatar />
        <Form>
          <Form.Item label="选择图源">
            <Select
              value={currentImageSource}
              options={imageSourceList}
              onChange={handleImageSourceChange}
            />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
