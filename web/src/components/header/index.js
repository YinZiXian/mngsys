import React, {Component} from 'react';
import './index.less'
import storageUtils from "../../utils/storageUtil";
import memoryUtils from "../../utils/memoryUtils";
import LinkButton from "../link-button";
import {Modal} from "antd";
import {withRouter} from 'react-router-dom'
import {ImportOutlined} from '@ant-design/icons';

class Header extends Component {

    logout = () => {
        // 显示确认框
        Modal.confirm({
            content: '确定退出登录吗?',
            onOk: () => {
                // 删除保存的user数据
                storageUtils.remove('user');
                memoryUtils.user = {};

                // 跳转到login
                this.props.history.replace('/login');
                window.location.reload(true);
            }
        })
    }
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    <LinkButton onClick={this.logout}>退出登录 <ImportOutlined /></LinkButton>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);