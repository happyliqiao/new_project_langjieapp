Page({
  data: {
    groups: [
      { title: '物业服务', items: [
        { name: '物业缴费', desc: '账单明细、电子票据', icon: '费', color: '#1f6f52', url: '/pages/payment/payment' },
        { name: '一键报修', desc: '图文提交、进度追踪', icon: '修', color: '#d4663a', url: '/pages/repair/repair' },
        { name: '访客通行', desc: '临时码、车辆预约', icon: '访', color: '#385f9d', url: '/pages/visitor/visitor' }
      ]},
      { title: '社区生活', items: [
        { name: '到家保洁', desc: '深度清洁、家电清洗', icon: '洁', color: '#2a806d', url: '/pages/rights/rights' },
        { name: '社区团购', desc: '生鲜果蔬、次日达', icon: '团', color: '#a64f60', url: '/pages/rights/rights' },
        { name: '权益商城', desc: '消费抵物业费', icon: '惠', color: '#8b5a2b', url: '/pages/rights/rights' }
      ]},
      { title: '社区治理', items: [
        { name: '公告通知', desc: '停水停电、活动公示', icon: '告', color: '#557568', url: '/pages/notice/notice' },
        { name: '意见反馈', desc: '建议投诉、满意度评价', icon: '议', color: '#5d6e37', url: '/pages/repair/repair' },
        { name: '联系管家', desc: '专属客服、电话咨询', icon: '管', color: '#74624f', url: '/pages/profile/profile' }
      ]}
    ]
  },
  go(e) { wx.navigateTo({ url: e.currentTarget.dataset.url }) }
})
