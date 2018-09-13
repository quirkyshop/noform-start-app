import 'babel-polyfill';
import React, { Component } from 'react';
import Form, { FormItem, FormCore, If } from 'noform';
import { Input, Select } from 'noform/lib/wrapper/antd';
import { Button } from 'antd';
import './App.less';

const dataSource = [
    { label: 'optA', value: 'optA'},
    { label: 'optB', value: 'optB'}
];

class App extends Component {
    constructor(props, context) {
        super(props, context);
        window.core = this.core = new FormCore();
    }

    setStatus = (status) => {
        this.core.setGlobalStatus(status);
    }

    render() {
        return (
            <Form core={this.core} layout={{ label: 8, control: 16 }}>
                <FormItem label="input" name="input"><Input /></FormItem>
                <FormItem label="select" name="select"><Select options={dataSource} /></FormItem>
                <If when={(values, { globalStatus }) => {
                    return !!values.select;
                }}>
                <FormItem label="bingo!"><span>🎉</span></FormItem>
                </If>
                <FormItem label="Global status">
                    <div >
                        <Button style={{ marginRight: 12 }} onClick={this.core.reset.bind(this.core)}>Clear</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setStatus.bind(this, 'edit')}>Edit</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setStatus.bind(this, 'preview')}>Preview</Button>
                        <Button style={{ marginRight: 12 }} onClick={this.setStatus.bind(this, 'disabled')}>Disabled</Button>
                    </div>
                </FormItem>
            </Form>
        );
    }
}

export default App;