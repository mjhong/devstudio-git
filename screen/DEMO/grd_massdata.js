var startDate;
var endDate;

function btnSelect_on_mouseup(objInst)
{
	startDate = new Date();
	fldElapseTime.settext("");
	screen.requestsubmit("TR_SELECT", true);
}

function SetEndTime(fldEndTime)
{
	endDate = new Date();
	var startTime = startDate.getTime();
	var endTime = endDate.getTime();
	var elapseSecond = (endTime - startTime) / 1000;
	// var elapseMSecond = (endTime - startTime) % 1000;
	// factory.consoleprint("elapseMSecond = " + elapseMSecond);
	fldEndTime.settext(elapseSecond);	
}

function screen_on_submitcomplete(mapid, result, recv_userheader, recv_code, recv_msg)
{
	SetEndTime(fldElapseTime);
}

function btnSortGrid_on_mouseup(objInst)
{
	fldElapseTimeGridSort.settext("");
	startDate = new Date();
	grdList.sort(5, 3);	// 0번째 칼럼 토글 소팅
	SetEndTime(fldElapseTimeGridSort);
}

function btnSortGridMulti_on_mouseup(objInst)
{
	fldElapseTimeSortGridMulti.settext("");
	startDate = new Date();
	grdList.multisortex("5:ASC,6:ASC", false);
	SetEndTime(fldElapseTimeSortGridMulti);
}

function btnDatasetToExcel_on_mouseup(objInst)
{
	fldElapseTimeExcel.settext("");
	startDate = new Date();
	
	// 파일명, 바로저장 여부, 기존파일 덮어쓰기 여부, 저장후 엑셀파일 오픈여부
	DS_DATA.excelexport("C:\\xFrame\\데이타셋저장.xls", true, true, false);
	SetEndTime(fldElapseTimeExcel);	
}

function btnDatasetToExcelGrid_on_mouseup(objInst)
{
	startDate = new Date();
	
	fldElapseTimeExcelExGrid.settext("");
	
	grdList.excelctrl.exbafteropenexcel = false;
	grdList.excelctrl.exnoverwriteoption = XFD_EXCEL_OVR_DONTCARE;		// 파일이 존재하면 덮어쓰기
	grdList.excelctrl.nshowworkwnd = XFD_EXCEL_SHOWWND_ONLYPROGRESS;	  // 저장다이얼로그 보이기(0 숨김 2 프로그래스만)
	grdList.excelctrl.strfiletype = "xls";
	grdList.excelctrl.exstrsheetname = "상품조회";
	grdList.excelctrl.strfilename = "C:\\xFrame\\그리드저장.xls";
	grdList.excelctrl.exportfile();

	// grdList.saveexceldirectex("C:\\xFrame\\그리드저장.xls", true, true, false, false, true, true);
	
	SetEndTime(fldElapseTimeExcelExGrid);
}

function btnDatasetToExcelExGrid_on_mouseup(objInst)
{
	fldElapseTimeExcelExGrid.settext("");
	
	startDate = new Date();
	
	grdList.excelctrl.exbafteropenexcel = false;
	grdList.excelctrl.exnoverwriteoption = XFD_EXCEL_OVR_DONTCARE;		// 파일이 존재하면 덮어쓰기
	grdList.excelctrl.nshowworkwnd = XFD_EXCEL_SHOWWND_ONLYPROGRESS;	  // 저장다이얼로그 보이기(0 숨김 2 프로그래스만)
	// grdList.excelctrl.nshowworkwnd = 0;	  // 저장다이얼로그 보이기(0 숨김 2 프로그래스만)
	grdList.excelctrl.strfiletype = "xlsx";
	grdList.excelctrl.exstrsheetname = "상품조회";
	grdList.excelctrl.strfilename = "C:\\xFrame\\그리드저장.xlsx";
	grdList.excelctrl.exportfile();
			
	SetEndTime(fldElapseTimeExcelExGrid);
}

function grdList_on_sortcomplete(objInst)
{

}

function btnDatasetToCsvGrid_on_mouseup(objInst)
{
	fldElapseTimeExcelCsv.settext("");
	
	startDate = new Date();
	
	grdList.savecsvex("C:\\xFrame\\그리드저장.csv", true, true, true, false, false, true);

	SetEndTime(fldElapseTimeExcelCsv);	
}



function btnClear_on_mouseup(objInst)
{
	DS_DATA.init();
}