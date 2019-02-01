import React, { Component } from 'react';
import { Button, Dialog } from 'nowrapper/lib/antd';
import { message, Alert } from 'antd';
import LocaleProvider from 'antd/lib/locale-provider';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Ff from './ThirdForm';

class Example extends Component {
    popupDialog = () => {
        Dialog.show({
            title: 'title',
            content: Ff,
            enableValidate: true,
            footerAlign: 'label', // left | center | right
            onOk: (values, hide) => { // 返回promise
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
            <LocaleProvider locale={zhCN}>
                <div>
                    <div className="example-title">Diloag Examples</div>
                    <Alert style={{ marginBottom: 12 }} message={<div>
                        <div>submit dialog form has 50/50 chance success or failed</div>
                    </div>} type="info" showIcon />
                    <Button onClick={this.popupDialog}>Popup Dialog Form</Button>
                </div>
            </LocaleProvider>           
        );
    }
}

export default Example;
