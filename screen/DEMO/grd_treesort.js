function screen_on_load()
{

}

function grdList_on_itemclick(objInst, nClickRow, nClickColumn)
{
	fldDataRowIndex.settext(nClickRow);
	fldDataColumnIndex.settext(nClickColumn);
}

function btn_expandrow_collapse_on_mouseup(objInst)
{
	grdList.expandrow(fldDataRowIndex.gettext(), XFD_TREEITEM_COLLAPSE);
}

function btn_expandrow_expand_on_mouseup(objInst)
{
	grdList.expandrow(fldDataRowIndex.gettext(), XFD_TREEITEM_EXPAND);
}

function btn_expandrow_toggle_on_mouseup(objInst)
{
	grdList.expandrow(fldDataRowIndex.gettext(), XFD_TREEITEM_TOGGLE);
}

function btn_findtreeitem_on_mouseup(objInst)
{
	fld_findrowindex.settext(grdList.findtreeitem(fld_finditemkey.gettext()));
}

function btn_getitemdepth_on_mouseup(objInst)
{
	fld_itemdepth.settext(grdList.getitemdepth(fldDataRowIndex.gettext()));
}

function btn_getitemkey_on_mouseup(objInst)
{
	fld_itemkey.settext(grdList.getitemkey(fldDataRowIndex.gettext()));
}

function btn_getnextsiblingrow_on_mouseup(objInst)
{
	fld_nextsiblingrow.settext(grdList.getnextsiblingrow(fldDataRowIndex.gettext()));
}

function btn_getparentrow_on_mouseup(objInst)
{
	fld_parentrow.settext(grdList.getparentrow(fldDataRowIndex.gettext()));
}

function btn_ishaschildren_on_mouseup(objInst)
{
	fld_haschildren.settext(grdList.ishaschildren(fldDataRowIndex.gettext()));
}

function btn_insertitem_on_mouseup(objInst)
{
	grdList.insertitem("NEW", 0, 1, "NEW", "", "");
}

function grdList_on_sortcomplete(objInst)
{
	factory.consoleprint("grdList_on_sortcomplete");
}