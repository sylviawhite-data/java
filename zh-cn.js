/*
Powered by ly200.com		http://www.ly200.com
广州联雅网络科技有限公司		020-83226791
*/

var lang_obj={
	global:{
		'add':'添加',
		'edit':'编辑',
		'submit':'提交',
		'confirm':'确定',
		'cancel':'取消',
		'copy_confirm':'进入产品复制模式，继续吗？',
		'copy_model_confirm':'进入属性复制模式，继续吗？',
		'del_confirm':'删除后不可恢复，继续吗？',
		'reset_confirm':'确定恢复默认设置，继续吗？',
		'used_confirm':'已准备批量开启模式，继续吗？',
		'close_confirm':'已准备批量关闭模式，继续吗？',
		'my_order_confirm':'已准备排序模式，继续吗？',
		'sold_in_confirm':'已准备上架模式，继续吗？',
		'sold_out_confirm':'已准备下架模式，继续吗？',
		'data_posting':'数据提交中...',
		'confirm_password_error':'登录密码与确认密码不匹配，请重新输入！',
		'del_dat_select':'请选择所删除的项目',
		'used_dat_select':'请选择所开启的项目',
		'close_dat_select':'请选择所关闭的项目',
		'dat_select':'请选择所选的项目',
		'correct_message':'请填写正确的数据',
		'n_y':['否','是'],
		'open':'展开',
		'pack_up':'收起',
		'del':'删除',
		'picture':'图片',
		'picture_name':'图片名称',
		'set_error':'设置失败，出现未知错误！'
	},
	format:{
		'mobilephone':'请正确填写手机号码！',
		'telephone':'请正确填写电话号码！',
		'fax':'请正确填写传真号码！',
		'email':'请正确填写邮箱地址！',
		'length':'长度不正确！需要填写%num%位。'
	},
	signIn:{
		'title':'登录',
		'error_note':'不正确的电子邮件地址或密码，请重试<br>在你输入密码之前，请确认Caps Lock键已经关闭',
		'email':'邮箱',
		'password':'密码',
		'forgot':'<a href="/account/forgot.html" class="forgot">忘记密码</a>？',
		'stay_note':'保持登录状态<span>为了保护您的隐私建议你注销登录</span>',
		'sign_in':'登录',
		'join_fee':'注册'
	},
	newsletter:{
		'success':'新增订阅成功!',
		'exists':'此邮箱已经存在订阅！'
	},
	language:{
		'zh-cn':'简体中文',
		'en':'英文',
		'jp':'日语',
		'de':'德语',
		'fr':'法语',
		'es':'西班牙语',
		'ru':'俄语',
		'pt':'葡萄牙语',
		'zh_tw':'繁体中文'
	},
	manage:{
		frame:{
			'time':'时间',
			'status':'状态',
			'support':['企业QQ', '上班时间', '电话号码', '微信号', '上级投诉人', '网站到期时间'],
			'data_backup':'数据备份',
			'backup':['数据库', '文件夹'],
			'file_upload':'选择文件'
		},
		account:{
			"log_in":"系统正在努力登录中，请稍候...",
			"log_in_ok":"登录成功，页面跳转中，请稍候...",
			"order_quantity":"网站订单量",
			"page_view":"网站访问量",
			"success_cache":"已成功清空缓存！",
			"percentage":"百分比",
			"picture_tips":"您上传的图片数量已经超过xxx张，不能再上传！",
			"password_tips":"新密码与确认密码不匹配，请重新输入！"
		},
		set:{
			"select_once_language":"请至少选择一个语言版本",
			"print_0":"打印报关单",
			"print_1":"打印发票",
			"platform_ary":{'SignIn':'登录','Pixel':'统计'},
		},
		module:{
			"sure_module":"您确定要选择此风格吗？",
			"name":"名称",
			"url":"链接地址",
			"target":"新窗口"
		},
		counrtry:{
			"state":"省份"
		},
		photo:{
			"empty_temp":"已成功清空临时文件夹！",
			"move_success":"移动成功",
			"picture_upload":"图片上传"
		},
		shipping:{
			"area_config":"地区设置",
		},
		products:{
			"category_tips":"请选择产品分类",
			"qty":"数量",
			"price":"价格",
			"group_attr":"组合属性",
			"prefix_tips":"产品编号前缀不能为空！"
		},
		sales:{
			"seckill":"秒杀",
			"promotion":"促销",
			"proName":"产品名称",
			"proPrice":"产品价格",
			"proNumber":"产品编号",
			"proBiref":"简短介绍",
			"start_time":"开始时间",
			"duration":"持续时间",
			"hour":"小时",
			"tuan_price":"团购价",
			"buyer_count":"已参团人数",
			"total_count":"限购人数",
			"promotion_price":"促销总价",
			"seckill_price":"秒杀价",
			"qty":"数量",
			"remainder_qty":"剩余件数",
			"max_qty":"购买上限",
			"reverseAssociate":"反向关联( 被关联产品未设置组合时，被关联产品将同时显示此组合 )",
			"mainArea":"该产品已在主产品区域",
			"relatedArea":"该产品已在捆绑产品区域",
			"holidayNotice":'拖动右侧产品列表到<b class="fc_red">"节日模板产品区"</b>',
			"seckillNotice":'拖动右侧产品列表到<b class="fc_red">"限时秒杀产品区"</b>',
			"tuanNotice":'拖动右侧产品列表到<b class="fc_red">"团购产品区"</b>',
			"relatedNotice":'拖动右侧产品列表到<b class="fc_red">"主产品区"</b>和<b class="fc_red">"捆绑产品区"</b>',
			"beyondNumber":"已超出最大限制数量：",
			"condition":"消费条件",
			"discount":"打折",
			"money":"现金",
			"condition_tips":"当购物金额达到此设定值时，即可享受此优惠",
			"discount_tips":"请输入折扣的百分数; 20%等同于两折，80%等同于八折",
			"money_tips":"请输入金额"
		},
		email:{
			"load_error":"读取模板数据失败，请稍后再试！",
			"not_model":"没有选择模板！",
			"not_user":"没有会员！",
			"not_content":"内容为空！"
		},
		mta:{
			"traffic_time":['最近30天', '今天', '昨天', '最近7天', '最近15天'],
			"statistics_name":['访客', '浏览量']
		}
	},
	products:{
		'warning_number':'购买量相比库存量更多或者起订量更少',
		'select_country':'--请选择您所在的国家--',
		'sign_in':'请您先登录！',
		'free_shipping':'免费送货',
		'no_optional':'没有可选',
	},
	cart:{
		'processing':'处理中，请稍候...',
		'attribute_error':'有部分产品资料出错，请麻烦清除此产品再进行重新购买',
		'address_error':'请输入您的送货地址或选择一个从您以前输入的地址，确保资料填写完整后请点击保存',
		'shipping_error':'请选择送货方式',
		'payment_error':'请选择付款方式',
		'product_error':'您的购物车是空的',
		'low_error':'您的产品总额尚未达到网站的最低消费金额',
		'stock_error':'有部分产品的库存不足，不能正常创建订单，请调整购买数量',
		'prod_stock_error':'此产品的库存不足',
		'additem_0':'该产品已成功添加到购物车！',
		'additem_1':'您的购物车<b class="FontColor">%num%</b>件商品。小计：',
		'return_shopping':'返回购物',
		'proceed_checkout':'进行结算',
		'arrival_info_0':'已成功提交的业务，产品涵盖将立即通知客户。',
		'arrival_info_1':'请登录申请到货通知。',
		'arrival_info_2':'该产品已申请到货通知！',
		'use_shipping_address':'使用此送货地址',
		'coupon_title':'输入您的优惠券代码',
		'coupon_tips':'优惠券代码"<strong>%coupon%</strong>"是有效的！<br />你的折扣是',
		'coupon_code':'优惠券代码',
		'apply':'应用',
		'select_y_country':'选择您的国家',
		'remove':'删除',
		'batch_remove_select':'请选择您要删除的产品！',
		'batch_remove_success':'产品删除成功!',
		'batch_remove_error':'产品删除失败!',
		'continue_str':'继续结账',
		'total_amout':'总金额',
		'insurance':'加入运输保险您的订单',
		'coupon_tips_to':'优惠券代码"%coupon%"无效。它不存在，也尚未激活，或已过期。',
		'coupon_tips_th':'优惠券代码"<strong></strong>"无效。它不存在，也尚未激活，或已过期。',
		'shipping_method_tips':'请选择送货方式！',
	},
	seckill:{
		'loading_tips':'没有更多的产品',
		'no_products':'不相匹配的产品',
		'end':'完成'
	},
	user:{
		'send_email_ture':'电子邮件已成功发送给您。请输入您的电子邮件地址，并检查确认电子邮件。',
		'send_email_false':'很抱歉，电子邮件以失败而被送往因为系统问题。 请稍后再试。',
		'favorite_success':'此产品收藏成功！',
		'favorite_saved':'此产品已被收藏！',
		'go_to_view':'去查看',
		'order_cancel':'你确定要删除这个订单？',
		'sure':'你确定？',
		'delete_shipping':'你确定要删除这个送货地址？',
		'reg_error':{
			'PleaseEnter':'Please enter your %field%.',
			'Email':'Please enter an email address.',
			'EmailFormat':"The email you've entered is invalid. Please check your email and try again.",
			'PWDConfirm':'Please re-enter your new password.',
			'PWDNotMatch':'Your passwords do not match, please try again.'
		},
		'address_tips':{
			'PleaseEnter':'Please enter your %field%.',
			'email':'请输入您的电子邮件。',
			'email_format':'输入的电子邮件不匹配确认电子邮件的格式。',
			'firstname':'请输入您的名字。',
			'firstname_length':'你的名字必须至少包含2个字符。',
			'lastname':'请输入您的姓氏。',
			'lastname_length':'你的名字必须至少包含2个字符。',
			'address':'请输入送货地址。',
			'address_length':'您的送货地址应至少为5个字符长。',	
			'city':'请输入您的城市。',
			'city_length':'你的城市应至少3个字符长。',
			'country':'请选择您的目的地国家/地区。',
			'state':'请选择您的州/省/地区。',
			'taxcode':'很抱歉，您需要%str%。',
			'taxcode_length':'您的%str%必须至少包含%taxlen%数字。',
			'tariff':'很抱歉，您需要数%str%。',
			'tariff_length':'您的%str%数量必须至少包含12个号码的。',
			'zip':'请输入一个邮政编码。',
			'zip_length':'您的邮政编码至少应为4位数字。',
			'phone':'请输入您的手机号码。',
			'phone_format':'请输入一个有效的电话号码。',
			'phone_length':'您的电话号码必须至少为7位数',
		}
	}
};