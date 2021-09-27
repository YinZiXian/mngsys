import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import Header from "./header";
import Content from "./content";
import Sider from "./sider";
import Footer from "./footer";
class PageLayout extends Component {
    render() {
        return (
            <div>
                <>
                    <Layout>
                        <Header/>
                        <Layout>
                            <Sider/>
                            <Content/>
                        </Layout>
                        <Footer/>
                    </Layout>
                </>,
                mountNode,
            </div>
        );
    }
}

export default PageLayout;