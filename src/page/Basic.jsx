import React, { Component } from 'react';
import { Checkbox } from 'antd';
import Core from '../examples/Core';
import Status from '../examples/Status';
import Condition from '../examples/Condition';
import Validation from '../examples/Validation';
import Antd from '../examples/Antd';
import Dialog from '../examples/Dialog';

import { Select, Button } from 'noform/lib/wrapper/antd';
import Form, { FormItem, FormCore } from 'noform';

const CheckboxGroup = Checkbox.Group;

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.examplesMap = {
            Core,
            Status,
            Condition,
            Validation,
            Antd,
            Dialog,
        };

        this.examplesOptions = Object.keys(this.examplesMap).map(exampleKey => ({ label: exampleKey, value: this.examplesMap[exampleKey] }));

        this.state = {
            examples: Object.keys(this.examplesMap),
            list: [],
        };
    }

    renderExamples = () => {
        // const examples = [Core, Status, Condition, Validation, Antd, Dialog];
        const { examples } = this.state;
        const eles = examples.map((exampleKey) => {
            const ele = React.createElement(this.examplesMap[exampleKey]);
            return (<div className="example-item-wrapper">
                {ele}
            </div>);
        });
        return eles;
    }

    handleExampleChange = (examples) => {
        this.setState({ examples });
    }

    renderSelector = () => {
        const selector = (<span className="example-selector">
            <CheckboxGroup value={this.state.examples} onChange={this.handleExampleChange}>{this.examplesOptions.map(({ label }) => <Checkbox value={label}>{label}</Checkbox>)}</CheckboxGroup>
        </span>);

        return (<div className="example-selector-wrapper">
            <span>Examples: </span>
            {selector}
        </div>);
    }

    setSelect = () => {
        this.setState({
            list: [
                { label: '测试1', value: 'test1'},
                { label: '测试2', value: 'test2'}
            ]
        })
    }

    render() {
        return (
            <div>
                {this.renderSelector()}
                <Form>
                    <Button onClick={this.setSelect}>设置</Button>
                    <FormItem label="测试select" name="selectTest">
                        <Select>
                            {this.state.list.map(item => (
                                <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                            ))}
                        </Select>
                    </FormItem>
                </Form>

                <div className="app-wrapper" >
                    {this.renderExamples()}
                </div>
            </div>
        );
    }
}

export default App;
