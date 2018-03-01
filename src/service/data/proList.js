export const proList = [
	{
		"proID":"111",
		"image_url":"../static/images/02-produit-A.jpg",
		"title":"可可小姐香水",
		"content":"独具个性、清新迷人的东方调。"
	},
	{
		"proID":"222",
		"image_url": "../static/images/02-produit-B.jpg",
		"title":"可可小姐柔肤润体乳",
		"content":"迷上肌肤柔润触感。"
	},
	{
		"proID":"333",
		"image_url":"./static/images/02-produit-C.jpg",
		"title":"可可小姐唇膏水亮系列",
		"content":"无拘无束绽放灿烂笑容。"
	}
];

export const proDetail = [{
	"proID":"111",
	"image_url": "../static/images/02-produit-A.jpg",
	"title":"可可小姐香水",
	"price": [100,200,500],
	"sale": "1000",
	"detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
	"attr":[
		{
			"id": "fragrance",
			"attrTitle": "香味种类",
			"attrSelect":[
				{
					"id":"51061",
					"name":"薰衣草",
					"active":false
				},
				{
					"id":"24808",
					"name":"玫瑰香",
					"active":false
				},
				{
					"id":"18543",
					"name":"茉莉香",
					"active":false
				}
			]
		},
		{
			"id": "size",
			"attrTitle": "容量选择",
			"attrSelect": [
				{
					"id":"18991",
					"name":"10ml",
					"active":false
				},
				{
					"id":"11894",
					"name":"20ml",
					"active":false
				},
				{
					"id":"18795",
					"name":"50ml",
					"active":false
				}
			]
		}
	]
},{
	"proID":"222",
	"image_url": "../static/images/02-produit-B.jpg",
	"title":"可可小姐柔肤润体乳",
	"price": [30,80,150],
	"sale": "8850",
	"detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
	"attr":[
		{
			"id": "fragrance",
			"attrTitle": "香味种类",
			"attrSelect":[
				{
					"id":"02949",
					"name":"薰衣草",
					"active":false
				},
				{
					"id":"97979",
					"name":"玫瑰香",
					"active":false
				},
				{
					"id":"18989",
					"name":"茉莉香",
					"active":false
				}
			]
		},
		{
			"id": "size",
			"attrTitle": "容量选择",
			"attrSelect": [
				{
					"id":"18798",
					"name":"100ml",
					"active":false
				},
				{
					"id":"49894",
					"name":"400ml",
					"active":false
				},
				{
					"id":"98954",
					"name":"750ml",
					"active":false
				}
			]
		}
	]
},{
	"proID":"333",
	"image_url": "../static/images/02-produit-C.jpg",
	"title":"可可小姐唇膏水亮系列",
	"price": [100],
	"sale": "560",
	"detailImg":["../static/images/detail1.jpg","../static/images/detail2.jpg","../static/images/detail3.jpg"],
	"attr":[
		{
			"id": "fragrance",
			"attrTitle": "香味种类",
			"attrSelect":[
				{
					"id":"48949",
					"name":"薰衣草",
					"active":false
				},
				{
					"id":"98965",
					"name":"玫瑰香",
					"active":false
				},
				{
					"id":"36284",
					"name":"茉莉香",
					"active":false
				}
			]
		}
	]
}]