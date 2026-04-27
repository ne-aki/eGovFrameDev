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
            obj = new Dataset("boardList", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNum\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"memId\" type=\"STRING\" size=\"256\"/><Column id=\"readCnt\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnReg","414","376","112","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시글 등록");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBoard","42","130","502","214",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("boardList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"boardNum\"/><Cell col=\"1\" text=\"title\"/><Cell col=\"2\" text=\"content\"/><Cell col=\"3\" text=\"memId\"/><Cell col=\"4\" text=\"readCnt\"/><Cell col=\"5\" text=\"regDate\"/></Band><Band id=\"body\"><Cell text=\"bind:boardNum\"/><Cell col=\"1\" text=\"bind:title\"/><Cell col=\"2\" text=\"bind:content\"/><Cell col=\"3\" text=\"bind:memId\"/><Cell col=\"4\" text=\"bind:readCnt\"/><Cell col=\"5\" text=\"bind:regDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","58","37","172","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Nexacro 화면");
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
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
        	this.transaction(
                "getBoardList"
                ,"DataSrv::getBoardList.do"
                ,""                          // 보낼 DataSet 없음
                ,"boardList=boardList"          // 서버의 boardList → 내 boardList에 담기
                ,""                          // 파라미터 없음
                ,"fnCallBack"
            );
        };

        //콜백함수
        this.fnCallBack = function(strSvcId, nErrorCode, strErrorMsg)
        {

        };
        this.btnReg_onclick = function(obj,e)
        {
        	var objParam = {
        		"boardNum" : ""
        	}

        	this;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btnReg.addEventHandler("onclick",this.btnReg_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
