// pages/articles/articles.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      mid: '2247483688',
      sn: '660d802301174bcdaf0c5b76dd801036',
      chksm: 'cf4f2b75f838a2630188773b1dbbe81200873357607ad71d08f681139980a9aa5d13cfecee8f',
      imgUrl: 'https://mmbiz.qpic.cn/sz_mmbiz_png/dTTe8BGRpevbGwFE7RmfrqIGTVvXSmWHC2qwUdJFnRtFzrfr37C2hTV5Q9VHdWBibMVDZLdW4bywV8VDib8FUGTw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1'
    }, {
      id: 1,
      type: 'image',
      mid: '2247483742',
      sn: '0536e578dfe6bc88208d46ee2ca4962f',
      chksm: 'cf4f2b03f838a215427857b8370baa601c440c5d34c2c5da01c6d03f9e269be70ef849bbb740',
      imgUrl: 'https://mmbiz.qpic.cn/sz_mmbiz_png/dTTe8BGRpevbGwFE7RmfrqIGTVvXSmWHibjjZu9wqGH87Q24rdjaR0bRO4jp5ibBQlo35nVXckpqrXmALEuqOeQQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1',
    }, {
      id: 2,
      type: 'image',
      mid: '2247483788',
      sn: 'c45fea4b9cd72ce907fec1a0722d5e9e',
      chksm: 'cf4f2bd1f838a2c713988b718f4fe8f175c62a26236fe5195b180828f9d8070dd82b4d45fbdc',
      imgUrl: 'https://mmbiz.qpic.cn/sz_mmbiz_png/dTTe8BGRpeu8U0zZR3WibdbbQfWBVfDhRDgDNrCJsKLmNIj7BgII0rBbnFFusACa2eFIlVqX87yestQ0LhOficBA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1'
    }, {
      id: 3,
      type: 'image',
      mid: '2247483835',
      sn: 'c86ff8e4a030ca2b1b94eb3444438d3e',
      chksm: 'cf4f2be6f838a2f0cd3cc1f0fdbf36b6d1d7f20cb37eacef56c5a6917e588308ea975814a9c5',
      imgUrl: 'https://mmbiz.qpic.cn/sz_mmbiz_png/dTTe8BGRpeu8U0zZR3WibdbbQfWBVfDhRPkcMEfLyEKUflpxcr4ic7gwzr6ujNXQv0uVglibBOkCJYfroTTqgh5BA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1'
    }],
    
    articleList: [{
      id: 0,
      tag: 'YOLOv5',
      title: 'YOLO v5 实现目标检测',
      author: 'YJY',
      view: 5415,
      star: 101,
      comment: 9,
      createTime: '2022-10-29 15:22:34',
      avatar: 'https://mmbiz.qpic.cn/sz_mmbiz_png/dTTe8BGRpevbGwFE7RmfrqIGTVvXSmWHq4icEPUgbbrdO1X7lhCm9HuIOW0pGC4GqGMglnoOjNUicSXSVjlOaXdw/0?wx_fmt=png',
      mid: '2247483688',
      sn: '660d802301174bcdaf0c5b76dd801036',
      chksm: 'cf4f2b75f838a2630188773b1dbbe81200873357607ad71d08f681139980a9aa5d13cfecee8f',
      imgUrl: 'https://mmbiz.qpic.cn/sz_mmbiz_png/dTTe8BGRpevbGwFE7RmfrqIGTVvXSmWHC2qwUdJFnRtFzrfr37C2hTV5Q9VHdWBibMVDZLdW4bywV8VDib8FUGTw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1'
    }, {
      id: 1,
      tag: 'neo4j ',
      title: 'neo4j 安装详细步骤及案例',
      author: 'YJY',
      view: 633,
      star: 23,
      comment: 3,
      createTime: '2023-03-16 18:04:42',
      avatar: 'https://mmbiz.qpic.cn/sz_mmbiz_png/dTTe8BGRpevbGwFE7RmfrqIGTVvXSmWHq4icEPUgbbrdO1X7lhCm9HuIOW0pGC4GqGMglnoOjNUicSXSVjlOaXdw/0?wx_fmt=png',
      mid: '2247483742',
      sn: '0536e578dfe6bc88208d46ee2ca4962f',
      chksm: 'cf4f2b03f838a215427857b8370baa601c440c5d34c2c5da01c6d03f9e269be70ef849bbb740',
      imgUrl: 'https://mmbiz.qpic.cn/sz_mmbiz_png/dTTe8BGRpevbGwFE7RmfrqIGTVvXSmWHibjjZu9wqGH87Q24rdjaR0bRO4jp5ibBQlo35nVXckpqrXmALEuqOeQQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1',
    }]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
    // 初始化towerSwiper 传已有的数组名即可
    this.towerSwiper('swiperList');
  },

  bindViewTap: function(e) {
    console.log('e',e.currentTarget)
    wx.navigateTo({
      url: `/pages/article/article?mid=${e.currentTarget.dataset.mid}&sn=${e.currentTarget.dataset.sn}&chksm=${e.currentTarget.dataset.chksm}`,
    })
  },

  // cardSwiper
  cardSwiper: function(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper: function(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove: function(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd: function(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})