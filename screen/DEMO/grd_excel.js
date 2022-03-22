function btnExcel_on_mouseup()
{
	// LoadIngPopup(screen);
	gridDelayCustomer.readcsv("C:\\xFrame5\\demo\\grd_excel.csv");
	// CloseIngPopup();
}

function CloseIngPopup()
{
	var sPopupScrn = factory.findpopup("진행중");
	if(factory.isobject(sPopupScrn) == false) 
		return;

	sPopupScrn.unload();
	sPopupScrn = null;
}

function LoadIngPopup(screen)
{
	factory.loadpopup("진행중", "/DEMO/processing", "진행중", false, 3, 0, 0, true, false, screen);
}

function screen_on_load()
{
	fldStartDate.settext("20100301");
	fldEndDate.settext("20101203");

	// factory.showconsoletrace(true);
}

function btnExcelReport_on_mouseup()
{
	gridDelayCustomer.saveexcel();
}

function gridDelayCustomer_on_itemselchange(objInst, nPrevSelectRow, nPrevSelectColumn, nCurSelectRow, nCurSelectColumn)
{
	SelectDataSet();
}

function SelectDataSet()
{
	var scrPopupScreen = factory.findpopup("팝업");
	if(factory.isobject(scrPopupScreen) == false) {
		return;
	}

	var selectRow = gridDelayCustomer.getselectrow();
	var ColumnCnt = gridDelayCustomer.getcolumncount();
	var nRow;
	var gridColumnView = scrPopupScreen.getinstance(190);	// 팝업에 있는 그리드의 Control_id를 이용해 그리드객체를 변수에 저장
	if(factory.isobject(gridColumnView) == true) {
		gridColumnView.deleteall();
		for(nRow = 0; nRow < ColumnCnt; nRow++) {
			gridColumnView.insertitemtext(nRow, 0, gridDelayCustomer.getheadertext(0,nRow));
			gridColumnView.setitemtext(nRow, 1, gridDelayCustomer.getitemdisplaytext(selectRow,nRow));
		}
	}
	else {
		screen.alert("팝업창에 있는 그리드객체가 생성되지 않았습니다");
	}
}

function btnSummary_on_mouseup(objInst)
{
	factory.loadpopup("팝업", "/DEMO/grd_excel_popup", "상세정보", false, 2, 0, 0, true, false, screen);	// 팝업 설정
	SelectDataSet();
}

function gridDelayCustomer_on_dropfiles(objInst, arrayDropFiles, nDropFileCount)
{
	var i;
	
	if(nDropFileCount > 0) {
		// factory.consoleprint(arrayDropFiles[0]);
		gridDelayCustomer.readexcelex(arrayDropFiles[0], 1, "A", true);		
	}	
}

function btnMasking_on_mouseup(objInst)
{
	gridDelayCustomer.setcolumnpattern(0, "99XXX99");
}