export const menus = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {title: '首页', icon: 'HomeOutlined'},
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('@/views/business/index.vue'),
    meta: {title: '商机', icon: 'SecurityScanOutlined'}
  },
  {
    path: '/consumer',
    name: 'consumer',
    component: () => import('@/views/consumer/index.vue'),
    meta: {title: '客户', icon: 'TeamOutlined'}
  },
  {
    path: '/contract',
    name: 'contract',
    component: () => import('@/views/contract/index.vue'),
    meta: {title: '合同', icon: 'FileTextOutlined'}
  },
  {
    path: '/execute',
    name: 'execute',
    component: () => import('@/views/execute/index.vue'),
    meta: {title: '执行', icon: 'SendOutlined'}
  },
  {
    path: '/settlement',
    name: 'settlement',
    component: () => import('@/views/settlement/index.vue'),
    meta: {title: '结算', icon: 'MoneyCollectOutlined'}
  }
]