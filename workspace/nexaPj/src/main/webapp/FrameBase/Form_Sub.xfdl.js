(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Sub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNo\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT\" type=\"STRING\" size=\"1000\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("editTitle","83","70","178","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("editWriter","83","140","178","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("title","83","37","177","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","83","116","177","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Static("title00","83","177","283","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("컨텐츠");
            this.addChild(obj.name, obj);

            obj = new TextArea("editCont","83","215","283","158",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","83","457","178","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","83","501","178","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnBack","83","544","178","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("돌아가기");
            this.addChild(obj.name, obj);

            obj = new Edit("editModifier","83","407","178","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","83","383","177","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("수정자");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",720,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","editTitle","value","dsBoard","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","editWriter","value","dsBoard","WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","editCont","value","dsBoard","CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","editModifier","value","dsBoard","MODIFIER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Sub.xfdl", function() {
        	var boardNo = "";

        	this.Form_Sub_onload = function(obj,e)
        	{
        	    boardNo = this.parent.boardNo;

        	   // 부모요소의 boardNo가 없다면
        		if(boardNo == "") {
        			// 기존의 Data의 값을 비운다.
        			this.dsBoard.clearData();
        			/*
        				빈 행을 하나 추가 해주는 이유는
        				화면의 컴포넌트에 dsBoard의 0번 row와 바인딩 되어 입력이 가능한 상태가 돤다.
        			*/
        			this.dsBoard.addRow();
        		} else {
        			this.editWriter.enable = false;
        			this.transaction(
        					"selectList" 						// 서비스 ID
        					,"DataSrv::selectList.do" 			// 호출 URL http://localhost/nexaPj/
        					,"" 								// 데이터를 넘길 dataset ([nexa] 보내는 datasetId = [java]에서 받는 datasetId ''(공백)을 사용하여 여러개 처리)
        					,"dsBoard=dsList" 					// 데이터를 받을 dataset ([naxa] 받는 datasetId = [java]에서 보내는 datasetId ''(공백)을 사용하여 여러개 처리)
        					,"boardNo=" + this.parent.boardNo   // 파라미터로 넘길 값 (key=v)
        					,"fnCallBack"
        					, true
        					); 									// 함수 호출 콜백
        		}

        	};

        	// 생성
        	this.btnSave_onclick = function(obj,e)
        	{
        		// 입력값 검증
        		// 자릿수에 대해서 검증은 안함
        		// 단순하게 null이나 공백인지만 체크
        		boardNo = this.parent.boardNo;

        		this.dsBoard.setColumn(0, "boardNo", this.parent.boardNo);
        		this.dsBoard.setColumn(0, "MODIFIER", this.editModifier.value);

        		var title = this.editTitle.value;
        		var cont = this.editCont.value;
        		var writer = this.editWriter.value;
        		var modifier = this.editModifier.value;

        		alert(modifier);

        		if (title == undefined || title.trim() == "") {
        			alert("제목을 입력해주세요.");
        			this.editTitle.setFocus();
        			return;
        		}

        		if (cont == undefined || cont.trim() == "") {
        			alert("내용을 입력해주세요.");
        			this.editCont.setFocus();
        			return;
        		}

        		if (writer == undefined || writer.trim() == "") {
        			alert("작성자를 입력해주세요.");
        			this.editWriter.setFocus();
        			return;
        		}

        		trace(this.parent.boardNo);
        		var serviceID = "";
        		var callUrl = "";
        		var callBackFn = "fnCallBack";

        		if(this.parent.boardNo == "") {
        			serviceID = "insertBoard"
        			callUrl = "DataSrv::insertBoard.do"
        		} else {
        			serviceID = "updateBoard"
        			callUrl = "DataSrv::updateBoard.do"
        		}

        		if (this.confirm("저장하시겠습니까?")) {
        			 this.transaction(serviceID 	// 서비스 ID
        					, callUrl				// 호출 URL http://localhost/nexaPj/
        					, "dsBoard=dsBoard" 	// 데이터를 넘길 dataset ([nexa] 보내는 datasetId = [java]에서 받는 datasetId ''(공백)을 사용하여 여러개 처리)
        					, "" 					// 데이터를 받을 dataset ([naxa] 받는 datasetId = [java]에서 보내는 datasetId ''(공백)을 사용하여 여러개 처리)
        					, ""
        					, callBackFn
        					, true
        					);
        		}
        	};

        	// 콜백함수
        	this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag) {

        		if (strSvcID == "insertBoard" || strSvcID == "updateBoard") {
        			alert("저장되었습니다.");
        			this.close();
        		} else if(strSvcID == "selectList") {
        			this.dsList.saveXML();
        		}

        	};

        	// 삭제
        	this.btnDelete_onclick = function(obj,e)
        	{

        // 		if (this.confirm("삭제하시겠습니까?")) {
        //
        // 			this.dsBoard.setColumn(0, "boardNo", boardNo);
        //
        // // 			// dsDelete에 행 추가
        // // 			var number = this.dsDelete.addRow();
        // //
        // // 			// 추가 된 행에 setColumn으로 데이터 추가
        // // 			this.dsDelete.setColumn(number, "BOARD_NO", boardNo)
        //
        // 			this.transaction(
        // 				 "deleteBoard" 				// 트랜잭션 별명
        // 				,"DataSrv::deleteBoard.do"  // 컨트롤러단과 연결
        // 				,"dsBoard=dsBoard"			// 넥사(프론트) -> 자바(백단)로 넘겨주는 값
        // 				,""							// 넥사(프론트) <- 자바(백단) 넘겨주는 값
        // 				,""							// 파라미터 값
        // 				,"fnDeleteCallBack" 		// 콜백함수 호출
        // 				,true  						// 비동기
        // 			)
        // 		}

        	var nRow = this.dsBoard.rowposition;

           if (nRow < 0) return;

           if(confirm("삭제하시겠습니까?")){
              var boardNo = this.dsBoard.getColumn(nRow,"BOARD_NO");

              this.transaction(
                 "deleteBoard"
                 ,"DataSrv::deleteBoard.do"
                 ,""
                 ,""
                 ,"boardNo=" + boardNo
                 ,"fnCallback"
              );
           }

        	};

        // 삭제 콜백 함수
        this.fnDeleteCallBack = function(strSvcId, nErrorCode, strErrorMsg) {

        	// strSvcId = 트랜잭션의 별명이 일치할 경우 실행
        	if (nErrorCode < 0) {
        		alert("삭제 실패");
        		return;
        	}

        	alert("삭제완료");
        	location.reload();
        }

        	// 닫기
        	this.btnBack_onclick = function(obj,e)
        	{
        		this.close();
        	};


        this.editWriter_onchanged = function(obj,e)
        {

        };

        this.editTitle_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Sub_onload,this);
            this.editTitle.addEventHandler("onchanged",this.editTitle_onchanged,this);
            this.editWriter.addEventHandler("onchanged",this.editWriter_onchanged,this);
            this.title.addEventHandler("onclick",this.title_onclick,this);
            this.title00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnBack.addEventHandler("onclick",this.btnBack_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
        };
        this.loadIncludeScript("Form_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
