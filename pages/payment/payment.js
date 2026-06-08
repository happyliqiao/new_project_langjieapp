Page({
  data: {
    bills: [
      { name: '住宅物业费', time: '2026-06', money: '486.00' },
      { name: '车位管理费', time: '2026-06', money: '80.00' }
    ],
    total: '566.00'
  },
  pay() { wx.showToast({ title: '支付演示', icon: 'success' }) }
})
