import React, { useState, useEffect } from 'react';
import { Drawer, Button } from 'antd';
import './DrawerForm.less';

export default (props) => {
  const [visible, setVisible] = useState(false);
  
  const {
    className = '',
    title = "抽屉表单",
    width = 720,
    content = 123,
    onOk,
    onMount,
  } = props;
  
  const onToggle = () => {
    setVisible(!visible);
  };
  
  useEffect(() => {
    if (onMount) {
      onMount(onToggle);
    }
  }, []);
  
  return (
    <Drawer
      className={`sky-drawer-container ${className}`}
      visible={visible}
      title={title}
      width={width}
      onClose={onToggle}
    >
      {content}
      <div style={{ height: 108 }} />
      <div className="footer">
        <Button onClick={onToggle} style={{ marginRight: 8 }} htmlType="button">
          取消
        </Button>
        <Button onClick={onOk ? onOk : onToggle} type="primary" htmlType="button">
          确定
        </Button>
      </div>
    </Drawer>
  )
};
