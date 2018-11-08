import React from 'react';
import Form, { FormItem, FormCore } from 'noform';
import { Input } from 'noform/lib/wrapper/antd';

const Ff = () => {
    const core = new FormCore({
        validateConfig: {
            test: { required: true, message: 'test is required' }
        }
    });
    return <Form core={core}>
        <FormItem label="test" name="test"><Input /></FormItem>
    </Form>
}

export default Ff;