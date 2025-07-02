import styles from '@/components/Header/Header.less';
import { catehowList, catewhat, order } from '@/models/image';
import { useModel } from '@umijs/max';
import { Avatar, Drawer, Form, Radio, Select } from 'antd';
import { useEffect } from 'react';

export default function Sidebar({ open, onClose }: any) {
  const {
    initialState: { imageSourceList },
  } = useModel('@@initialState');
  const {
    currentImageSource,
    setCurrentImageSource,
    searchParams,
    setSearchParams,
    getWallPaper,
    // getTodayImage,
  } = useModel('image');
  const [searchForm] = Form.useForm();

  function handleImageSourceChange(value: string) {
    setCurrentImageSource(value);
    setSearchParams({
      ...searchParams,
      _trigger: Date.now(),
    });
  }

  function handleSearchParamChange(_: any, allValues: any) {
    console.log('handleSearchParamChange', allValues);
    setSearchParams({
      ...searchParams,
      ...allValues,
    });
  }

  useEffect(() => {
    searchForm.setFieldsValue(searchParams);
    getWallPaper();
  }, [searchParams]);
  return (
    <Drawer
      open={open}
      onClose={onClose}
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
      <Form form={searchForm} onValuesChange={handleSearchParamChange}>
        <Form.Item label="" name="catehow">
          <Radio.Group>
            {catehowList.map((ch) => (
              <Radio.Button value={ch.value} key={ch.value}>
                {ch.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="" name="catewhat">
          <Radio.Group>
            {catewhat.map((cw) => (
              <Radio.Button value={cw.value} key={cw.value}>
                {cw.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="" name="order">
          <Radio.Group>
            {order.map((o) => (
              <Radio.Button value={o.value} key={o.value}>
                {o.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
