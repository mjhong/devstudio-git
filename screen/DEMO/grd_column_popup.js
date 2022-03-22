function screen_on_activate()
{
	grdList.setfocus();
}

function grdList_on_keydown(objInst, keycode, bctrldown, bshiftdown, baltdown)
{
	if(keycode == 13) {
		grdList_on_itemdblclick();
	}
	return 0;
}

function grdList_on_itemdblclick(objInst, nDblClickRow, nDblClickColumn)
{
	var nRow = grdList.getselectrow();
	var scrParent = screen.getparent();
	
	if(factory.isobject(scrParent) == false) {
		return;
	}
	
	// 부모화면에 첫번째 필드
	if(scrParent.getscreenurl() == "/DEMO/grd_column" || scrParent.getscreenurl() == "/계정계/500006" || scrParent.getscreenurl() == "/계정계/500002" || scrParent.getscreenurl() == "/계정계/500008") {
		var grdParent = scrParent.getinstance(61);
		var nParentRow = grdParent.getselectrow();
		
		grdParent.setitemtext(nParentRow, 0, grdList.getitemtext(nRow, 0));
		grdParent.setitemtext(nParentRow, 2, grdList.getitemtext(nRow, 1)); 
		grdParent.setcheckedrow(nParentRow, true);
	}

	screen.unload();
}

function btnClose_on_mouseup(objInst)
{
	screen.unload();
}