import React, { Component } from 'react';
import Form, { FormItem, FormCore } from 'noform';
import { Input, Button, DatePicker, Select } from 'nowrapper/lib/antd';

class Example extends Component {
    constructor(props, context) {
        super(props, context);

        this.core = new FormCore();
    }

    setStatus = (status) => {
        this.core.setGlobalStatus(status);
    }

    setItemStatus = (name, status) => {
        this.core.setStatus(name, status);
    }

    render() {
        return (            
            <Form core={this.core} layout={{ label: 8, control: 16 }}>
                <div className="example-title">Status Examples</div>
                <FormItem label="username" name="username" value="username"><Input /></FormItem>
                <FormItem label="datePicker" name="datePicker">
                    <DatePicker
                        showTime={{ format: 'HH:mm:ss' }}
                        format="YYYY-MM-DD HH:mm:ss"
                    />
                </FormItem>
                <FormItem
                    layout={null}
                    render={(values, core) => {
                        const list = [
                            { label: 'optA', value: 'optA'},
                            { label: 'optB', value: 'optB'},
                            { label: 'optC', value: 'optC'},
                            { label: 'optD', value: 'optD'},
                            { label: 'optE', value: 'optE'},
                        ]
                        return (
                            <FormItem label="多选" name="gender">
                                <Select
                                    mode="multiple"
                                    onChange={(Ids) => core.setItemValue('gender', Ids)}
                                    value={values.gender}
                                >
                                    {
                                        list.map((i) =>
                                            <Select.Option key={i.value}>
                                                {i.label}
                                            </Select.Option>
                                        )
                                    }
                                </Select>
                            </FormItem>
                        );
                    }}
                />

                <FormItem label="Global status">
                    <div >
                        <Button style={{ marginRight: 12 }} onClick={this.setStatus.bind(this, 'edit')}>Edit</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setStatus.bind(this, 'preview')}>Preview</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setStatus.bind(this, 'disabled')}>Disabled</Button>
                    </div>
                </FormItem>
                <FormItem label="username - status">
                    <div >
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'username', 'edit')}>Edit</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'username', 'preview')}>Preview</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'username', 'disabled')}>Disabled</Button>
                    </div>
                </FormItem>
                <FormItem label="datePicker - status">
                    <div >
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'datePicker', 'edit')}>Edit</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'datePicker', 'preview')}>Preview</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'datePicker', 'disabled')}>Disabled</Button>
                    </div>
                </FormItem>
                <FormItem label="gender - status">
                    <div >
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'gender', 'edit')}>Edit</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'gender', 'preview')}>Preview</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setItemStatus.bind(this, 'gender', 'disabled')}>Disabled</Button>
                    </div>
                </FormItem>
            </Form>
        );
    }
}

export default Example;
