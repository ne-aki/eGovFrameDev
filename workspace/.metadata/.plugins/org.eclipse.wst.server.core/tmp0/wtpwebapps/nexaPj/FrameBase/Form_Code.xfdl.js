(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Code");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMstCode", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"code\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"codeNm\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstCdSearchCmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ALL</Col><Col id=\"codeNm\">전체</Col></Row><Row><Col id=\"code\">CODE</Col><Col id=\"codeNm\">코드</Col></Row><Row><Col id=\"code\">CODE_NM</Col><Col id=\"codeNm\">코드명</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmbMstCdSearch","57","95","133","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsMstCdSearchCmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("EdtMstCdSearch","200","95","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnMstCdView","460","95","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnMstCdAdd","515","95","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","57","480","33","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMstCd","87","476","123","49",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","225","478","55","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveMstCd","433","478","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteMstCd","495","478","52","39",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMstCdNm","270","476","140","49",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMstCode","60","144","470","316",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsMstCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"codeNm\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:codeNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("masterCodeTitle","57","46","203","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("마스터 코드");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Code.xfdl", function() {

        this.Form_Code_onload = function(obj,e)
        {
        	this.transaction(
        		"selectMstCode"
        		,"DataSrv::selectMstCode.do"
        		,""
        		,"dsMstCode=dsMstCode"
        		,""
        		,""
        	)

        	console.log("프론트 코드 코드 테스트");
        	console.log(this.dsMstCode.saveXML());
        };

        this.cmbMstCdSearch_onitemchanged = function(obj,e)
        {

        };

        this.grdMstCode_oncellclick = function(obj,e)
        {
        	var row = this.dsMstCode.rowposition;
        	this.edtMstCd.set_value(this.dsMstCode.getColumn(row, "code"));
        	this.edtMstCdNm.set_value(this.dsMstCode.getColumn(row, "codeNm"));
        	this.edtMstCd.set_readonly(true);
        };

        //저장버튼
        this.btnSaveMstCd_onclick = function(obj,e)
        {
        	var nMstRow = this.dsMstCode.rowposition;
        	var serviceId = "";
        	var callUrl = "";
        	console.log("dsMstCode 코드 : " + nMstRow);
        	if (this.parent.code == "")
        	{
        		serviceId = "insertMstCode";
        		callUrl = "DataSrv::insertMstCode.do";

        	}
        	else
        	{
        		serviceId = "updateMstCode";
        		callUrl = "DataSrv::updateMstCode.do";
        	}

        	this.dsMstCode.clearData();
        	this.dsMstCode.addRow();

        	var code = this.edtMstCd.value;
        	var codeNm = this.edtMstCdNm.value;

        	this.dsMstCode.setColumn(this.dsMstCode.rowposition,"code", code);
        	this.dsMstCode.setColumn(this.dsMstCode.rowposition,"codeNm", codeNm);

        	console.log(code);
        	console.log(codeNm);
        	console.log(this.dsMstCode.saveXML());



        	this.transaction(
        		serviceId
        		,callUrl
        		,"dsMstCode=dsMstCode"
        		,""
        		,""
        		,"fnCallBack"
        		,true
        	)

        	this.reload();


        };

        //콜백함수
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag){
        	alert("저장되었습니다.");
        };

        //삭제버튼
        this.btnDeleteMstCd_onclick = function(obj,e)
        {

        	var nMstRow = this.dsMstCode.rowposition;

        	var code = this.dsMstCode.getColumn(nMstRow, "code");

        	this.transaction(
        		"deleteMstCode"
        		,"DataSrv::deleteMstCode.do"
        		,""
        		,""
        		,"code=" + code
        		,"fnCallBack"
        		,true
        	)

        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Code_onload,this);
            this.cmbMstCdSearch.addEventHandler("onitemchanged",this.cmbMstCdSearch_onitemchanged,this);
            this.edtMstCd.addEventHandler("onchanged",this.edtMstCd_onchanged,this);
            this.btnSaveMstCd.addEventHandler("onclick",this.btnSaveMstCd_onclick,this);
            this.btnDeleteMstCd.addEventHandler("onclick",this.btnDeleteMstCd_onclick,this);
            this.edtMstCdNm.addEventHandler("onchanged",this.edtMstCdNm_onchanged,this);
            this.grdMstCode.addEventHandler("oncellclick",this.grdMstCode_oncellclick,this);
        };
        this.loadIncludeScript("Form_Code.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
