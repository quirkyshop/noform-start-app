import React, { Component } from 'react';
import Form, { FormItem, FormCore } from 'noform';
import { Input, Radio, Switch } from 'nowrapper/lib/antd';
import { TableRepeater, InlineRepeater, Selectify } from 'nowrapper/lib/antd/repeater';

const SelectTableRepeater = Selectify(TableRepeater);
const SelectInlineRepeater = Selectify(InlineRepeater);
const { Group: RadioGroup } = Radio;

const dataSource = [{ label: 'male', value: 'male' }, { label: 'female', value: 'female' }];

const validateConfig = {
    username: { type: 'string', required: true },
};

const repeatValues = [
    { username: 'lily', gender: 'female', id: 'lily' },
    { username: 'bobby', gender: 'male', id: 'bobby' }
];

class Example extends Component {
    constructor(props, context) {
        super(props, context);
        this.core = new FormCore({
            values: {
                repeater: repeatValues,
                inlineRepeater: repeatValues,
                inlineRepeaterMultiple: repeatValues,
                selectTableRepeater: {
                    value: [repeatValues[0]],
                    dataSource: repeatValues,
                },
                selectInlineRepeater: {
                    value: [repeatValues[0]],
                    dataSource: repeatValues,
                },
                selectInlineRepeaterMultiple: {
                    value: [repeatValues[0]],
                    dataSource: repeatValues,
                },
                selectInlineRepeaterMultiple2: {
                    value: [repeatValues[0], repeatValues[1]],
                    dataSource: repeatValues,
                }
            }
        });

        window.core = this.core;
        this.formConfig = {
            validateConfig,
            autoValidate: true
        };
        this.asyncHandler = {
            add: (values) => {
                return ({
                    success: true,
                    item: {
                        ...values,
                        id: 'add' + Math.random().toString(36).slice(2)
                    }
                });
            }
        };
    }

    render() {
        return (<Form core={this.core} layout={{ label: 6, control: 18 }} defaultMinWidth={false}>
            <div className="app-wrapper-2">
                <div className="example-item-wrapper">
                    <div className="example-title">Common Repeater Examples</div>
                    <FormItem label="TableRepeater" name="repeater">
                        <TableRepeater formConfig={this.formConfig}>
                            <FormItem label="username" name="username"><Input style={{ width: 100 }} /></FormItem>
                            <FormItem label="gender" name="gender"><RadioGroup style={{ width: 200 }} options={dataSource} /></FormItem>
                        </TableRepeater>
                    </FormItem>

                    <FormItem label="InlineRepeater" name="inlineRepeater">
                        <InlineRepeater formConfig={this.formConfig}>
                            <FormItem defaultMinWidth={false} label="gender" name="gender"><RadioGroup style={{ width: 200 }} options={dataSource} /></FormItem>
                            <FormItem defaultMinWidth={false} label="trigger" name="isOpen"><Switch checkedChildren="on" unCheckedChildren="off" /></FormItem>
                        </InlineRepeater>
                    </FormItem>

                    <FormItem label="InlineRepeater(multiple)" name="inlineRepeaterMultiple">
                        <InlineRepeater multiple formConfig={this.formConfig}>
                            <FormItem label="username" name="username"><Input style={{ width: '100px' }} /></FormItem>
                            <FormItem label="gender" name="gender"><RadioGroup style={{ width: 200 }} options={dataSource} /></FormItem>
                        </InlineRepeater>
                    </FormItem>
                </div>

                <div className="example-item-wrapper">
                    <div className="example-title">Selectify Repeater Examples</div>
                    <FormItem label="TableRepeater" name="selectTableRepeater">
                        <SelectTableRepeater asyncHandler={this.asyncHandler} formConfig={this.formConfig}>
                            <FormItem label="username" name="username"><Input style={{ width: '100px' }} /></FormItem>
                            <FormItem label="gender" name="gender"><RadioGroup style={{ width: 200 }} options={dataSource} /></FormItem>
                        </SelectTableRepeater>
                    </FormItem>

                    <FormItem label="InlineRepeater" name="selectInlineRepeater">
                        <SelectInlineRepeater asyncHandler={this.asyncHandler} formConfig={this.formConfig}>
                            <FormItem label="username" name="username"><Input style={{ width: '100px' }} /></FormItem>
                            <FormItem label="gender" name="gender"><RadioGroup style={{ width: 200 }} options={dataSource} /></FormItem>
                        </SelectInlineRepeater>
                    </FormItem>

                    <FormItem label="Inline(multiple)" name="selectInlineRepeaterMultiple">
                        <SelectInlineRepeater asyncHandler={this.asyncHandler} multiple formConfig={this.formConfig}>
                            <FormItem label="username" name="username"><Input style={{ width: '100px' }} /></FormItem>
                            <FormItem label="gender" name="gender"><RadioGroup style={{ width: 200 }} options={dataSource} /></FormItem>
                        </SelectInlineRepeater>
                    </FormItem>

                    <FormItem label="Inline(multiple 2x)" name="selectInlineRepeaterMultiple2">
                        <SelectInlineRepeater selectMode="multiple" asyncHandler={this.asyncHandler} multiple formConfig={this.formConfig}>
                            <FormItem label="username" name="username"><Input style={{ width: '100px' }} /></FormItem>
                            <FormItem label="gender" name="gender"><RadioGroup style={{ width: 200 }} options={dataSource} /></FormItem>
                        </SelectInlineRepeater>
                    </FormItem>
                </div>
            </div>
        </Form>);
    }
}

export default Example;
