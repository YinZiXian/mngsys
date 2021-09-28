import React, {Component} from 'react';
import './login.less'
import {Form, Input, Button, message,} from 'antd';
import Icon from "@ant-design/icons/es";
import ajax, {baseUrl} from "../../api/ajax";
import memoryUtils from "../../utils/memoryUtils";
import storageUtil from "../../utils/storageUtil";
import { Redirect } from "react-router-dom";

class Login extends Component {
    LoginForm = () => {
        const onFinish = async (values) => {
            const response = await ajax(baseUrl + '/login', values);
            console.log(this)
            if (response.status == 200) {
                const user = response.data;
                memoryUtils.user = user;
                storageUtil.set('user', user);
                this.props.history.replace('/')
            } else {
                message.error(response.data)
            }
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        const user = memoryUtils.user
        if (user) {
            return <Redirect to='/'/>
        }
        return (
            <Form className="login-form" onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off" >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                    ]} >
                    <Input
                        prefix={<Icon type = "user" style={{color: "#1890ff"}} />}
                        placeholder="用户名"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                    ]} >
                    <Input
                        prefix={<Icon type = "lock" style={{color: "#1890ff"}} />}
                        placeholder="密码"
                        type="password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit"
                            className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    };
    render() {
        return (
            <div className="login">
                <header className='login-header'>
                    <h1>库存管理系统</h1>
                </header>
                <div className='login-content'>
                    <h2>用户登录</h2>
                    <this.LoginForm/>
                </div>
            </div>
        );
    }

}


export default Login;