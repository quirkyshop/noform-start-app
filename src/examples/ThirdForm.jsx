import React from 'react';
import Form, { FormItem, FormCore } from 'noform';
import { Input } from 'nowrapper/lib/antd';

const Ff = () => {
    const core = new FormCore({
        validateConfig: {
            test: { required: true, message: 'test is required' }
        },
        values: {
            sort: 0,
        }
    });

    window.ff = core;
    return <Form core={core} layout={{ label: 4, control: 20 }} defaultMinWidth={false} full>
        {/* <FormItem full label="test" name="test"><Input /></FormItem> */}
        <FormItem full label="sort" name="sort"><Input /></FormItem>
    </Form>
}

export default Ff;