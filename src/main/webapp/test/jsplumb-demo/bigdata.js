// ����ͼ
$(function() {
    $("#left").children().draggable({
        helper: "clone",
        scope: "ss"
    });
    var i = 1;
    var text;
    $("#right").droppable({
        scope: "ss",
        drop: function(event, ui) {
            var left = parseInt(ui.offset.left - $(this).offset().left + 424);
            var top = parseInt(ui.offset.top - $(this).offset().top + 87);
            //var leftDiv = $("#left").width();
			var leftD = $("#menu").width() + $(".li1").width() + $(".leftPanel").width();
            var name = ui.draggable[0].id;
            if (leftD < 0) {
                left = pareInt($(this).offset.left);
            }else{
            	left = pareInt(ui.offset.left-$(this).offset.left+424);
            }

            switch (name) {
            case "table":
                i++;
                var id = "state_table" + i;
                $(this).append("<div class='node' id='" + id + "' style='position:absolute; left:top; right:left;'><p>" + $(ui.helper).html() + "</p></div>");
                $("#" + id).css("left", left).css("top", top);
                jsPlumb.addEndpoint(id, { anchors: "TopCenter" }, hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);*/
                jsPlumb.draggable(id);
                $("#" + id).draggable({
                    containment: "parent"
                });
                $(".jsplumb-endpoint").draggable({
                    containment: "#right"
                });
                sclick("#" + id);
                break;

            case "nontable":
                i++;
                id = "state_non" + i;
                $(this).append("<div class='node' id='" + id + "' style='position:absolute; left:top; right:left;'>" + $(ui.helper).html() + "</div><div ></div>");
                $("#" + id).css("left", left).css("top", top);
                jsPlumb.addEndpoint(id, { anchors: "TopCenter"}, hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, { anchors: "BottomCenter" }, hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, hollowCircle);
                jsPlumb.draggable(id);
                $("#" + id).draggable({
                    containment: "parent"
                });
                sclick("#" + id);
                 jsPlumb.connect({
	    source:"state_table1",
	    target:"state_table2",
	    anchors:["RightMiddle","LeftMiddle"],
	    endpoint:"Rectangle",
	    endpointStyle:{fillStyle:"yellow"}
    });
                break;
            case "mr":
                i++;
                id = "state_mr" + i;
                $(this).append("<div class='node' id='" + id + "' style='position:absolute; left:top; right:left;'>" + $(ui.helper).html() + "</div>");
                $("#" + id).css("left", left).css("top", top);
                jsPlumb.addEndpoint(id, {
                    anchors: "TopCenter"
                },
                hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, {
                    anchors: "BottomCenter"
                },
                hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, hollowCircle);
                jsPlumb.draggable(id);
                $("#" + id).draggable({
                    containment: "parent"
                });
                sclick("#" + id);
                break;
            case "sql":
                i++;
                id = "state_sql" + i;
                $(this).append("<div class='node' id='" + id + "' style='position:absolute; left:top; right:left;'>" + $(ui.helper).html() + "</div>");
                $("#" + id).css("left", left).css("top", top);
                jsPlumb.addEndpoint(id, {
                    anchors: "TopCenter"
                },
                hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, {
                    anchors: "BottomCenter"
                },
                hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, hollowCircle);
                jsPlumb.draggable(id);
                $("#" + id).draggable({
                    containment: "parent"
                });
                sclick("#" + id);
                break;
            case "shell":
                i++;
                id = "state_shell" + i;
                $(this).append("<div class='node' id='" + id + "' style='position:absolute; left:top; right:left;'>" + $(ui.helper).html() + "</div>");
                $("#" + id).css("left", left).css("top", top);
                jsPlumb.addEndpoint(id, {
                    anchors: "TopCenter"
                },
                hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "RightMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, {
                    anchors: "BottomCenter"
                },
                hollowCircle);
                /*jsPlumb.addEndpoint(id, { anchors: "LeftMiddle" }, hollowCircle);*/
                jsPlumb.addEndpoint(id, hollowCircle);
                jsPlumb.draggable(id);
                $("#" + id).draggable({
                    containment: "parent"
                });
                sclick("#" + id);
                break;

            }
        }
    });

    //��������ʽ
    var connectorPaintStyle = {
        lineWidth: 2,
        strokeStyle: "#61B7CF",
        joinstyle: "round",
        outlineColor: "white",
        outlineWidth: 2
    };
    // ����������������ϵ���ʽ
    var connectorHoverStyle = {
        lineWidth: 4,
        strokeStyle: "#216477",
        outlineWidth: 2,
        outlineColor: "white"
    };
    var hollowCircle = {
        endpoint: ["Dot", {
            radius: 8
        }],
        //�˵����״
        connectorStyle: connectorPaintStyle,
        //�����ߵ���ɫ����С��ʽ
        connectorHoverStyle: connectorHoverStyle,
        paintStyle: { //�˵����ɫ��ʽ
            strokeStyle: "#1e8151",
            //strokeStyle: "transparent",
            //fillStyle: "transparent",
            fillStyle: "#1e8151",
            radius: 2,
            lineWidth: 2
        },
        //anchor: "AutoDefault",
        isSource: true,
        //�Ƿ�����϶�����Ϊ������㣩
        connector: ["Bezier", {
            stub: [40, 60],
            gap: 10,
            cornerRadius: 5,
            alwaysRespectStubs: true
        }],
        //�����ߵ���ʽ������[Bezier],[Flowchart],[StateMachine ],[Straight ]
        isTarget: true,
        //�Ƿ���Է��ã������յ㣩
        maxConnections: -1,
        // �������ӵ����������Ӽ�����
        connectorOverlays: [["Arrow", {
            width: 10,
            length: 10,
            location: 1
        }]]
    };

    //ɾ���ڵ�
    $("#right").on("mouseenter", ".node",
    function() {
        $(this).append('<img src="../../resources/images/close2.png"  style="position: absolute; z-index:10000;" />');
        $("img").css("left", 115).css("top", 0);
    });

    $("#right").on("mouseleave", ".node",
    function() {
        $("img").remove();
    });

    //ɾ��ָ��id�����ж˵�
    $("#right").on("click", "img",
    function() {
        if (confirm("ȷ��Ҫɾ����?")) {
            jsPlumb.removeAllEndpoints($(this).parent().attr("id"));
            $(this).parent().remove();
        }
    });
    //ɾ������  
    jsPlumb.bind("click",
    function(conn, originalEvent) {
        if (confirm("ȷ��ɾ���� ")) jsPlumb.detach(conn);
    });

    //��˫��Ч��
    var timeFunName = null;
    function sclick(id) {
        $(id).click(function() {
            clearTimeout(timeFunName);
            timeFunName = setTimeout(function() {
                var text = $(id).text();
                var input = $("<input type='text' value='" + text + "' style='width:80px;'/>");
                $(id).html(input);
                input.click(function() {
                    return false;
                });
                //��ȡ���� 
                input.trigger("focus");
                //�ı���ʧȥ������ύ���ݣ����±�Ϊ�ı�  
                input.blur(function() {
                    var newtxt = $(this).val();
                    $(id).html(newtxt);
                })
            },
            200)
        }).dblclick(function() {
            clearTimeout(timeFunName);
            var text = $(this).text();
            alert(text);
        });

    }
   
})