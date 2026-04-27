(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeNm\">전체</Col><Col id=\"code\">ALL</Col></Row><Row><Col id=\"codeNm\">타이틀</Col><Col id=\"code\">TITLE</Col></Row><Row><Col id=\"codeNm\">내용</Col><Col id=\"code\">CONT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/><ConstColumn id=\"TITLE\" type=\"STRING\" size=\"256\"/><ConstColumn id=\"CONT\" type=\"STRING\" size=\"256\"/><ConstColumn id=\"WRITER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCmb\" type=\"STRING\" size=\"256\"/><Column id=\"searchVal\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelete", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmbSearch","20","105","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsSearchCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","230","105","273","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","517","105","103","76",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsert","340","520","280","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신규작성");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","23","520","267","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("게시글 삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","195","600","300",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"BOARD_NO\"/><Cell col=\"2\" text=\"TITLE\"/><Cell col=\"3\" text=\"CONT\"/><Cell col=\"4\" text=\"WRITER\"/><Cell col=\"5\" text=\"MODIFIER\"/><Cell col=\"6\" text=\"REG_DT\"/><Cell col=\"7\" text=\"MOD_DT\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:BOARD_NO\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:CONT\"/><Cell col=\"4\" text=\"bind:WRITER\"/><Cell col=\"5\" text=\"bind:MODIFIER\"/><Cell col=\"6\" text=\"bind:REG_DT\"/><Cell col=\"7\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCode","702","183","129","153",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("코드관리");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSearch","value","dsSearch","searchVal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmbSearch","value","dsSearch","searchCmb");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        // 검색하는 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	// combo box있는 code값
        	// edit에있는 검색값
        	// 데이터를 넘겨줄때는 parameter를 넘길 수 있고
        	// dataset을 만들어서 column을 지종한 후에 넘길 수도 있다.
        	var objApp = nexacro.getApplication();
        	var searchCmb 	= this.cmbSearch.value;
        	var searchVal = this.edtSearch.value;

        	this.dsSearch.setColumn(0, "searchCmb", searchCmb);
            this.dsSearch.setColumn(0, "searchVal", searchVal);

        // 	var.dsSearch.setCoulmn(0, "searchCmb", searchCmb); // 데이터셋에 값부여
        // 	var.dsSearch.setCoulmn(0, "searchVal", searchVal); // 데이터셋에 값부여

        	this.transaction(
        				"selectList" 				// 서비스 ID
        				,"DataSrv::selectList.do" 	// 호출 URL http://localhost/nexaPj/
        				,"dsSearch=dsSearch" 		// 데이터를 넘길 dataset ([nexa] 보내는 datasetId = [java]에서 받는 datasetId ''(공백)을 사용하여 여러개 처리)
        				,"dsList=dsList" 			// 데이터를 받을 dataset ([naxa] 받는 datasetId = [java]에서 보내는 datasetId ''(공백)을 사용하여 여러개 처리)
        				,"searchCmb=" + searchCmb + " searchVal=" + searchVal // 파라미터로 넘길 값 (key=v)
        				,"fnCallBack"); 			// 함수 호출 콜백
        };

        // 등록하는 화면으로 이동하는 이벤트
        this.btnInsert_onclick = function(obj,e)
        {

        	var objParam = {
        		 "boardNo" : ""
        	}

           this.showPopup(objParam);
        };

        // 선택한 게시글을 삭제하는 이벤트
        this.btnDelete_onclick = function(obj,e)
        {

        	this.dsDelete.clearData();

        	// 해당하는 row의 값만큼 반복
        	for(var i =0; i < this.dsList.rowcount; i++) {
        		// 만약 dsList.getColumn의 i번째 행의 CHK값이 1 즉 체크가 되었으면
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var numbers = this.dsDelete.addRow();
        			this.dsDelete.setColumn(numbers, "BOARD_NO", this.dsList.getColumn(i, "BOARD_NO"));
        		}
        	}

        	trace(this.dsDelete.saveXML(	));

        	if(this.dsDelete.rowcount == 0) {
        			alert("삭제할 항목을 선택해 주세요.");
        			return;
        	}

        	if (this.confirm("삭제하시겠습니까?")) {
        		this.transaction(
        			 "deleteBoardChecked" 				// 트랜잭션 별명
        			,"DataSrv::deleteBoardChecked.do"  // 컨트롤러단과 연결
        			,"dsDelete=dsDelete"		// 넥사(프론트) -> 자바(백단)로 넘겨주는 값
        			,""							// 넥사(프론트) <- 자바(백단) 넘겨주는 값
        			,""							// 파라미터 값
        			,"fnDeleteCallBack" 		// 콜백함수 호출
        			,true  						// 비동기
        		)
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

        // 콜백함수
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag) {
        	 if(strSvcID == "selectList") {

                this.dsSearch.addRow();
            }
        };

        this.cmbSearch_onitemchanged = function(obj,e)
        {

        };

        this.Form_Work_onload = function(obj,e)
        {
        	this.dsSearch.clearData();

        	this.dsSearch.addRow();

        	this.btnSearch_onclick();
        };

        this.cmbSearch_onkillfocus = function(obj,e)
        {
        	this.dsSearch.saveXML();
        };

        this.edtSearch_onkillfocus = function(obj,e)
        {
        	this.dsSearch.saveXML();
        };

        this.showPopup = function(objParam) {
        	popup = new nexacro.ChildFrame;
        	popup.init("popupwork", 0, 0, 800, 700, null, null, "FrameBase::Form_Sub.xfdl");
        	popup.set_dragmovetype('all');
        	popup.set_layered("true");
        	popup.set_autosize(true);
        	popup.set_showtitlebar("Popup Title");
        	popup.set_showstatusbar(false);
        	popup.set_resizable(true);
        	popup.set_openalign("center middle");
        	popup.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback", true);
        }

        this.fn_popupCallback = function (obj, nErrorCode, strErrorMsg) {

        	trace("=======================");

        	 this.btnSearch_onclick();
        }

        this.grdList_oncelldblclick = function(obj,e)
        {
        	var objParam = {"boardNo" : this.dsList.getColumn(this.dsList.rowposition, "BOARD_NO")}

        	alert(objParam);

        	this.showPopup(objParam);
        };

        this.btnCode_onclick = function(obj,e)
        {
        		this.go("FrameBase::Form_Code.xfdl");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.cmbSearch.addEventHandler("onitemchanged",this.cmbSearch_onitemchanged,this);
            this.cmbSearch.addEventHandler("onkillfocus",this.cmbSearch_onkillfocus,this);
            this.edtSearch.addEventHandler("onkillfocus",this.edtSearch_onkillfocus,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnInsert.addEventHandler("onclick",this.btnInsert_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnCode.addEventHandler("onclick",this.btnCode_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
