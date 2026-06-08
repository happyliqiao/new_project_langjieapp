Page({
  data: {
    tabs: ['全部', '处理中', '待支付'],
    active: 0,
    orders: [
      { title: '厨房水槽下水慢', desc: '2026-06-08 15:20 提交 · 管家已派单', status: '处理中' },
      { title: '6月物业费账单', desc: '住宅物业费 486.00 元 · 车位管理费 80.00 元', status: '待支付' },
      { title: '访客通行码', desc: '张女士 · 今日 18:00-22:00 有效', status: '已生效' },
      { title: '楼道灯闪烁', desc: '2026-06-03 完成维修 · 已评价', status: '已完成' }
    ]
  },
  setTab(e) { this.setData({ active: e.currentTarget.dataset.index }) }
})
