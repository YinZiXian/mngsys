import React, {Component} from 'react';
import memoryUtils from "../../utils/memoryUtils";
import {Redirect, Route, Switch} from "react-router-dom";
import {Layout} from "antd";
import LeftNav from '../../components/left-nav'
import Home from "../home";
import InfoConfig from "../infoconfig/iteminfo";
import AccountInfo from "../infoconfig/accountinfo";
import StockIn from "../inventory/stockin";
import StockOut from "../inventory/stockout";
import CountReport from "../inventory/countreport";
import RoleMng from "../staff/rolemng";
import MemberMng from "../staff/membermng";
import About from "../about";
import Header from "../../components/header";

const {Footer, Sider, Content} = Layout;

class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        if (!user) {
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height: '100%'}} className="site-layout-background">
                <Sider style={{backgroundColor: "#cccccc"}} >
                    <LeftNav style={{backgroundColor: "#cccccc"}}/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{backgroundColor: "fff", color: "#1890ff"}}>
                        <Switch>
                            <Route path='/home' component={Home}></Route>

                            <Route path='/inventory/stockin' component={StockIn}></Route>
                            <Route path='/inventory/stockout' component={StockOut}></Route>
                            <Route path='/inventory/countreport' component={CountReport}></Route>

                            <Route path='/infoconfig/iteminfo' component={InfoConfig}></Route>
                            <Route path='/infoconfig/accountinfo' component={AccountInfo}></Route>

                            <Route path='/staff/membermng' component={MemberMng}></Route>
                            <Route path='/staff/rolemng' component={RoleMng}></Route>

                            <Route path='/about' component={About}></Route>

                            <Redirect to='/home'></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: "center", color: "#1890ff", backgroundColor: "white"}}>
                        Copyright &copy; 2021-{new Date().getFullYear()} yinzixian All rights Reserved.
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;