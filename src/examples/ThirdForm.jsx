import React from 'react';
import Form, { FormItem, FormCore } from 'noform';
import { Input } from 'nowrapper/lib/antd';

class ThirdForm extends React.Component {
    constructor(props) {
        super(props);
        this.core = new FormCore({
            validateConfig: {
                test: { required: true, message: 'test is required' }
            },
            values: {
                sort: 0,
            }
        });
        window.ff = this.core;
    }

    render() {
        return <Form core={this.core} layout={{ label: 4, control: 20 }} defaultMinWidth={false} full>
            {/* <FormItem full label="test" name="test"><Input /></FormItem> */}
            <FormItem full label="sort" name="sort"><Input /></FormItem>
        </Form>
    }
}

const Ff = (args) => {
    return <ThirdForm />
}

export default Ff;