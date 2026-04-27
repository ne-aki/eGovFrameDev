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
            obj = new Dataset("dsBoardList", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNo\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"cont\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"modifier\" type=\"STRING\" size=\"256\"/><Column id=\"boardType\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"modDt\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCategory", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch","10","10","80","25",null,null,null,null,null,null,this);
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsert","100","10","80","25",null,null,null,null,null,null,this);
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","190","10","80","25",null,null,null,null,null,null,this);
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","280","10","80","25",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBoard","10","45","1260","400",null,null,null,null,null,null,this);
            obj.set_binddataset("dsBoardList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:boardNo\"/><Cell col=\"1\" text=\"bind:title\"/><Cell col=\"2\" text=\"bind:cont\"/><Cell col=\"3\" text=\"bind:writer\"/><Cell col=\"4\" text=\"bind:regDt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Form_Work_onload = function(obj,e)
        {
        	this.fnSearchCode();
        };

        //
        this.fnSearchCode = function() {
        	this.transaction(
        		"selectCode"
        		, "DataSrv::selectCode.do"
        		, ""
        		, "dsBoardType=dsBoardType dsCategory=dsCategory"
        		, ""
        		, "fnCallback"
        		, true
        	)
        }

        this.fnCallback = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (strSvcId == "selectCode")
        	{
        		this.btnSearch_onclick();
        	}
        	else if (strSvcId == "insertBoard" || strSvcId == "deleteBoard")
        	{
        		this.btnSearch_onclick();
        	}
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.dsBoardList.clearData();
        	this.transaction(
        		"selectBoardList"
        		, "DataSrv::selectBoardList.do"
        		, ""
        		, "dsBoardList=dsBoardList"
        		, ""
        		, "fnCallback"
        		, true
        	)
        };

        this.btnInsert_onclick = function(obj,e)
		{
		    var objParam = {"boardNo": ""}
		    this.showPopup(objParam);
		};
		
		this.showPopup = function(objParam)
		{
		    var popup = new nexacro.ChildFrame;
		    popup.init("popupWork", 0, 0, 800, 700, null, null, "FrameBase::Form_Sub.xfdl");
		    popup.showModal(this.getOwnerFrame(), objParam, this, "fnPopupCallback", true);
		};
		
		this.fnPopupCallback = function(strSvcID, nErrorCode, strErrorMsg)
		{
		    this.btnSearch_onclick();
		};

        this.btnSave_onclick = function(obj,e)
        {
        	this.transaction(
        		"insertBoard"
        		, "DataSrv::insertBoard.do"
        		, "dsBoard=dsBoardList"
        		, ""
        		, ""
        		, "fnCallback"
        		, true
        	)
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	if (confirm("삭제하시겠습니까?"))
        	{
        		this.transaction(
        			"deleteBoard"
        			, "DataSrv::deleteBoard.do"
        			, "dsBoard=dsBoardList"
        			, ""
        			, ""
        			, "fnCallback"
        			, true
        		)
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnInsert.addEventHandler("onclick",this.btnInsert_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
