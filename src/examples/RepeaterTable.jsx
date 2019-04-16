import React, { Component } from 'react';
import Form, { FormItem, FormCore } from 'noform';
import { Table } from 'antd';
import { Input, Select, Button } from 'nowrapper/lib/antd';
import { TableRepeater, ActionButton } from 'nowrapper/lib/antd/repeater';

class Example extends Component {
    constructor(props, context) {
        super(props, context);
        this.core = new FormCore({
            values: {
                tableDemo: [
                    { username: 'amy', gender: 'female' },
                    { username: 'bobby', gender: 'male' },
                ],
            },
        });

        this.formConfig = {
            validateConfig: {
                username: { type: 'string', required: true },
            },
            autoValidate: true,
        };
    }

    renderView = (_, ctx) => {
        const dataSource = ctx.getDataSource();
        const coreList = ctx.getCoreList();

        return <Table dataSource={dataSource}>
            <Table.Column title="username" dataIndex="username"/>
            <Table.Column title="gender" dataIndex="gender" render={(value, record) => {
                return value === 'female' ? <span role="img" aria-label="female">👧</span> : <span role="img" aria-label="male">👦</span>;
            }}/>
            <Table.Column title="Operate" render={(value, record, index) => {
                return <div>
                    <ActionButton core={coreList[index]} type="update"><Button size="small">Edit</Button></ActionButton>
                    <ActionButton core={coreList[index]} type="delete"><Button size="small">Remove</Button></ActionButton>
                </div>;
            }}/>
        </Table>
    }

    render() {
        return (<Form core={this.core} layout={{ label: 6, control: 18 }} defaultMinWidth={false}>
            <div className="example-title">Repeater + Table Examples</div>
            <FormItem label="users" name="tableDemo">
                <TableRepeater view={this.renderView}>
                    <FormItem label="username" name="username">
                        <Input />
                    </FormItem>
                    <FormItem label="gender" name="gender">
                        <Select options={[{ label: 'male', value: 'male' }, { label: 'female', value: 'female' }]} />
                    </FormItem>                    
                </TableRepeater>
            </FormItem>
        </Form>);
    }
}

export default Example;
