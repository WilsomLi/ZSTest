{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"SampleScene",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Camera",
				"instanceID":0,
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-10.14645,
						2.988357,
						-15.20262
					],
					"rotation":[
						-0.01555263,
						-0.9516585,
						-0.0488721,
						0.3028463
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"orthographicVerticalSize":10,
					"fieldOfView":60,
					"enableHDR":true,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.1921569,
						0.3019608,
						0.4745098,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"instanceID":1,
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-6.117742,
						5.389328,
						-10.7495
					],
					"rotation":[
						-0.2298725,
						-0.7404165,
						-0.4017903,
						0.4873466
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1,
					"lightmapBakedType":1,
					"color":[
						1,
						0.9568627,
						0.8392157
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":2,
				"props":{
					"name":"Cube",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-6.295351,
						2.40511,
						-11.0003
					],
					"rotation":[
						0.0488721,
						0.3028463,
						-0.01555263,
						0.9516585
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Cube.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Material/MaterialDefault.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									1,
									1,
									1
								]
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"instanceID":3,
				"props":{
					"name":"Cylinder",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-7.421547,
						2.40511,
						-10.20275
					],
					"rotation":[
						0.0488721,
						0.3028463,
						-0.01555263,
						0.9516585
					],
					"scale":[
						1,
						1,
						1
					],
					"meshPath":"Library/unity default resources-Cylinder.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Material/MaterialDefault.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"CapsuleColliderShape",
								"center":[
									5.960464E-08,
									0,
									-8.940697E-08
								],
								"radius":0.5000001,
								"height":2,
								"orientation":1
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			}
		]
	}
}