export var colors = [
  '#F7C998',
  '#A8BBFF',
  '#26B0F4',
  '#00FCFF',
  '#379AF5',
  '#79F7D2',
  '#A8BBFF',
  '#26B0F4',
  '#00FCFF',
  '#379AF5',
  '#79F7D2',
  '#A8BBFF',
  '#26B0F4',
  '#00FCFF',
  '#379AF5',
  '#79F7D2',
  '#A8BBFF',
  '#26B0F4',
  '#00FCFF',
  '#379AF5'
]
// 悬停出现延迟时间
export var delayTooltip = 300

// 品牌悬停显示内容
export var menucode = {
  '指定品牌销售额（或订单量）占所属品类销售额（或订单量）的比例（%）': '15db904c11fcdd08eaa1100c1f65af0a', // 销售额/订单量比例
  '指定品牌（所有购药者/会员购药者）单月平均每家门店的订单量（单）': '3c539acfda98e8047f6664a1d6498b22', // 订单量（单月店均）
  '指定品牌（所有购药者/会员购药者）单月平均每家门店的销售额（元）': '96fa21d9a5e4a193c282c52bc969befa', // 销售额（单月店均）
  '指定品牌（所有购药者/会员购药者）单日某时段的平均销售额（元）或平均订单量（单）': '623d12f4b79ecba1acd3fbb5256fdca9', // 单日时段销售分布
  '指定品牌当月有动销门店数/指定品牌铺货门店数（当前月往前3个月动销门店数）': '6b0dd612bfc96692bc2dadda6ba5d90d', // 动销率
  '指定品牌铺货门店数（当前月往前3个月动销门店数）/总体门店数（当前月往前3个月样本总门店数）': '56038b613c608277491d4fb2e74cc571', // 铺货率
  '指定品牌每笔订单平均每个单品的进货（成本）价格（元）': 'b7d532e40867e22327ac9d6a6954fa85', // 进货均价
  '指定品牌每笔订单平均每个单品的销售价格（元）': 'dde005f772cbef7bc1589be11b793f02', // 销售均价
  '指定品牌的单品前台毛利率（%）': '887781b4797a81f6e63917c3e16e09ba', // 毛利率
  '指定品牌会员购买者的性别、年龄的占比（%）分布': '499cb62d7c9dfa1518026c40222e80a2', // 结构画像
  '会员购药者指定品牌的每张订单内关联购买的品类、通用名及品牌，及形成关联购买的订单占品牌总订单的比例': 'a335ca337f4e4fb8b88300b4f2614d5d', // 关联购买
  '指定品牌流出人次top10的竞品，或流入指定品牌人次top10的竞品品牌情况': 'a0292a087b8e91748cc67d69aa57c86d', // 品牌流动
  '每笔指定品牌订单的平均购买药品件数': '13580d78bb656f7eb5e920f9c920345e', // 消费数量
  '指定品牌购买会员数占所属品类购药会员数比例（%）': 'ba64c7b06e00c72df74a600af609f653', // 品牌渗透率
  '指定品牌会员平均时段（年度/季度/月度）的购买次数': '9c97ab8014ac516f7dd121ed68c14aee', // 消费频率
  '每笔指定品牌订单的消费金额（元）': '222fb0b333ebbfc0631110af3f324c9d', // 消费客单
  '每笔指定品牌订单平均每个单品的销售价格（元）': '2697730ab233160ea7ebc92169c694ff', // 药品均价
  '指定品牌季度购买两次及以上的会员占指定品牌总体会员的比例，并与其所属品类的平均复购率对比、形成复购指数': 'b31958e52f258dca142e95c792080fde', // 复购指数
  '指定品牌新老用户的比例分布（%）': 'f4b4154ad40ca2e0575fe8b3233286ad', // 新老用户
}

// 品类悬停显示内容
export var menucodeCategory = {
  '指定品类（所有购药者或会员购药者）单月平均每家门店的销售额（元）': 'f459572132ad68be9aa8940e15998001', // 销售额（单月店均）
  '指定品类销售额（或订单量）占全品类销售额（或订单量）的比例（%）': '4ffc7481ed7930bed4b2476f3675cd58', // 销售额/订单量比例
  '指定品类（所有购药者或会员购药者）单月平均每家门店订单量（单）': '9d4897632e17f8a763ab4ccd81bcd639', // 订单量（单月店均）
  '指定品类（所有购药者/会员购药者）单日某时段的平均销售额（元）或平均订单量（单）': '808613097e107069a196d4f086b1e05c', // 单日时段销售分布
  '指定品类每笔订单、平均每个单品的销售价格（元）': 'e0d7da69850f7d76d6799dd25f8b8f8b', // 销售均价
  '指定品类每笔订单、平均每个单品的进货（成本）价格（元）': '25fa457d7ca8c0741d6ac26c2ce938cb', // 进货均价
  '指定品类的单品前台毛利率（%）': 'b4b80d5eed386a1e67bc3c5263feaf5c', // 毛利率
  '指定品类会员购买者的性别、年龄的占比（%）分布': 'abff5f9b63e209a58b816602865d7d34', // 结构画像
  '每笔指定品类订单的平均购买药品件数': '17d6396e4601f1e43399eea6be61d153', // 消费数量
  '每笔指定品类订单的平均购买品牌数，反应购药者在每笔指定品类订单中平均会购买几个品牌': '91afdfd333fcf3f43675d00cc041c2b8', // 药品种数
  '每笔指定品类订单每个品牌的平均购买件数': '32106914d6bc40949d659098f683a344', // 单种件数
  '指定品类季度购买两次及以上的会员占指定品类总体会员的比例，并与全品类复购率对比、形成复购指数': '2f88b79c7fa58c46ae02174e0c8291ce', // 复购指数
  '指定品类会员平均时段（年度/季度/月度）的购买次数': '7173092b6dabd71bde2cdb0cbce79010', // 消费频率
  '每笔指定品类订单的消费金额（元）': '03cd6c1dde2ffb7ac9137d5b0872dd2b', // 消费客单
  '每笔指定品类订单平均每个单品的销售价格（元）': '37a61cb066bb0e38b1bb175a32d266a4', // 药品均价
  '会员购药者偏好消费的药品品类、通用名及品牌': '5823753a7657c7db5829c07ec1966ec1', // 购药偏好
  '指定品类购买会员数占全品类购药会员数的比例（%）': 'd3087369fc2a517b76692dad98d8aa66', // 品类渗透率
  '会员购药者指定品类的每张订单内关联购买的品类、通用名及品牌，及形成关联购买的订单占品类总订单的比例': 'da6a0dd828fc561c2bc98d0efb80608a', // 关联购买
  '指定品类、流转人次TOP5的品牌，其流出至竞品及竞品流向它的情况': '5702fca062875cc5599151b0b7a4deb0', // 品牌流动
  '指定品类新老用户的比例（%）': 'da3d18226d04307aedd87f8216735af3'
}
// 品类品牌驾驶舱（menuCode） carBraCat[SinglePieceNumber]
export var carBraCat = {
  'SalesAndOrders': '4ffc7481ed7930bed4b2476f3675cd58',
  'Sales': 'f459572132ad68be9aa8940e15998001',
  'structuralPortrait': 'abff5f9b63e209a58b816602865d7d34',
  'Orders': '9d4897632e17f8a763ab4ccd81bcd639',
  'Permeability': 'd3087369fc2a517b76692dad98d8aa66',
  'Gross': 'b4b80d5eed386a1e67bc3c5263feaf5c',
  'DrugPreference': '5823753a7657c7db5829c07ec1966ec1',
  'ConsumerBill': '03cd6c1dde2ffb7ac9137d5b0872dd2b',
  'AverageDrugPrice': '37a61cb066bb0e38b1bb175a32d266a4',
  'Consumption': '17d6396e4601f1e43399eea6be61d153',
  'NumberMedicines': '91afdfd333fcf3f43675d00cc041c2b8',
  'SinglePieceNumber': '32106914d6bc40949d659098f683a344',
  'BrandSalesAndOrders':'15db904c11fcdd08eaa1100c1f65af0a',
  'BrandSales':'96fa21d9a5e4a193c282c52bc969befa',
  'brandstructuralPortrait':'499cb62d7c9dfa1518026c40222e80a2',
  'BrandOrders':'3c539acfda98e8047f6664a1d6498b22',
  'BrandPermeability':'ba64c7b06e00c72df74a600af609f653',
  'BrandGross':'887781b4797a81f6e63917c3e16e09ba',
  'BrandSalesRate':'6b0dd612bfc96692bc2dadda6ba5d90d',
  'BrandGoodsRate':'56038b613c608277491d4fb2e74cc571',
  'BrandConsumerBill':'222fb0b333ebbfc0631110af3f324c9d',
  'BrandAverageDrugPrice':'2697730ab233160ea7ebc92169c694ff',
  'BrandConsumption':'13580d78bb656f7eb5e920f9c920345e',
  'User': 'da3d18226d04307aedd87f8216735af3',
  'BrandNewOldUser': 'f4b4154ad40ca2e0575fe8b3233286ad'
}
// 品类驾驶舱悬停提示 （订单量占比  写固定了）
export var carBraCatTit = {
  '指定品类单月平均每家门店的销售额（元）': 'f459572132ad68be9aa8940e15998001',
  '指定品类销售额占全品类销售额的比例（%）': '4ffc7481ed7930bed4b2476f3675cd58',
  '指定品类新老用户的比例（%）': 'abff5f9b63e209a58b816602865d7d34',
  '指定品类单月平均每家门店的订单量（单）': '9d4897632e17f8a763ab4ccd81bcd639',
  '指定品类购买会员数占全品类购药会员数的人数比例（%）': 'd3087369fc2a517b76692dad98d8aa66',
  '指定品类的每件单品的前台毛利率（%）均值': 'b4b80d5eed386a1e67bc3c5263feaf5c',
  // '指定品牌销售额占所属品类销售额的比例（%）': '5823753a7657c7db5829c07ec1966ec1',
  '每笔指定品类订单的消费金额（元）': '03cd6c1dde2ffb7ac9137d5b0872dd2b',
  '每笔指定品类订单平均每个单品的销售价格（元）': '37a61cb066bb0e38b1bb175a32d266a4',
  '每笔指定品类订单平均购买药品件数': '17d6396e4601f1e43399eea6be61d153',
  '每笔指定品类订单平均购买品牌数': '91afdfd333fcf3f43675d00cc041c2b8',
  '每笔指定品类订单每个品牌的平均购买件数': '32106914d6bc40949d659098f683a344',
}
// 品牌驾驶舱悬停提示（销售额占比、会员销售额占比  写固定了）
export var carBraCatTitBrand = {
  '指定品牌订单量占所属品类订单量的比例（%）':'15db904c11fcdd08eaa1100c1f65af0a',
  '指定品牌单月平均每家门店销售额（元）':'96fa21d9a5e4a193c282c52bc969befa',
  '指定品牌新老用户的比例分布（%）':'499cb62d7c9dfa1518026c40222e80a2',
  '指定品牌单月平均每家门店订单量（单）':'3c539acfda98e8047f6664a1d6498b22',
  '指定品牌购买会员数占所属品类购药会员数比例（%）':'ba64c7b06e00c72df74a600af609f653',
  '指定品牌的单品前台毛利率（%）':'887781b4797a81f6e63917c3e16e09ba',
  '指定品牌当月有动销门店数/指定品牌铺货门店数（当前月往前3个月动销门店数）':'6b0dd612bfc96692bc2dadda6ba5d90d',
  '指定品牌铺货门店数（当前月往前3个月动销门店数）/总体门店数（当前月往前3个月样本总门店数）':'56038b613c608277491d4fb2e74cc571',
  '每笔指定品牌订单的消费金额（元）':'4ffc7481ed7930bed4b2476f3675cd58',
  '每笔指定品牌订单平均每个单品的销售价格（元）':'2697730ab233160ea7ebc92169c694ff',
  '每笔指定品牌订单平均购买药品件数':'13580d78bb656f7eb5e920f9c920345e'
}
export var ops = {
  vuescroll: {
    mode: 'native',
    sizeStrategy: 'number',
    detectResize: true
  },
  scrollPanel: {
    initialScrollY: false,
    initialScrollX: false,
    scrollingX: false,
    scrollingY: true,
    speed: 300,
    easing: undefined,
    verticalNativeBarPos: 'right',
    maxHeight: undefined,
    maxWidth: undefined,
  },
  rail: {
    background: 'rgba(255,255,255,0.15)',
    opacity: 0,
    size: '6px',
    specifyBorderRadius: false,
    gutterOfEnds: null,
    gutterOfSide: '2px',
    keepShow: false
  },
  bar: {
    showDelay: 500,
    onlyShowBarOnScroll: true,
    keepShow: false,
    background: 'rgba(0,255,255,0.75)',
    opacity: 1,
    hoverStyle: false,
    specifyBorderRadius: false,
    minSize: false,
    size: '6px',
    disable: false,
  }
}

// 图表配置
export var chartOptions = {
  barWidth: document.body.clientWidth > 1360 ? 30 : 20,
  legendWidth: document.body.clientWidth > 1360 ? 25 : 15,
  legendHeight: document.body.clientWidth > 1360 ? 14 : 10,
  progressHeight: document.body.clientWidth > 1360 ? 10 : 7,
  prenceTitleSize: document.body.clientWidth > 1670 ? 12 : 9,
  smallChartSize: document.body.clientWidth > 1670 ? 12 : 9,
  fontSort: document.body.clientWidth > 1500 ? 50 : 40,
}
