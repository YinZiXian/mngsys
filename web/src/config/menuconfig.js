const menuList = [
    {
        title: '首页',
        key: '/home',
        icon: 'HomeOutlined'
    },
    {
        title: '库存管理',
        key: '/inventory',
        icon: 'DiffOutlined',
        children: [
            {
                title: '入库',
                key: '/inventory/stockin',
                icon: ''
            },
            {
                title: '出库',
                key: '/inventory/stockout',
                icon: ''
            },
            {
                title: '统计报表',
                key: '/inventory/countreport',
                icon: ''
            },
        ]
    },
    {
        title: '信息配置',
        key: '/infoconfig',
        icon: 'AppstoreOutlined',
        children: [
            {
                title: '商品信息',
                key: '/infoconfig/iteminfo',
                icon: ''
            },
            {
                title: '账户信息',
                key: '/infoconfig/accountinfo',
                icon: ''
            },
        ]
    },
    {
        title: '人员配置',
        key: '/staff',
        icon: 'AppstoreOutlined',
        children: [
            {
                title: '成员管理',
                key: '/staff/membermng',
                icon: ''
            },
            {
                title: '权限管理',
                key: '/staff/rolemng',
                icon: ''
            },
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: 'MoreOutlined'
    },
]

export default menuList