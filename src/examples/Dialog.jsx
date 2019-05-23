import React from 'react';
import Form, { If, FormItem, FormCore } from 'noform';
import { Input, Select, Button, Dialog } from 'nowrapper/lib/antd';
import { InlineRepeater } from 'nowrapper/lib/antd/repeater';
import { message, Alert, Table } from 'antd';
import LocaleProvider from 'antd/lib/locale-provider';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Ff from './ThirdForm';

const { Column } = Table;
const customizeFormType = {
    options: [
      { label: '单选', value: 'Radio' },
      { label: '多选', value: 'Checkbox' },
      { label: '文本', value: 'Input' },
      { label: '数字', value: 'InputNumber' },
      { label: '日期', value: 'DatePicker' },
      { label: '日期区间', value: 'RangePicker' },
    ],
    text: {
      Radio: '单选',
      Checkbox: '多选',
      Input: '文本',
      InputNumber: '数字',
      DatePicker: '日期',
      RangePicker: '日期区间'
    }
};
const customizeFormList = [{
    id: 8,
    categoryId: '10020190509114652100600004935306',
    title: '生日',
    type: 'DatePicker',
    options: null
  },
  {
    id: 9,
    categoryId: '10020190509114652100600004935306',
    title: '大学时段',
    type: 'RangePicker',
    options: null
  },
  {
    id: 10,
    categoryId: '10020190509114652100600004935306',
    title: '性别',
    type: 'Radio',
    options: [
      {
        label: '男',
        value: 'man'
      },
      {
        label: '女',
        value: 'women'
      }
    ]
  }
]
const customizeForm = new FormCore({
    validateConfig: {
      title: [{ required: true, max: 10, message: '请输入表单标题，最多为10个字符'}],
      type: [{ required: true, message: '请选择表单类型'}],
    },
});
const inlineRepeaterConfig = {
    locale: 'zh',
    addText: '新增选项',
    formConfig: {
        validateConfig: {
        label: [{ required: true, max: 10, message: '请输入选项名最多为10个字符'}],
        value: [{ required: true, message: '请输入选项值'}],
        }
    }
};
const Example = () => {
    const onCreateFormItem = (item = { title: '', type: '', id: 0 }) => {
        customizeForm.setValues(item);
        customizeForm.resetError();
        const onOk = (values, hide) => {
            hide();
        };
    
        Dialog.show({
        title: '自定义表单',
        width: 800,
        onOk,
        content: (
            <Form core={customizeForm}>
            <FormItem label="表单标题" name="title">
                <Input />
            </FormItem>
            <FormItem label="表单类型" name="type">
                <Select options={customizeFormType.options} />
            </FormItem>
            <If when={(values) => (values.type === 'Radio' || values.type === 'Checkbox')}>
                <FormItem name="options" validateConfig={[{ required: true, message: '请配置表单选项且不少于两项', type: 'array', min: 2 }]} >
                <InlineRepeater
                    {...inlineRepeaterConfig}
                >
                    <FormItem label="选项名" name="label">
                    <Input />
                    </FormItem>
                    <FormItem label="选项值" name="value">
                    <Input />
                    </FormItem>
                </InlineRepeater>
                </FormItem>
            </If>
            </Form>
        ),
        });
    };

    return ( 
        <LocaleProvider locale={zhCN}>
            <div>
                <div className="example-title">Diloag Examples</div>
                <Alert 
                    style={{ marginBottom: 12 }} 
                    message={
                        <div>
                            <div>submit dialog form has 50/50 chance success or failed</div>
                        </div>
                    } 
                    type="info" 
                    showIcon 
                />
                <Button type="primary" icon="plus" onClick={() => onCreateFormItem()}>新增表单项</Button>
                <Table rowKey="id" bordered={false} pagination={false} dataSource={customizeFormList}>
                <Column title="表单标题" dataIndex="title" />
                <Column title="表单类型" dataIndex="type" />
                <Column title="选项" dataIndex="options" render={
                    list => list ? <span>{JSON.stringify(list)}</span> : '无'
                } />
                <Column
                    title="操作"
                    render={record => (
                        <a data-action="customizeFormUpdate" onClick={() => onCreateFormItem(record)}>编辑</a>
                    )}
                />
                </Table>
            </div>
        </LocaleProvider>           
    ); 
}

export default Example;
