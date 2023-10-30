// Vue.config.devtools = true;
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//express实现跨域
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});



router.get('/api/goods/id', function(req, res, next) {
		let id = req.query.id;
		connection.query("select * from goods_search where id="+id+"", function (error, results, fields) {
		if (error) throw error;
		res.send({
		  code:"0",
		  data:results
		})
	});
});


//电器第一次触底
router.get('/api/index_list/2/data/2', function(req, res, next) {
  res.json({
  	  code:"0",
  	  data:[
  		  {
  			  type:"commodityList",
  			  data:[
  				  {
  				  	id:1,
  				  	imgUrl:"../../static/img/2shaver1.jpg",
  				  	name:"飞科（FLYCO）电动剃须刀 男士刮胡须刀须刨 全身水洗快充90天超长续航FS903 【全身防水/超长续航】",
  				  	pprice:"139",
  				  	oprice:"169",
  				  	discount:"5.2"
  				  },
  				  {
  				  	id:2,
  				  	imgUrl:"../../static/img/2dry2.jpg",
  				  	name:"戴森（DYSON）新一代吹风机 电吹风 负离子 家用 HD15紫红色吹风机梳子套装",
  				  	pprice:"2429",
  				  	oprice:"2599",
  				  	discount:"5.2"
  				  },
  				  {
  				  	id:3,
  				  	imgUrl:"../../static/img/2mop3.jpg",
  				  	name:"美的（Midea）GX5洗地机无线家用洗拖吸一体机自清洁无尘感洗地机实时电解水滚刷防缠绕",
  				  	pprice:"1699",
  				  	oprice:"1999",
  				  	discount:"5.2"
  				  },
  				  {
  				  	id:4,
  				  	imgUrl:"../../static/img/2fun4.jpg",
  				  	name:"格力（GREE） 家用客厅低燥轻音省电七叶大风量落地扇 节能摇头立式办公宿舍床头空气循环扇电风扇 FD-35X65h7（黑色升级加大款）",
  				  	pprice:"129",
  				  	oprice:"169",
  				  	discount:"5.2"
  				  }
  			  ]
  		  }
  	  ]
  })
});
//电器第二次触底
router.get('/api/index_list/2/data/3', function(req, res, next) {
  res.json({
	  code:"0",
	  data:[
		  {
			  type:"commodityList",
			  data:[
				  {
				  	id:1,
				  	imgUrl:"../../static/img/2shaver1.jpg",
				  	name:"飞科（FLYCO）电动剃须刀 男士刮胡须刀须刨 全身水洗快充90天超长续航FS903 【全身防水/超长续航】",
				  	pprice:"139",
				  	oprice:"169",
				  	discount:"5.2"
				  },
				  {
				  	id:2,
				  	imgUrl:"../../static/img/2dry2.jpg",
				  	name:"戴森（DYSON）新一代吹风机 电吹风 负离子 家用 HD15紫红色吹风机梳子套装",
				  	pprice:"2429",
				  	oprice:"2599",
				  	discount:"5.2"
				  },
				  {
				  	id:3,
				  	imgUrl:"../../static/img/2mop3.jpg",
				  	name:"美的（Midea）GX5洗地机无线家用洗拖吸一体机自清洁无尘感洗地机实时电解水滚刷防缠绕",
				  	pprice:"1699",
				  	oprice:"1999",
				  	discount:"5.2"
				  },
				  {
				  	id:4,
				  	imgUrl:"../../static/img/2fun4.jpg",
				  	name:"格力（GREE） 家用客厅低燥轻音省电七叶大风量落地扇 节能摇头立式办公宿舍床头空气循环扇电风扇 FD-35X65h7（黑色升级加大款）",
				  	pprice:"129",
				  	oprice:"169",
				  	discount:"5.2"
				  }
			  ]
		  }
	  ]
  })
});
//首页第一次触底
router.get('/api/index_list/1/data/2', function(req, res, next) {
	res.json({
		code:'0',
		data:[
			{
				type:"commodityList",
				data:[
					{
						id:1,
						imgUrl:"../../static/img/commodity1-jiucai.jpg",
						name:"韭菜",
						pprice:"3.5",
						oprice:"6.5",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/img/commodity2-juanxincai.jpg",
						name:"秋葵",
						pprice:"6.9",
						oprice:"8.9",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/img/commodity3-ou.jpg",
						name:"卷心菜",
						pprice:"4.9",
						oprice:"6.9",
						discount:"5.2"
					},
					{
						id:4,
						imgUrl:"../../static/img/commodity4-qiukui.jpg",
						name:"藕",
						pprice:"4.9",
						oprice:"6.9",
						discount:"5.2"
					}
				]
				
			}
		]
	})
});

//电器第一次加载
router.get('/api/index_list/2/data/1', function(req, res, next) {
  res.json({
	  code:"0",
	  data:[
		 {
		 	type:"swiperList",
		 	data:[
		 		{imgUrl:'../../static/img/2swiper1.png'},
		 		{imgUrl:'../../static/img/2swiper2.png'},
		 		{imgUrl:'../../static/img/2swiper3.png'}
		 	]
		 },
		 {
			 type:"iconsList",
			 data:[
				 {imgUrl:"../../static/img/air.png",name:"空调类"},
				 {imgUrl:"../../static/img/tv.png",name:"电视类"},
				 {imgUrl:"../../static/img/ice.png",name:"冰洗类"},
				 {imgUrl:"../../static/img/kitchen.png",name:"厨卫类"},
				 {imgUrl:"../../static/img/little.png",name:"小家电类"},
				 {imgUrl:"../../static/img/bigapp.png",name:"品牌大家电"},
				 {imgUrl:"../../static/img/smallapp.png",name:"品牌小家电"},
				 {imgUrl:"../../static/img/purchase.png",name:"企业购"},
			 ]
		 },
		 {
			type:"hotList",
			 data:[
				 {
				 	id:1,
				 	imgUrl:"../../static/img/2hot1.jpg",
				 	name:"海尔（Haier）535升箱双开门对开门 一级能效双变频 风冷无霜 节能省电净味 超薄大容量 家用电冰箱 家电 535升星辉系列BCD-535WGHSSEDS9",
				 	pprice:"2789",
				 	oprice:"2999",
				 	discount:"5.2"
				 },
				 {
				 	id:2,
				 	imgUrl:"../../static/img/2hot2.jpg",
				 	name:"海尔10公斤滚筒洗衣机全自动大容量家用筒自洁一级变频洗衣机 10公斤+香熏洗护+中途添衣+双喷淋MATE2S",
				 	pprice:"1799",
				 	oprice:"1999",
				 	discount:"5.2"
				 },
				 {
				 	id:3,
				 	imgUrl:"../../static/img/2hot3.jpg",
				 	name:"的嵌入式洗碗机14套大容量 洗碗消毒一体 RX600pro RX600pro",
				 	pprice:"4298",
				 	oprice:"4999",
				 	discount:"5.2"
				 },
				 {
				 	id:4,
				 	imgUrl:"../../static/img/2hot4.jpg",
				 	name:"美菱（MELING）油烟机家用顶侧双吸26立方大吸力爆炒厨房抽油烟机 语音智控免拆自清洗挥手体感吸烟 [套装]FX73油烟机+5.0kW燃气灶/液化气",
				 	pprice:"1598",
				 	oprice:"1999",
				 	discount:"5.2"
				 },
				 {
				 	id:5,
				 	imgUrl:"../../static/img/2hot5.jpg",
				 	name:"小米免洗扫地机器人2 扫洗拖一体机擦地机拖地机器人洗拖一体 全自动清洗拖布",
				 	pprice:"2499",
				 	oprice:"2999",
				 	discount:"5.2"
				 },
				 {
				 	id:6,
				 	imgUrl:"../../static/img/2hot6.jpg",
				 	name:"TCL 电视机65V8E 65英寸 4K超清  5G智能语音运动防抖超薄液晶LED平板投屏",
				 	pprice:"2589",
				 	oprice:"2999",
				 	discount:"5.2"
				 },
				 {
				 	id:7,
				 	imgUrl:"../../static/img/2hot7.jpg",
				 	name:"美的（Midea）纤V系列 IH智能电饭煲Pro电饭锅家用5L大容量一级能效预约精铁釜蒸米",
				 	pprice:"439",
				 	oprice:"499",
				 	discount:"5.2"
				 },
				 {
				 	id:8,
				 	imgUrl:"../../static/img/2hot8.jpg",
				 	name:"万和（Vanward）60升电热水器一级能效家用储水式智能断电2000W速热高温杀菌洗澡E60-Q2WY10",
				 	pprice:"699",
				 	oprice:"799",
				 	discount:"5.2"
				 },
				 {
				 	id:9,
				 	imgUrl:"../../static/img/2hot9.jpg",
				 	name:"飞科（FLYCO）电吹风机大功率负离子恒温护发家用冷热大风量快速干发吹风筒FH6290 1800W",
				 	pprice:"73",
				 	oprice:"89",
				 	discount:"5.2"
				 },
			 ]
		 },
		 {
			type:"shopList",
			data:[
				{
					bigUrl:"../../static/img/2shop.jpg",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/2shop1.jpg",
							name:"美的（Midea）冰箱516升法式四门超薄净味除菌一级能效保鲜家用电冰箱BCD-516WFGPZM沁玉蓝-秘境",
							pprice:"6799",
							oprice:"6999",
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/2shop2.jpg",
							name:"美的（Midea）冰箱435升十字四门智能净化除菌纯平全嵌保鲜智能家用电冰箱BCD-435WUSGPZM凝光白",
							pprice:"7499",
							oprice:"7999",
							discount:"5.2"
						},
						{
							id:3,
							imgUrl:"../../static/img/2shop3.jpg",
							name:"美的（Midea）智能电饭煲电饭锅家用4L可拆蒸汽阀24H预约蒸煮米饭锅FB40simple111（3-8人）",
							pprice:"189",
							oprice:"199",
							discount:"5.2"
						},
						{
							id:4,
							imgUrl:"../../static/img/2shop4.jpg",
							name:"美的（Midea）豆浆机1.35L大容量全自动清洗免煮免过滤多功能智能预约破壁料理机榨汁机DJ13B-DG01",
							pprice:"299",
							oprice:"399",
							discount:"5.2"
						},
						{
							id:5,
							imgUrl:"../../static/img/2shop5.jpg",
							name:"适配美的MD-JYC4002煎药熬药中药壶药罐大容量4L升壶身盖子配件 4L壶身【JYC4002】",
							pprice:"109",
							oprice:"129",
							discount:"5.2"
						},
						{
							id:6,
							imgUrl:"../../static/img/2shop6.jpg",
							name:"美的（Midea）【六重净化】空气净化器高效分解甲醛除烟味异味99.99%病菌去除率卧室专用空气消毒机KJ500G-L1",
							pprice:"969",
							oprice:"999",
							discount:"5.2"
						},
						{
							id:7,
							imgUrl:"../../static/img/2shop7.jpg",
							name:"美的（Midea）净水器机家用厨下直滤饮水自来水前置过滤器超滤机 MU151-4（净水器+水龙头+余氯检测液）",
							pprice:"429",
							oprice:"469",
							discount:"5.2"
						},
						{
							id:8,
							imgUrl:"../../static/img/2shop8.jpg",
							name:"美的（Midea）家用挂烫机YGD20P6 高效杀菌除螨蒸汽立式挂烫机 大功率蒸汽熨烫机 10档熨烫 70CM全域熨烫板 2.5升大水箱设计【23年旗舰新款】高效除菌！",
							pprice:"289",
							oprice:"299",
							discount:"5.2"
						}
					]
				},
				
			]
		 },
		 {
			 type:"commodityList",
			 data:[
			 	{
			 		id:1,
			 		imgUrl:"../../static/img/2shaver1.jpg",
			 		name:"飞科（FLYCO）电动剃须刀 男士刮胡须刀须刨 全身水洗快充90天超长续航FS903 【全身防水/超长续航】",
			 		pprice:"139",
			 		oprice:"169",
			 		discount:"5.2"
			 	},
			 	{
			 		id:2,
			 		imgUrl:"../../static/img/2dry2.jpg",
			 		name:"戴森（DYSON）新一代吹风机 电吹风 负离子 家用 HD15紫红色吹风机梳子套装",
			 		pprice:"2429",
			 		oprice:"2599",
			 		discount:"5.2"
			 	},
			 	{
			 		id:3,
			 		imgUrl:"../../static/img/2mop3.jpg",
			 		name:"美的（Midea）GX5洗地机无线家用洗拖吸一体机自清洁无尘感洗地机实时电解水滚刷防缠绕",
			 		pprice:"1699",
			 		oprice:"1999",
			 		discount:"5.2"
			 	},
			 	{
			 		id:4,
			 		imgUrl:"../../static/img/2fun4.jpg",
			 		name:"格力（GREE） 家用客厅低燥轻音省电七叶大风量落地扇 节能摇头立式办公宿舍床头空气循环扇电风扇 FD-35X65h7（黑色升级加大款）",
			 		pprice:"129",
			 		oprice:"169",
			 		discount:"5.2"
			 	}
			 ]
		 }
		]
	})	
	  
})
//衣物第一次加载
router.get('/api/index_list/3/data/1', function(req, res, next) {
	res.json({
	  code:"0",
	  data:[
		 {
		 	type:"swiperList",
		 	data:[
		 		{imgUrl:'../../static/img/2swiper1.png'},
		 		{imgUrl:'../../static/img/2swiper2.png'},
		 		{imgUrl:'../../static/img/2swiper3.png'}
		 	]
		 },
		 {
			 type:"iconsList",
			 data:[
				 {imgUrl:"../../static/img/air.png",name:"空调类"},
				 {imgUrl:"../../static/img/tv.png",name:"电视类"},
				 {imgUrl:"../../static/img/ice.png",name:"冰洗类"},
				 {imgUrl:"../../static/img/kitchen.png",name:"厨卫类"},
				 {imgUrl:"../../static/img/little.png",name:"小家电类"},
				 {imgUrl:"../../static/img/bigapp.png",name:"品牌大家电"},
				 {imgUrl:"../../static/img/smallapp.png",name:"品牌小家电"},
				 {imgUrl:"../../static/img/purchase.png",name:"企业购"},
			 ]
		 },
		 {
			type:"hotList",
			 data:[
				 {
				 	id:1,
				 	imgUrl:"../../static/img/2hot1.jpg",
				 	name:"海尔（Haier）535升箱双开门对开门 一级能效双变频 风冷无霜 节能省电净味 超薄大容量 家用电冰箱 家电 535升星辉系列BCD-535WGHSSEDS9",
				 	pprice:"2789",
				 	oprice:"2999",
				 	discount:"5.2"
				 },
				 {
				 	id:2,
				 	imgUrl:"../../static/img/2hot2.jpg",
				 	name:"海尔10公斤滚筒洗衣机全自动大容量家用筒自洁一级变频洗衣机 10公斤+香熏洗护+中途添衣+双喷淋MATE2S",
				 	pprice:"1799",
				 	oprice:"1999",
				 	discount:"5.2"
				 },
				 {
				 	id:3,
				 	imgUrl:"../../static/img/2hot3.jpg",
				 	name:"的嵌入式洗碗机14套大容量 洗碗消毒一体 RX600pro RX600pro",
				 	pprice:"4298",
				 	oprice:"4999",
				 	discount:"5.2"
				 },
				 {
				 	id:4,
				 	imgUrl:"../../static/img/2hot4.jpg",
				 	name:"美菱（MELING）油烟机家用顶侧双吸26立方大吸力爆炒厨房抽油烟机 语音智控免拆自清洗挥手体感吸烟 [套装]FX73油烟机+5.0kW燃气灶/液化气",
				 	pprice:"1598",
				 	oprice:"1999",
				 	discount:"5.2"
				 },
				 {
				 	id:5,
				 	imgUrl:"../../static/img/2hot5.jpg",
				 	name:"小米免洗扫地机器人2 扫洗拖一体机擦地机拖地机器人洗拖一体 全自动清洗拖布",
				 	pprice:"2499",
				 	oprice:"2999",
				 	discount:"5.2"
				 },
				 {
				 	id:6,
				 	imgUrl:"../../static/img/2hot6.jpg",
				 	name:"TCL 电视机65V8E 65英寸 4K超清  5G智能语音运动防抖超薄液晶LED平板投屏",
				 	pprice:"2589",
				 	oprice:"2999",
				 	discount:"5.2"
				 },
				 {
				 	id:7,
				 	imgUrl:"../../static/img/2hot7.jpg",
				 	name:"美的（Midea）纤V系列 IH智能电饭煲Pro电饭锅家用5L大容量一级能效预约精铁釜蒸米",
				 	pprice:"439",
				 	oprice:"499",
				 	discount:"5.2"
				 },
				 {
				 	id:8,
				 	imgUrl:"../../static/img/2hot8.jpg",
				 	name:"万和（Vanward）60升电热水器一级能效家用储水式智能断电2000W速热高温杀菌洗澡E60-Q2WY10",
				 	pprice:"699",
				 	oprice:"799",
				 	discount:"5.2"
				 },
				 {
				 	id:9,
				 	imgUrl:"../../static/img/2hot9.jpg",
				 	name:"飞科（FLYCO）电吹风机大功率负离子恒温护发家用冷热大风量快速干发吹风筒FH6290 1800W",
				 	pprice:"73",
				 	oprice:"89",
				 	discount:"5.2"
				 },
			 ]
		 },
		 {
			type:"shopList",
			data:[
				{
					bigUrl:"../../static/img/2shop.jpg",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/2shop1.jpg",
							name:"美的（Midea）冰箱516升法式四门超薄净味除菌一级能效保鲜家用电冰箱BCD-516WFGPZM沁玉蓝-秘境",
							pprice:"6799",
							oprice:"6999",
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/2shop2.jpg",
							name:"美的（Midea）冰箱435升十字四门智能净化除菌纯平全嵌保鲜智能家用电冰箱BCD-435WUSGPZM凝光白",
							pprice:"7499",
							oprice:"7999",
							discount:"5.2"
						},
						{
							id:3,
							imgUrl:"../../static/img/2shop3.jpg",
							name:"美的（Midea）智能电饭煲电饭锅家用4L可拆蒸汽阀24H预约蒸煮米饭锅FB40simple111（3-8人）",
							pprice:"189",
							oprice:"199",
							discount:"5.2"
						},
						{
							id:4,
							imgUrl:"../../static/img/2shop4.jpg",
							name:"美的（Midea）豆浆机1.35L大容量全自动清洗免煮免过滤多功能智能预约破壁料理机榨汁机DJ13B-DG01",
							pprice:"299",
							oprice:"399",
							discount:"5.2"
						},
						{
							id:5,
							imgUrl:"../../static/img/2shop5.jpg",
							name:"适配美的MD-JYC4002煎药熬药中药壶药罐大容量4L升壶身盖子配件 4L壶身【JYC4002】",
							pprice:"109",
							oprice:"129",
							discount:"5.2"
						},
						{
							id:6,
							imgUrl:"../../static/img/2shop6.jpg",
							name:"美的（Midea）【六重净化】空气净化器高效分解甲醛除烟味异味99.99%病菌去除率卧室专用空气消毒机KJ500G-L1",
							pprice:"969",
							oprice:"999",
							discount:"5.2"
						},
						{
							id:7,
							imgUrl:"../../static/img/2shop7.jpg",
							name:"美的（Midea）净水器机家用厨下直滤饮水自来水前置过滤器超滤机 MU151-4（净水器+水龙头+余氯检测液）",
							pprice:"429",
							oprice:"469",
							discount:"5.2"
						},
						{
							id:8,
							imgUrl:"../../static/img/2shop8.jpg",
							name:"美的（Midea）家用挂烫机YGD20P6 高效杀菌除螨蒸汽立式挂烫机 大功率蒸汽熨烫机 10档熨烫 70CM全域熨烫板 2.5升大水箱设计【23年旗舰新款】高效除菌！",
							pprice:"289",
							oprice:"299",
							discount:"5.2"
						}
					]
				},
				
			]
		 },
		 {
			 type:"commodityList",
			 data:[
			 	{
			 		id:1,
			 		imgUrl:"../../static/img/2shaver1.jpg",
			 		name:"飞科（FLYCO）电动剃须刀 男士刮胡须刀须刨 全身水洗快充90天超长续航FS903 【全身防水/超长续航】",
			 		pprice:"139",
			 		oprice:"169",
			 		discount:"5.2"
			 	},
			 	{
			 		id:2,
			 		imgUrl:"../../static/img/2dry2.jpg",
			 		name:"戴森（DYSON）新一代吹风机 电吹风 负离子 家用 HD15紫红色吹风机梳子套装",
			 		pprice:"2429",
			 		oprice:"2599",
			 		discount:"5.2"
			 	},
			 	{
			 		id:3,
			 		imgUrl:"../../static/img/2mop3.jpg",
			 		name:"美的（Midea）GX5洗地机无线家用洗拖吸一体机自清洁无尘感洗地机实时电解水滚刷防缠绕",
			 		pprice:"1699",
			 		oprice:"1999",
			 		discount:"5.2"
			 	},
			 	{
			 		id:4,
			 		imgUrl:"../../static/img/2fun4.jpg",
			 		name:"格力（GREE） 家用客厅低燥轻音省电七叶大风量落地扇 节能摇头立式办公宿舍床头空气循环扇电风扇 FD-35X65h7（黑色升级加大款）",
			 		pprice:"129",
			 		oprice:"169",
			 		discount:"5.2"
			 	}
			 ]
		 }
		]
	})	
	  
})
//日用品第一次加载
router.get('/api/index_list/4/data/1', function(req, res, next) {
  res.json({
	  code:"0",
	  	  data:[
	  		 {
	  		 	type:"swiperList",
	  		 	data:[
	  		 		{imgUrl:'../../static/img/2swiper1.png'},
	  		 		{imgUrl:'../../static/img/2swiper2.png'},
	  		 		{imgUrl:'../../static/img/2swiper3.png'}
	  		 	]
	  		 },
	  		 {
	  			 type:"iconsList",
	  			 data:[
	  				 {imgUrl:"../../static/img/air.png",name:"空调类"},
	  				 {imgUrl:"../../static/img/tv.png",name:"电视类"},
	  				 {imgUrl:"../../static/img/ice.png",name:"冰洗类"},
	  				 {imgUrl:"../../static/img/kitchen.png",name:"厨卫类"},
	  				 {imgUrl:"../../static/img/little.png",name:"小家电类"},
	  				 {imgUrl:"../../static/img/bigapp.png",name:"品牌大家电"},
	  				 {imgUrl:"../../static/img/smallapp.png",name:"品牌小家电"},
	  				 {imgUrl:"../../static/img/purchase.png",name:"企业购"},
	  			 ]
	  		 },
	  		 {
	  			type:"hotList",
	  			 data:[
	  				 {
	  				 	id:1,
	  				 	imgUrl:"../../static/img/2hot1.jpg",
	  				 	name:"海尔（Haier）535升箱双开门对开门 一级能效双变频 风冷无霜 节能省电净味 超薄大容量 家用电冰箱 家电 535升星辉系列BCD-535WGHSSEDS9",
	  				 	pprice:"2789",
	  				 	oprice:"2999",
	  				 	discount:"5.2"
	  				 },
	  				 {
	  				 	id:2,
	  				 	imgUrl:"../../static/img/2hot2.jpg",
	  				 	name:"海尔10公斤滚筒洗衣机全自动大容量家用筒自洁一级变频洗衣机 10公斤+香熏洗护+中途添衣+双喷淋MATE2S",
	  				 	pprice:"1799",
	  				 	oprice:"1999",
	  				 	discount:"5.2"
	  				 },
	  				 {
	  				 	id:3,
	  				 	imgUrl:"../../static/img/2hot3.jpg",
	  				 	name:"的嵌入式洗碗机14套大容量 洗碗消毒一体 RX600pro RX600pro",
	  				 	pprice:"4298",
	  				 	oprice:"4999",
	  				 	discount:"5.2"
	  				 },
	  				 {
	  				 	id:4,
	  				 	imgUrl:"../../static/img/2hot4.jpg",
	  				 	name:"美菱（MELING）油烟机家用顶侧双吸26立方大吸力爆炒厨房抽油烟机 语音智控免拆自清洗挥手体感吸烟 [套装]FX73油烟机+5.0kW燃气灶/液化气",
	  				 	pprice:"1598",
	  				 	oprice:"1999",
	  				 	discount:"5.2"
	  				 },
	  				 {
	  				 	id:5,
	  				 	imgUrl:"../../static/img/2hot5.jpg",
	  				 	name:"小米免洗扫地机器人2 扫洗拖一体机擦地机拖地机器人洗拖一体 全自动清洗拖布",
	  				 	pprice:"2499",
	  				 	oprice:"2999",
	  				 	discount:"5.2"
	  				 },
	  				 {
	  				 	id:6,
	  				 	imgUrl:"../../static/img/2hot6.jpg",
	  				 	name:"TCL 电视机65V8E 65英寸 4K超清  5G智能语音运动防抖超薄液晶LED平板投屏",
	  				 	pprice:"2589",
	  				 	oprice:"2999",
	  				 	discount:"5.2"
	  				 },
	  				 {
	  				 	id:7,
	  				 	imgUrl:"../../static/img/2hot7.jpg",
	  				 	name:"美的（Midea）纤V系列 IH智能电饭煲Pro电饭锅家用5L大容量一级能效预约精铁釜蒸米",
	  				 	pprice:"439",
	  				 	oprice:"499",
	  				 	discount:"5.2"
	  				 },
	  				 {
	  				 	id:8,
	  				 	imgUrl:"../../static/img/2hot8.jpg",
	  				 	name:"万和（Vanward）60升电热水器一级能效家用储水式智能断电2000W速热高温杀菌洗澡E60-Q2WY10",
	  				 	pprice:"699",
	  				 	oprice:"799",
	  				 	discount:"5.2"
	  				 },
	  				 {
	  				 	id:9,
	  				 	imgUrl:"../../static/img/2hot9.jpg",
	  				 	name:"飞科（FLYCO）电吹风机大功率负离子恒温护发家用冷热大风量快速干发吹风筒FH6290 1800W",
	  				 	pprice:"73",
	  				 	oprice:"89",
	  				 	discount:"5.2"
	  				 },
	  			 ]
	  		 },
	  		 {
	  			type:"shopList",
	  			data:[
	  				{
	  					bigUrl:"../../static/img/2shop.jpg",
	  					data:[
	  						{
	  							id:1,
	  							imgUrl:"../../static/img/2shop1.jpg",
	  							name:"美的（Midea）冰箱516升法式四门超薄净味除菌一级能效保鲜家用电冰箱BCD-516WFGPZM沁玉蓝-秘境",
	  							pprice:"6799",
	  							oprice:"6999",
	  							discount:"5.2"
	  						},
	  						{
	  							id:2,
	  							imgUrl:"../../static/img/2shop2.jpg",
	  							name:"美的（Midea）冰箱435升十字四门智能净化除菌纯平全嵌保鲜智能家用电冰箱BCD-435WUSGPZM凝光白",
	  							pprice:"7499",
	  							oprice:"7999",
	  							discount:"5.2"
	  						},
	  						{
	  							id:3,
	  							imgUrl:"../../static/img/2shop3.jpg",
	  							name:"美的（Midea）智能电饭煲电饭锅家用4L可拆蒸汽阀24H预约蒸煮米饭锅FB40simple111（3-8人）",
	  							pprice:"189",
	  							oprice:"199",
	  							discount:"5.2"
	  						},
	  						{
	  							id:4,
	  							imgUrl:"../../static/img/2shop4.jpg",
	  							name:"美的（Midea）豆浆机1.35L大容量全自动清洗免煮免过滤多功能智能预约破壁料理机榨汁机DJ13B-DG01",
	  							pprice:"299",
	  							oprice:"399",
	  							discount:"5.2"
	  						},
	  						{
	  							id:5,
	  							imgUrl:"../../static/img/2shop5.jpg",
	  							name:"适配美的MD-JYC4002煎药熬药中药壶药罐大容量4L升壶身盖子配件 4L壶身【JYC4002】",
	  							pprice:"109",
	  							oprice:"129",
	  							discount:"5.2"
	  						},
	  						{
	  							id:6,
	  							imgUrl:"../../static/img/2shop6.jpg",
	  							name:"美的（Midea）【六重净化】空气净化器高效分解甲醛除烟味异味99.99%病菌去除率卧室专用空气消毒机KJ500G-L1",
	  							pprice:"969",
	  							oprice:"999",
	  							discount:"5.2"
	  						},
	  						{
	  							id:7,
	  							imgUrl:"../../static/img/2shop7.jpg",
	  							name:"美的（Midea）净水器机家用厨下直滤饮水自来水前置过滤器超滤机 MU151-4（净水器+水龙头+余氯检测液）",
	  							pprice:"429",
	  							oprice:"469",
	  							discount:"5.2"
	  						},
	  						{
	  							id:8,
	  							imgUrl:"../../static/img/2shop8.jpg",
	  							name:"美的（Midea）家用挂烫机YGD20P6 高效杀菌除螨蒸汽立式挂烫机 大功率蒸汽熨烫机 10档熨烫 70CM全域熨烫板 2.5升大水箱设计【23年旗舰新款】高效除菌！",
	  							pprice:"289",
	  							oprice:"299",
	  							discount:"5.2"
	  						}
	  					]
	  				},
	  				
	  			]
	  		 },
	  		 {
	  			 type:"commodityList",
	  			 data:[
	  			 	{
	  			 		id:1,
	  			 		imgUrl:"../../static/img/2shaver1.jpg",
	  			 		name:"飞科（FLYCO）电动剃须刀 男士刮胡须刀须刨 全身水洗快充90天超长续航FS903 【全身防水/超长续航】",
	  			 		pprice:"139",
	  			 		oprice:"169",
	  			 		discount:"5.2"
	  			 	},
	  			 	{
	  			 		id:2,
	  			 		imgUrl:"../../static/img/2dry2.jpg",
	  			 		name:"戴森（DYSON）新一代吹风机 电吹风 负离子 家用 HD15紫红色吹风机梳子套装",
	  			 		pprice:"2429",
	  			 		oprice:"2599",
	  			 		discount:"5.2"
	  			 	},
	  			 	{
	  			 		id:3,
	  			 		imgUrl:"../../static/img/2mop3.jpg",
	  			 		name:"美的（Midea）GX5洗地机无线家用洗拖吸一体机自清洁无尘感洗地机实时电解水滚刷防缠绕",
	  			 		pprice:"1699",
	  			 		oprice:"1999",
	  			 		discount:"5.2"
	  			 	},
	  			 	{
	  			 		id:4,
	  			 		imgUrl:"../../static/img/2fun4.jpg",
	  			 		name:"格力（GREE） 家用客厅低燥轻音省电七叶大风量落地扇 节能摇头立式办公宿舍床头空气循环扇电风扇 FD-35X65h7（黑色升级加大款）",
	  			 		pprice:"129",
	  			 		oprice:"169",
	  			 		discount:"5.2"
	  			 	}
	  			 ]
	  		 }
	  		]
	  	})	
	  	  
	  })

//首页(蔬果)
router.get("/api/index_list/data",function(req,res,next){
	res.send({
		"code":0,
		"data":{
			topBar:[
				{id:1,name:'蔬果'},
				{id:2,name:'电器'},
				{id:3,name:'衣物'},
				{id:4,name:'日用品'}
			],
			data:[
				{
					type:"swiperList",
					data:[
						{imgUrl:'../../static/img/swiper1.jpg'},
						{imgUrl:'../../static/img/swiper2.jpg'},
						{imgUrl:'../../static/img/swiper3.jpg'}
					]
				},
				{
					 type:"iconsList",
					 data:[
						 {imgUrl:"../../static/img/icons1.jpg",name:"春季果蔬"},
						 {imgUrl:"../../static/img/icons2.jpg",name:"夏季果蔬"},
						 {imgUrl:"../../static/img/icons3.jpg",name:"秋季果蔬"},
						 {imgUrl:"../../static/img/icons4.jpg",name:"冬季果蔬"},
						 {imgUrl:"../../static/img/icons5.jpg",name:"热带水果"},
						 {imgUrl:"../../static/img/icons6.jpg",name:"亚热带水果"},
						 {imgUrl:"../../static/img/icons7.jpg",name:"蔬菜制品"},
						 {imgUrl:"../../static/img/icons8.jpg",name:"水果制品"},
					 ]
				},
				{
						type:"hotList",
						 data:[
							 {
								id:1,
								imgUrl:"../../static/img/hot1.jpg",
								name:"哈密瓜",
								pprice:"15.9",
								oprice:"17.9",
								discount:"5.2"
							 },
							 {
								id:2,
								imgUrl:"../../static/img/hot2.jpg",
								name:"蓝莓",
								pprice:"69.9",
								oprice:"79.9",
								discount:"5.2"
							 },
							 {
								id:3,
								imgUrl:"../../static/img/hot3.jpg",
								name:"榴莲",
								pprice:"49.9",
								oprice:"59.9",
								discount:"5.2"
							 },
							 {
								id:4,
								imgUrl:"../../static/img/hot4.jpg",
								name:"柠檬",
								pprice:"59.9",
								oprice:"69.9",
								discount:"5.2"
							 },
							 {
								id:5,
								imgUrl:"../../static/img/hot5.jpg",
								name:"上海青",
								pprice:"4.9",
								oprice:"6.9",
								discount:"5.2"
							 },
							 {
								id:6,
								imgUrl:"../../static/img/hot6.jpg",
								name:"西瓜",
								pprice:"2.9",
								oprice:"4.9",
								discount:"5.2"
							 },
							 {
								id:7,
								imgUrl:"../../static/img/hot7.jpg",
								name:"香蕉",
								pprice:"3.9",
								oprice:"5.9",
								discount:"5.2"
							 },
							 {
								id:8,
								imgUrl:"../../static/img/hot8.jpg",
								name:"阳光玫瑰",
								pprice:"15.9",
								oprice:"17.9",
								discount:"5.2"
							 },
							 {
								id:9,
								imgUrl:"../../static/img/hot9.jpg",
								name:"茄子",
								pprice:"3.5",
								oprice:"6.5",
								discount:"5.2"
							 },
						 ]
				},
				{
						type:"shopList",
						data:[
							{
								bigUrl:"../../static/img/shop.jpg",
								data:[
									{
										id:1,
										imgUrl:"../../static/img/shop1.jpg",
										name:"猕猴桃",
										pprice:"11.9",
										oprice:"13.9",
										discount:"5.2"
									},
									{
										id:2,
										imgUrl:"../../static/img/shop2.jpg",
										name:"苹果",
										pprice:"5.9",
										oprice:"7.9",
										discount:"5.2"
									},
									{
										id:3,
										imgUrl:"../../static/img/shop3.jpg",
										name:"苹果梨",
										pprice:"3.9",
										oprice:"5.9",
										discount:"5.2"
									},
									{
										id:4,
										imgUrl:"../../static/img/shop4.jpg",
										name:"石榴",
										pprice:"9.9",
										oprice:"11.9",
										discount:"5.2"
									},
									{
										id:5,
										imgUrl:"../../static/img/shop5.jpg",
										name:"莴笋",
										pprice:"4.9",
										oprice:"6.9",
										discount:"5.2"
									},
									{
										id:6,
										imgUrl:"../../static/img/shop6.jpg",
										name:"番茄",
										pprice:"9.9",
										oprice:"11.9",
										discount:"5.2"
									}
								]
							},
							
						]
				},
				{
					type:"commodityList",
					data:[
						{
							id:1,
							imgUrl:"../../static/img/commodity1-jiucai.jpg",
							name:"韭菜",
							pprice:"3.5",
							oprice:"6.5",
							discount:"5.2"
						},
						{
							id:2,
							imgUrl:"../../static/img/commodity2-juanxincai.jpg",
							name:"秋葵",
							pprice:"6.9",
							oprice:"8.9",
							discount:"5.2"
						},
						{
							id:3,
							imgUrl:"../../static/img/commodity3-ou.jpg",
							name:"卷心菜",
							pprice:"4.9",
							oprice:"6.9",
							discount:"5.2"
						},
						{
							id:4,
							imgUrl:"../../static/img/commodity4-qiukui.jpg",
							name:"藕",
							pprice:"4.9",
							oprice:"6.9",
							discount:"5.2"
						}
					]
					
				}
				
			]
			
		}
	})
});

module.exports = router;
