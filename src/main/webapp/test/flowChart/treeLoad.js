//（1）加载目录树
/*var setting = {};

var zNodes =[
 			{ name:"输入输出源", open:true,
 				children: [
 					{ name:"读数据" },
 					{ name:"写数据" },
 					{ name:"加载模型" },
 					{ name:"保存模型" },
 				]},
			{ name:"数据预处理", open:true,
 				children: [
 					{ name:"数值化" },
 					{ name:"向量生成" },
 					{ name:"加载模型" },
 					{ name:"保存模型" },
 				]},
			{ name:"机器学习算法", open:true,
 				children: [
 					{ name:"支持向量机" },
 					{ name:"逻辑回归" },
 					{ name:"决策树" },
 					{ name:"梯度渐进随机树" },
 					{ name:"多层感知器" },
 					{ name:"K均值" },
 					{ name:"交替最小二乘" },
 					{ name:"识别分类" },
 				]}

 		];*/


var setting = {
		edit: {
			enable: true,
			showRemoveBtn: false,
			showRenameBtn: false
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
//			onClick: onClick,
//			beforeDrag: beforeDrag,
//			beforeDrop: beforeDrop,
//			onDrag: onDrag,
//			onDrop: onDrop,
		}
	};

	var zNodes =[
		{ id:1, pId:0, name:"输入输出源", title:"", open:true},
		{ id:11, pId:1, name:"读数据", title:""},
		{ id:12, pId:1, name:"写数据", title:""},
		{ id:13, pId:1, name:"加载模型", title:""},
		{ id:14, pId:1, name:"保存模型", title:""},
		{ id:2, pId:0, name:"数据预处理", title:"", open:true},
		{ id:21, pId:2, name:"支持向量机", title:""},
	];
	
	function onClick(event, treeId, treeNode, clickFlag) {
		alert("treeNodeId: " + treeNode.id);
	}
	
	function beforeDrag(treeId, treeNodes) {
		for (var i=0,l=treeNodes.length; i<l; i++) {
			if (treeNodes[i].drag === false) {
				return false;
			}
		}
		return true;
	}
	function onDrag(event, treeId, treeNodes) {
		console.log(treeNodes[0].id+": "+treeNodes[0].name);
	}
	function beforeDrop(treeId, treeNodes, targetNode, moveType) {
		console.log(treeNodes[0].id+": "+treeNodes[0].name);
		return targetNode ? targetNode.drop !== false : true;
	}
	function onDrop(treeId, treeNodes, targetNode, moveType) {
		console.log(targetNode[0].id+": "+targetNode[0].name);
	}


$(document).ready(function(){
	$.fn.zTree.init($("#component-tree"), setting, zNodes);
});
