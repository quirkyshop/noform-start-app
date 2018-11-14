import React, { Component } from 'react';
import Form, { FormItem, FormCore } from 'noform';
import { Input, Select, Checkbox, Radio, Switch, Button, Dialog } from 'nowrapper/lib/antd';
import { message, Alert } from 'antd';
import Ff from './ThirdForm';

const dataSource = [
    { label: 'optA', value: 'optA' },
    { label: 'optB', value: 'optB' },
];

class Example extends Component {
    constructor(props) {
        super(props)
    }
    
    popupDialog = () => {
        const innerForm = <Form core={this.core} layout={{ label: 8, control: 16 }}>
            <FormItem label="input" name="input"><Input /></FormItem>
            <FormItem label="select" name="select"><Select options={dataSource} /></FormItem>
            <FormItem label="Checkbox" name="Checkbox"><Checkbox /></FormItem>
            <FormItem label="Radio" name="Radio"><Radio /></FormItem>
            <FormItem label="Switch" name="Switch"><Switch /></FormItem>
        </Form>

        // mock fetch / Request
        // const mockRequest = () => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //         const isBigger5 = (Math.random() * 10) > 4;
        //             if (isBigger5) {
        //                 resolve('success');
        //             } else {
        //                 reject('reject');
        //             }
        //         }, 500);
        //     });
        // };

        

        Dialog.show({
            title: 'title',
            content: Ff,
            enableValidate: true,
            onOk: (values, hide) => { // 返回promise, 代替原有的preSubmit、responseCb、successCb
                console.log('values', values);
                return new Promise(async (resolve, reject) => {
                    try {
                        resolve();
                        message.success('This is a message of success', 1, hide);
                    } catch (e) {
                        reject();
                        message.error('error', 1);
                    }
                });
            }
        });
    }

    render() {
        return (            
            <div>
                <div className="example-title">Diloag Examples</div>
                <Alert style={{ marginBottom: 12 }} message={<div>
                    <div>submit dialog form has 50/50 chance success or failed</div>
                </div>} type="info" showIcon />
                <Button onClick={this.popupDialog}>Popup Dialog Form</Button>
            </div>
        );
    }
}

export default Example;
