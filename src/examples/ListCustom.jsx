import React from 'react';
import List, { Filter, Table, Pagination } from 'nolist/lib/wrapper/antd';
import Form, { FormItem, FormCore } from 'noform';
import { message, Button } from 'antd';
import { Input, DatePicker, Dialog } from 'nowrapper/lib/antd';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class ListCustom extends React.Component {
    handleError = (err) => {}

    onMount = (grid) => {
        window.grid = grid;
    }

    renderOperation = (text, record, idx) => {
        const editForm = (val, index, record) => {
            const core = new FormCore({
              values: record
            });
          
            Dialog.show({
              title: '编辑',
              footerAlign: 'label',
              locale: 'zh',
              style: { width: '480px' },
              enableValidate: true,
              onOk: async (values, hide) => {
                  await sleep(1000);
                  message.success('编辑成功');
                  hide();
              },
              content: <Form layout={{ label: 8, control: 16 }} core={core} >
                  <FormItem name="id" label="id"><Input /></FormItem>
                  <FormItem name="username" label="username"><Input /></FormItem>
                  <FormItem name="age" label="age"><Input /></FormItem>
                  <FormItem name="gender" label="gender"><Input /></FormItem>
                  <FormItem name="country" label="country"><Input /></FormItem>
                  <FormItem name="registeredDate" label="registeredDate"><Input /></FormItem>
              </Form>
            });
        };
        return <Button onClick={editForm}>编辑</Button>
    }

    render() {
        const url = 'https://www.easy-mock.com/mock/5c3881ad4ca7fb6358ce72c9/example/nolist_basic';
        return <div>
            <List url={url} onError={this.handleError} onMount={this.onMount}>
                <Filter noLayout>
                    <Filter.Item label="username" name="username"><Input placeholder="placeholder" /></Filter.Item>
                    <Filter.Item label="age" name="age"><Input /></Filter.Item>
                    <Filter.Item label="date" name="date"><DatePicker placeholder="placeholder"/></Filter.Item>
                    <Filter.Search><Button style={{ marginRight: '8px', verticalAlign: 'top' }} >search</Button></Filter.Search>
                    <Filter.Clear><Button style={{ verticalAlign: 'top' }} >clear</Button></Filter.Clear>
                    
                </Filter>
                <Table>
                    <Table.Column title="id" dataIndex="id" />
                    <Table.Column title="username" dataIndex="username" />
                    <Table.Column title="age" dataIndex="age" />
                    <Table.Column title="gender" dataIndex="gender" />
                    <Table.Column title="country" dataIndex="country" />
                    <Table.Column title="registeredDate" dataIndex="registeredDate" />
                    <Table.Column title="operation" render={this.renderOperation} />
                </Table>
                <Pagination />
            </List>
        </div>
    }
}

export default ListCustom;