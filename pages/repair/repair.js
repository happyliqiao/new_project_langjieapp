Page({
  data: { types: ['水电维修', '公共区域', '门禁电梯', '投诉建议'], active: 0 },
  pick(e) { this.setData({ active: e.currentTarget.dataset.index }) },
  submit() { wx.showToast({ title: '已提交', icon: 'success' }) }
})
