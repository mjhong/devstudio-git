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

function btn_getstatrowcount_on_mouseup(objInst)
{
	fld_statrowcount.settext(grdList.getstatrowcount());
}

function btn_getstatrowmetaid_on_mouseup(objInst)
{
	fld_statrowmetaid.settext(grdList.getstatrowmetaid(fld_statrowindex.gettext()));
}

function btn_setstatrowmetaid_on_mouseup(objInst)
{
	grdList.setstatrowmetaid(fld_statrowindex.gettext(), fld_statrowmetaid.gettext());
}

function btn_getstatrowtitle_on_mouseup(objInst)
{
	fld_statrowtitle.settext(grdList.getstatrowtitle(fld_statrowindex.gettext()));
}

function btn_setstatrowtitle_on_mouseup(objInst)
{
	grdList.setstatrowtitle(fld_statrowindex.gettext(), fld_statrowtitle.gettext());
} 

function btn_getstatrowtitlecolumn_on_mouseup(objInst)
{
	fld_statrowtitlecolumn.settext(grdList.getstatrowtitlecolumn(fld_statrowindex.gettext()));
}

function btn_setstatrowtitlecolumn_on_mouseup(objInst)
{
	grdList.setstatrowtitlecolumn(fld_statrowindex.gettext(), fld_statrowtitlecolumn.gettext());
}

function btn_getstatisticsrowtext_on_mouseup(objInst)
{
	fld_statisticsrowtext.settext(grdList.getstatisticsrowtext(fld_statrowindex.gettext(), fld_statcolindex.gettext()));
}

function btn_getstatuserrowtext_on_mouseup(objInst)
{
	fld_statuserrowtext.settext(grdList.getstatuserrowtext(fld_statrowindex.gettext(), fld_statcolindex.gettext()));
}

function btn_setstatuserrowtext_on_mouseup(objInst)
{
	grdList.setstatuserrowtext(fld_statrowindex.gettext(), fld_statcolindex.gettext(), fld_statuserrowtext.gettext());
	fld_statuserrowtext.settext("");
}

function btn_clearallstatuserrow_on_mouseup(objInst)
{
	grdList.clearallstatuserrow();
}

function btn_clearstatuserrow_on_mouseup(objInst)
{
	grdList.clearstatuserrow(fld_clearstatrowindex.gettext());
}

function btn_getcolumnstatrowtype_on_mouseup(objInst)
{
	fld_columnstatrowtype.settext(grdList.getcolumnstatrowtype(fldDataColumnIndex.gettext()));
}

function btn_setcolumnstatrowtype_on_mouseup(objInst)
{
	grdList.setcolumnstatrowtype(fldDataColumnIndex.gettext(), fld_columnstatrowtype.gettext());
	fld_columnstatrowtype.settext("");
}