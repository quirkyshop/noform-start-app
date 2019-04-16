import React, { Component } from 'react';
import Form, { FormItem, FormCore } from 'noform';
import { Input } from 'nowrapper/lib/antd';
import { InlineRepeater } from 'nowrapper/lib/antd/repeater';

class Example extends Component {
    constructor(props, context) {
        super(props, context);
        this.core = new FormCore({
            values: {
                inlineRepeater: [
                    { s1: 's1', s2: 's2', s3: 's3' },
                    { s1: 's1...', s2: 's2...', s3: 's3...' }
                ],
            },
        });
    }

    render() {
        return (<Form core={this.core} layout={{ label: 6, control: 18 }} defaultMinWidth={false}>
            <div className="example-title">Repeater Status Examples</div>
            <FormItem label="dynamic repeater" name="inlineRepeater">
                <InlineRepeater multiple>
                    <FormItem label="s1" name="s1" status="preview">
                        <Input />
                    </FormItem>
                    <FormItem label="s2" name="s2" status="disabled">
                        <Input />
                    </FormItem>
                    <FormItem label="s3" name="s3" status={(values, core) => {
                        return 'preview'
                    }}>
                        <Input />
                    </FormItem>
                </InlineRepeater>
            </FormItem>
        </Form>);
    }
}

export default Example;
