
function screen_on_load()
{
	// 두번째 줄의 4번째 칼럼에 다른 Picklist 설정
	grdList.setitempicklist(1, 4, "/DEMO/SECT_TYPE");

	// 두번째 줄의 5번째 칼럼에 유형을 기본 Check-Box에서 콤보박스로 변경하고, Picklist 설정
	grdList.setiteminputtype(1, 5, 2);
	grdList.setitempicklist(1, 5, "/DEMO/MONEY_TYPE");
	grdList.setitemtext(1, 5, "1");

	// 세번째 줄의 5번째 칼럼에 유형을 기본 Check-Box에서 에디트 박스로 변경
	grdList.setiteminputtype(2, 5, 0);
	
	grdList.setitemtooltiptext(2, 0, "체크할 수 없는 행입니다.");
	grdList.setitemeditable(2, 0, false);
	
	grdList.enablecheckrowex(2, false);
}

function grdList_on_itemdblclick(nDblClickRow, nDblClickColumn)
{
	if(grdList.getselectcolumn() == 1) {
		factory.loadpopup("팝업", "/DEMO/grd_column_popup", "팝업화면", false, XFD_BORDER_RAISED, 0, 0, true, false, screen);
	}
}

var m_nPrevHoverRow = -1;
var m_nPrevHoverColumn = -1;

var m_strName = "";
var m_strDate = "";
var m_strEtc = "";

function grdList_on_columnmousehover(objInst, bHeader, nRow, nColumn)
{
	var nXPos = 260;
	var nYPos = 34;
	
	if(bHeader == true) {
		return;
	}
	
	if(nRow == m_nPrevHoverRow) 
		return;
		
	/*
	if(nColumn == m_nPrevHoverRow) 
		return;		
	*/
		
	m_nPrevHoverRow = nRow;
	m_nPrevHoverColumn = nColumn;
	
	grdList.setselectitem(nRow, nColumn);
	
	//nXPos = factory.getcursorposx() + 10;
	//nYPos = factory.getcursorposy() + 10;
	
	nYPos = nYPos + (nRow * 20);
	
	m_strName = grdList.getitemtext(nRow, 2);
	m_strDate = grdList.getitemdisplaytext(nRow, 3);
	m_strEtc = grdList.getitemdisplaytext(nRow, 9);
	
	factory.loadmenu("고객세부정보", "/DEMO/grd_column_menu", nXPos, nYPos, 276, 140, screen);
	
}

function screen_on_activate()
{
	
}