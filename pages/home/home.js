Page({
  data: {
    community: '朗洁云庭',
    weather: '26°C  空气优',
    notices: [
      { title: '6月公共区域消杀计划', desc: '本周三 09:00-11:30，楼栋大堂与地下车库分区进行。' },
      { title: '端午节管家服务安排', desc: '假期期间前台照常值守，紧急报修 30 分钟响应。' }
    ],
    actions: [
      { name: '物业缴费', icon: '费', color: '#1f6f52', url: '/pages/payment/payment' },
      { name: '一键报修', icon: '修', color: '#d4663a', url: '/pages/repair/repair' },
      { name: '访客通行', icon: '访', color: '#385f9d', url: '/pages/visitor/visitor' },
      { name: '业主权益', icon: '惠', color: '#8b5a2b', url: '/pages/rights/rights' },
      { name: '社区公告', icon: '告', color: '#557568', url: '/pages/notice/notice' },
      { name: '到家服务', icon: '家', color: '#2a806d', url: '/pages/services/services' },
      { name: '社区团购', icon: '团', color: '#a64f60', url: '/pages/rights/rights' },
      { name: '联系管家', icon: '管', color: '#5d6e37', url: '/pages/profile/profile' }
    ],
    orders: [
      { title: '厨房水槽下水慢', desc: '维修师傅已接单，预计 16:30 上门', status: '处理中' },
      { title: '6月物业费账单', desc: '住宅物业费、车位管理费待支付', status: '待支付' }
    ]
  },
  go(e) { wx.navigateTo({ url: e.currentTarget.dataset.url }) }
})
