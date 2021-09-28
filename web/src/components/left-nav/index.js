import React, {Component} from 'react';
import './index.less'
import {Link, withRouter} from 'react-router-dom'
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import menuList from '../../config/menuconfig';

const { SubMenu } = Menu;

class LeftNav extends Component {

    getMenuNodes = (menuList) => {
      const path = this.props.location.pathname;
      return menuList.reduce((pre, item) => {
          const icon = item.icon ? React.createElement(
              Icon[item.icon],
              {
                  style:{ fontSize: '16px'}
              }
          ) : ''
          if (!item.children) {
              pre.push((
                  <Menu.Item key={item.key} icon={icon} >
                      <Link to={item.key}>{item.title}</Link>
                  </Menu.Item>
              ))
          } else {
              const cItem = item.children.find(e => e.key === path);
              if (cItem) {
                  this.openKey = item.key;
              }
              pre.push((
                  <SubMenu key={item.key} title={item.title}
                           icon={icon}>
                      {this.getMenuNodes(item.children)}
                  </SubMenu>
              ))
          }
          return pre;
      }, [])
    };
    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList);
    }
    render() {
        const path = this.props.location.pathname;
        console.log(path);
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <h1>库存管理系统</h1>
                </Link>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[path]}
                    openKeys={[this.openKey]}
                    mode="inline"
                >
                    {this.menuNodes}
                </Menu>
            </div>
        );
    }
}

export default withRouter(LeftNav);