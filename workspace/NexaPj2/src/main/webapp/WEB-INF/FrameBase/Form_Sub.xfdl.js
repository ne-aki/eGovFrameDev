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
            this.set_titletext("게시글");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoard", this);
            obj._setContents("<ColumnInfo><Column id=\"boardNo\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"cont\" type=\"STRING\" size=\"256\"/><Column id=\"writer\" type=\"STRING\" size=\"256\"/><Column id=\"modifier\" type=\"STRING\" size=\"256\"/><Column id=\"boardType\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/><Column id=\"modDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcTitle", "70", "20", "120", "20", null, null, null, null, null, null, this);
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle", "200", "20", "140", "20", null, null, null, null, null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("stcCont", "70", "50", "120", "20", null, null, null, null, null, null, this);
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new TextArea("taCont", "200", "50", "140", "50", null, null, null, null, null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("stcWriter", "70", "110", "120", "20", null, null, null, null, null, null, this);
            obj.set_text("작성자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWriter", "200", "110", "140", "20", null, null, null, null, null, null, this);
            this.addChild(obj.name, obj);

            obj = new Static("stcModifier", "70", "140", "120", "20", null, null, null, null, null, null, this);
            obj.set_text("수정자");
            this.addChild(obj.name, obj);

            obj = new Edit("edtModifier", "200", "140", "140", "20", null, null, null, null, null, null, this);
            this.addChild(obj.name, obj);

            obj = new Button("btnSave", "70", "210", "60", "30", null, null, null, null, null, null, this);
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete", "140", "210", "60", "30", null, null, null, null, null, null, this);
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose", "210", "210", "60", "30", null, null, null, null, null, null, this);
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            // Layout Functions
            obj = new Layout("default","Desktop_screen",400,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            this.addChild("item0", new BindItem("item0","edtTitle","value","dsBoard","title"));
            this.addChild("item1", new BindItem("item1","taCont","value","dsBoard","cont"));
            this.addChild("item2", new BindItem("item2","edtWriter","value","dsBoard","writer"));
            this.addChild("item3", new BindItem("item3","edtModifier","value","dsBoard","modifier"));
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Sub.xfdl", function() {

        this.Form_Sub_onload = function(obj,e)
        {
            if (this.parent.boardNo == "")
            {
                this.dsBoard.clearData();
                this.dsBoard.addRow();
            }
            else
            {
                this.edtWriter.set_enable(false);
                this.transaction(
                    "selectList"
                    , "DataSrv::selectList.do"
                    , ""
                    , "dsBoard=dsBoard"
                    , "boardNo=" + this.parent.boardNo
                    , "fnCallback"
                    , true
                );
            }
        };

        this.fnCallback = function(strSvcID, nErrorCode, strErrorMsg)
        {
            if (strSvcID == "insertBoard" || strSvcID == "deleteBoard")
            {
                this.close();
            }
        };

        this.btnSave_onclick = function(obj,e)
        {
            var title    = this.edtTitle.value;
            var cont     = this.taCont.value;
            var writer   = this.edtWriter.value;
            var modifier = this.edtModifier.value;

            if (title == undefined || title.trim() == "")
            {
                alert("제목을 입력해 주세요");
                this.edtTitle.setFocus();
                return;
            }
            if (cont == undefined || cont.trim() == "")
            {
                alert("내용을 입력해 주세요");
                this.taCont.setFocus();
                return;
            }
            if (writer == undefined || writer.trim() == "")
            {
                alert("작성자를 입력해 주세요");
                this.edtWriter.setFocus();
                return;
            }
            if (modifier == undefined || modifier.trim() == "")
            {
                alert("수정자를 입력해 주세요");
                this.edtModifier.setFocus();
                return;
            }

            var serviceID = "";
            var callUrl   = "";
            if (this.parent.boardNo == "")
            {
                serviceID = "insertBoard";
                callUrl   = "DataSrv::insertBoard.do";
            }
            else
            {
                serviceID = "updateBoard";
                callUrl   = "DataSrv::updateBoard.do";
            }

            if (confirm("저장하시겠습니까?"))
            {
                this.transaction(
                    serviceID
                    , callUrl
                    , "dsBoard=dsBoard"
                    , ""
                    , ""
                    , "fnCallback"
                    , true
                );
            }
        };

        this.btnDelete_onclick = function(obj,e)
        {
            if (this.dsBoard.getColumn(0, "boardNo") == undefined || this.dsBoard.getColumn(0, "boardNo") == "")
            {
                alert("게시글 번호가 존재하지 않습니다.");
                return;
            }
            if (confirm("삭제하시겠습니까?"))
            {
                this.transaction(
                    "deleteBoard"
                    , "DataSrv::deleteBoard.do"
                    , "dsBoard=dsBoard"
                    , ""
                    , ""
                    , "fnCallback"
                    , true
                );
            }
        };

        this.btnClose_onclick = function(obj,e)
        {
            this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form_Sub_onload, this);
            this.btnSave.addEventHandler("onclick", this.btnSave_onclick, this);
            this.btnDelete.addEventHandler("onclick", this.btnDelete_onclick, this);
            this.btnClose.addEventHandler("onclick", this.btnClose_onclick, this);
        };
        this.loadIncludeScript("Form_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
