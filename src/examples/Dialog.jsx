import React from 'react';
import Form, { If, FormItem, FormCore } from 'noform';
import { Input, InputNumber, DatePicker, Radio, Checkbox, Select, Button } from 'nowrapper/lib/antd';
import CustomizeForm from './DrawerForm';
import LocaleProvider from 'antd/lib/locale-provider';
import zhCN from 'antd/lib/locale-provider/zh_CN';

const CheckboxGroup = Checkbox.Group;
const { RangePicker } = DatePicker;

/*
* 根据 type 返回 noForm 组件
* */
function typeToComponent(type, options) {
  switch (type) {
    case 'Input':
      return (<Input/>);
    case 'InputNumber':
      return (<InputNumber/>);
    case 'Radio':
      return (<Radio.Group options={options}/>);
    case 'Checkbox':
      return (<CheckboxGroup options={options}/>);
    case 'DatePicker':
      return (<DatePicker />);
    case 'RangePicker':
      return (<RangePicker />);
    default:
      return null
  }
}

const customizeForm = new FormCore();
const form = new FormCore({
  validateConfig: {
    categoryList: [{required: true, type: 'array', message: '请选择分类'}],
    title: [{required: true, type: 'string', max: 30, message: '请输入标题且不超过30个字'}],
    description: [{required: true, type: 'string', max: 500, message: '请输入详情或填写完自定义表单后点击序列化详情'}],
    publisherId: [{required: true, type: 'string', message: '请选择发起人'}],
  },
  onChange: async (keys, values, core) => {
    customizeForm.reset();
    if (keys[0] === 'categoryId') {
      const {categoryId} = values;
      if (categoryId === 1 || categoryId === 2) {
        const list = categoryId === 1
          ? [
            {"id": 6, "title": "姓名", "type": "Input", "options": null},
            {"id": 7, "title": "年龄", "type": "InputNumber", "options": null},
            {"id": 8, "title": "生日", "type": "DatePicker", "options": null},
            {"id": 9, "title": "大学时段", "type": "RangePicker", "options": null},
            {
              "id": 10, "title": "性别", "type": "Radio", "options": [
                {"label": "男", "value": "man"},
                {"label": "女", "value": "women"},
                {"label": "人妖", "value": "renyao"}
              ]
            },
            {
              "id": 79,
              "categoryId": "10020190509114652100600004935306",
              "title": "测试",
              "type": "Input",
              "options": null
            }
          ]
          : [
            {
              "id": 80, "title": "简单1", "type": "Radio", "options": [
                {"label": "男", "value": "man"},
                {"label": "女", "value": "women"}
              ]
            },
            {"id": 81, "title": "简单2", "type": "Input", "options": null},
            {
              "id": 83, "title": "简单3", "type": "Checkbox", "options": [
                {"label": "a", "value": "aa"},
                {"label": "b", "value": "bb"},
                {"label": "c", "value": "cc"}
              ]
            }
          ];
        console.log(categoryId);
        core.setStatus('description', 'preview');
        core.setValues('customizeFormList', list);
        core.setValues('description', null);
        // 修改自定义表单的校验规则
        const validateConfigObj = {};
        list.forEach((i) => {
          validateConfigObj[i.id] = [{required: true, message: `请填写${i.title}`}]
        });

        customizeForm.setValidateConfig(validateConfigObj, true);
      } else {
        core.setStatus('description', 'edit');
        core.setValues('customizeFormList', null);
      }
    }
  },
});

let toggle;
const Example = () => {
  return (
    <LocaleProvider locale={zhCN}>
      <div>
        <div className="example-title">json转表单 Examples</div>
        <Button onClick={() => toggle()}>
          打开抽屉表单
        </Button>
        <CustomizeForm
          onMount={(cb) => {
            toggle = cb
          }}
          width={1050}
          title="json转表单"
          content={(
            <Form core={form} layout={{label: 4, control: 20}}>
              <FormItem label="工单分类" name="categoryId" required>
                <Select
                  options={[{value: 1, label: "自定义1"}, {value: 2, label: "自定义2"}, {value: 3, label: "简单"}]}
                  style={{width: 300}}
                />
              </FormItem>
              <FormItem
                name="description"
                label="工单详情"
                required
              >
                <Input.TextArea
                  autosize={{ minRows: 4, maxRows: 6 }}
                  style={{ width: 500 }}
                  maxLength={500}
                />
              </FormItem>
              <If
                when={(values) => {
                  const customizeFormList = values.customizeFormList;
                  return Array.isArray(customizeFormList)
                }}
              >
                <FormItem
                  render={(values, core) => {
                    return (
                      <Form core={customizeForm}>
                        {values.customizeFormList.map((child) => {
                          const {title, type, options, id} = child;
                          return (
                            <FormItem
                              key={id}
                              label={title}
                              name={id}
                              required
                            >
                              {typeToComponent(type, options)}
                            </FormItem>
                          )
                        })}
                        <Button
                          type="primary"
                          style={{marginTop: 16}}
                          onClick={() => {
                            customizeForm.validate((error) => {
                              if (!error) {
                                let str = '';
                                const values = customizeForm.getValues();
                                Object.keys(values).forEach(key => {
                                  const value = values[key];
                                  let res = value;
                                  str += `${key}: ${res},`;
                                });
                                // @ts-ignore
                                core.setItemValue('description', str)
                              }
                            })
                          }}
                        >
                          序列化详情
                        </Button>
                      </Form>
                    )
                  }}
                />
              </If>
            </Form>
          )}
        />
      </div>
    </LocaleProvider>
  );
}

export default Example;
