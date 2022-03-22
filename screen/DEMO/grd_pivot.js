function SetColumnInfo(grdPivot)
{
	var columnIndex;
	var columnCount;
	
	grdPivot.setcolumnhorzalign(0, 1);
			
	columnCount = grdPivot.getcolumncount();
	
	for(columnIndex = 1; columnIndex < columnCount; columnIndex++) {
		grdPivot.setcolumnhorzalign(columnIndex, 2);
		grdPivot.setcolumnpattern(columnIndex, "ZZ,ZZZ,ZZZ,ZZ9");
		grdPivot.setcolumneditable(columnIndex, true);
		grdPivot.setcolumndatatype(columnIndex, 0);
	}
}

function btnPivto1_on_mouseup()
{
	/*
	strSrcXDataSetID : 대상 xDataSet
	strXDataSetXColumnID : 그리드 x축에 표시할 xDataSet컬럼 (그리드 컬럼 타이틀)
	strXDataSetYColumnID : 그리드 y축에 표시할 xDataSet컬럼 (그리드 열 타이틀)
	strXDataSetDataColumnID : 그리드에 Data부에 표시한 xDataSet컬럼
	*/
	grdPivot1.pivot ("DS_ORG_DATA", "DATE", "ITEM", "COUNT");
	SetColumnInfo(grdPivot1);
}

function btnPivto2_on_mouseup(objInst)
{
	// NG
	grdPivot11.pivot ("DS_ORG_DATA", "DATE", "ITEM", "COUNT");		
	SetColumnInfo(grdPivot11);	
	
	grdPivot21.pivot ("DS_ORG_DATA", "ITEM", "DATE", "COUNT");		
	SetColumnInfo(grdPivot21);
}