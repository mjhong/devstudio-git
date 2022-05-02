function btnSearch_on_mouseup()
{
	screen.requestsubmit("TR_SELECT", true);
}

function screen_on_submitcomplete(mapid, result, recv_userheader, recv_code, recv_msg)
{
	btn_getxdatasetinfo_on_mouseup();
}

function btn_getxdatasetinfo_on_mouseup(objInst)
{
	var row_count, i, j;
	
	fld_rowcount.settext(DS_EMP_LIST.getrowcount());
	fld_modifyrowcount.settext(DS_EMP_LIST.getmodifyrowcount());
	fld_deleterowcount.settext(DS_EMP_LIST.getdeletedrowcount());
	fld_deletemarkrowcount.settext(DS_EMP_LIST.getdeletedrowcount(true));
	
	row_count = DS_EMP_LIST.getrowcount();
	for(i = 0; i < row_count; i++) {
		// factory.consoleprint(i + ":" + DS_EMP_LIST.getrowoperation(i));
		grdList.setitemtext(i, 0, DS_EMP_LIST.getrowoperation(i));;
		grdList.setitemtext(i, 1, DS_EMP_LIST.ischeckedrow(i));
	}	
	
	var del_data_arr = DS_EMP_LIST.getdeleteddata();
	factory.consoleprint("del_data_arr.length = " + del_data_arr.length);
	for(i = 0; i < DS_EMP_LIST.getdeletedrowcount(); i++) {
		for(j = 0; j < DS_EMP_LIST.getcolumncount(); j++) {
			factory.consoleprint(del_data_arr[i][j]);
		}
	}
}

function btn_delete_on_mouseup(objInst)
{
	var row_index = grdList.getselectrow();
	DS_EMP_LIST.deleterow(row_index);
	btn_getxdatasetinfo_on_mouseup();
}

function btn_deletemark_on_mouseup(objInst)
{
	var row_index = grdList.getselectrow();
	DS_EMP_LIST.deleterowex(row_index, true);
	btn_getxdatasetinfo_on_mouseup();
}

function btn_hidden_on_mouseup(objInst)
{
	var row_index = grdList.getselectrow();
	grdList.setrowhidden(row_index, true);
	btn_getxdatasetinfo_on_mouseup();
}
function btn_add_on_mouseup(objInst)
{
	DS_EMP_LIST.insertrow(0);
	btn_getxdatasetinfo_on_mouseup();
}

function btn_cancel_on_mouseup(objInst)
{
	var row_index = grdList.getselectrow();
	DS_EMP_LIST.cancelrowoperation(row_index);
	btn_getxdatasetinfo_on_mouseup();
}

function grdList_on_itemeditcomplete(objInst, nRow, nColumn, strPrevItemText)
{
	btn_getxdatasetinfo_on_mouseup();
	return 1;
}

function btn_cancelall_on_mouseup(objInst)
{
	DS_EMP_LIST.cancelallrowoperation();
	btn_getxdatasetinfo_on_mouseup();
}

function grdList_on_checkrowclick(objInst, nRow, bCheckedRow)
{
	btn_getxdatasetinfo_on_mouseup();
}

function btn_deleteall_on_mouseup(objInst)
{
	grdList.deleteall();
	btn_getxdatasetinfo_on_mouseup();
}

function btn_deletecheck_on_mouseup(objInst)
{
	grdList.deletecheckedrow();
	btn_getxdatasetinfo_on_mouseup();
}

function screen_on_load()
{
	btn_getxdatasetinfo_on_mouseup();
}