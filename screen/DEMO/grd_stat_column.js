function grdList_on_itemclick(objInst, nClickRow, nClickColumn)
{
	fldDataRowIndex.settext(nClickRow);
	fldDataColumnIndex.settext(nClickColumn);
}

function grdList_on_headerclick(objInst, nHeaderRow, nHeaderCol)
{
	fldDataRowIndex.settext(nHeaderRow);
	fldDataColumnIndex.settext(nHeaderCol);
}


function btn_getstatcolumncount_on_mouseup(objInst)
{
	fld_statcolumncount.settext(grdList.getstatcolumncount());
}

function btn_getstatcolumnmetaid_on_mouseup(objInst)
{
	fld_statcolumnmetaid.settext(grdList.getstatcolumnmetaid(fld_statcolumnindex.gettext()));
}

function btn_setstatcolumnmetaid_on_mouseup(objInst)
{
	grdList.setstatcolumnmetaid(fld_statcolumnindex.gettext(), fld_statcolumnmetaid.gettext());
	fld_statcolumnmetaid.settext("");
}

function btn_getstatcolumntitle_on_mouseup(objInst)
{
	fld_statcolumntitle.settext(grdList.getstatcolumntitle(fld_statcolumnindex.gettext()));
}

function btn_setstatcolumntitle_on_mouseup(objInst)
{
	grdList.setstatcolumntitle(fld_statcolumnindex.gettext(), fld_statcolumntitle.gettext());
	fld_statcolumntitle.settext("");
}

function btn_getstatisticscoltext_on_mouseup(objInst)
{
	fld_statisticscolumntext.settext(grdList.getstatisticscoltext(fld_statrowindex.gettext(), fld_statcolumnindex.gettext()));
}

function btn_setstatisticscoltext_on_mouseup(objInst)
{
	grdList.setstatisticscoltext(fld_statrowindex.gettext(), fld_statcolumnindex.gettext(), fld_statisticscolumntext.gettext());
	fld_statisticscolumntext.settext("");
}

function btn_getstatofstattext_on_mouseup(objInst)
{
	fld_statofstatcolumntext.settext(grdList.getstatofstattext(fld_statrowindex.gettext(), fld_statcolumnindex.gettext()));
}

function btn_setstatofstattext_on_mouseup(objInst)
{
	grdList.setstatofstattext(fld_statrowindex.gettext(), fld_statcolumnindex.gettext(), fld_statofstatcolumntext.gettext());
	fld_statofstatcolumntext.settext("");
}

function btn_savecsv_on_mouseup(objInst)
{
	grdList.savecsv();
}