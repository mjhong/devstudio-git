function grdList_on_itemclick(objInst, nClickRow, nClickColumn)
{
	fldDataRowIndex.settext(nClickRow);
	fldDataColumnIndex.settext(nClickColumn);
}

function btnIsShowFilter_on_mouseup(objInst)
{
	fldShowFilter.settext(grdList.isshowfilter());
}

function btnShowFilterTrue_on_mouseup(objInst)
{
	grdList.showfilter(true);
}

function btnShowFilterFalse_on_mouseup(objInst)
{
	grdList.showfilter(false);
}

function btnApplyFilter_on_mouseup(objInst)
{
	grdList.applyfilter(fldDataColumnIndex.gettext(), fldFilterText.gettext());
}

function btnApplyFilterEx_on_mouseup(objInst)
{
	grdList.applyfilterex(fldDataColumnIndex.gettext(), true, true);
}

function btnReleaseFilter_on_mouseup(objInst)
{
	grdList.releasefilter();
}


function btnGetFilterColumns_on_mouseup(objInst)
{
	var arrColumn = grdList.getfiltercolumns();
	var i;
	
	for(i = 0; i < arrColumn.length; i++) {
		factory.consoleprint(arrColumn[i]);
	}
}

function screen_on_load()
{
	factory.showconsoletrace(true);
}

function btnApplyMultiFilterTrue_on_mouseup(objInst)
{
	grdList.applymultifilter(fldMultiFilterText.gettext(), true);
}

function btnApplyMultiFilterFalse_on_mouseup(objInst)
{
	grdList.applymultifilter(fldMultiFilterText.gettext(), false);
}