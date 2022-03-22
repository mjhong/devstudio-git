function btnSearch_on_mouseup(objInst)
{
	grdTree.deleteallitems();

	var sPreBank = "";
	var sPreBranch = "";
	var ParentKey = "";

	var sBank = "";
	var sBranch = "";
	
	var nBrchNum = 0;
	var nEmpNum = 0;
	var nBrchEmpNum = 0;

	var nBankRow = 0;
	var nBrchRow = 0;

	var nIsFirstBank = 1;
	var nIsFirstBrch = 1;

	var nRow, nCol;
	var iRow;
	
	var treeData;
	
	for(nRow = 0; nRow < grdPredata.getrowcount(); nRow++) 
	{
		sBank = grdPredata.getitemtext(nRow, 0);
		sBranch = grdPredata.getitemtext(nRow, 1);

		// factory.consoleprint("sBank = " + sBank + ", sBranch = " + sBranch + ", sPreBank = " + sPreBank + ", sPreBranch = " + sPreBranch);
		
		// 은행 코드 추가
		if(sPreBank != sBank) {
			grdTree.setitemtext(nBankRow, 1, "[지역내 지점수 : " + nBrchNum + "] [지역내 직원수 : " + nBrchEmpNum + "]");
			grdTree.setitemmergerange(nBankRow, 1, 4);

			nBrchNum = 0;
			nBrchEmpNum = 0;

			grdTree.setitemtext(nBrchRow, 1, "[지점내 직원수 : " + nEmpNum + "]");
			grdTree.setitemmergerange(nBrchRow, 1, 4);

			sPreBank = sBank;
			nBankRow = grdTree.insertitem(sBank, 1, 2, sBank, "");
			// factory.consoleprint("nBankRow = " + nBankRow);
		}

		// 지점 노드 추가
		if(sPreBranch != sBranch) {
			grdTree.setitemtext(nBrchRow, 1, "[지점내 직원수 : " + nEmpNum + "]");
			grdTree.setitemmergerange(nBrchRow, 1, 4);

			nEmpNum = 0;

			sPreBranch = sBranch;
			nBrchRow = grdTree.insertitem(sBranch, 0, 0, sBank + sBranch, sBank);

			nBrchNum = nBrchNum + 1;
		}

		// 직원 노드 추가
		treeData = grdPredata.getitemtext(nRow, 2);
		iRow = grdTree.insertitem(treeData, 3, 3, "", sBank + "" + sBranch);

		factory.consoleprint("iRow = " + iRow);
		
		nEmpNum = nEmpNum + 1;
		nBrchEmpNum = nBrchEmpNum + 1;

		// 직원 정보 설정
		for(nCol = 3; nCol < grdPredata.getcolumncount(); nCol++) {
			grdTree.setitemtext(iRow, nCol - 2, grdPredata.getitemtext(nRow, nCol));
		}
	}

	// 마지막 은행 및 지점 정보 설정
	grdTree.setitemtext(nBankRow, 1, "[지역내 지점수 : " + nBrchNum + "] [지역내 직원수 : " + nBrchEmpNum + "]");
	grdTree.setitemmergerange(nBankRow, 1, 4);

	grdTree.setitemtext(nBrchRow, 1, "[지점내 직원수 : " + nEmpNum + "]");
	grdTree.setitemmergerange(nBrchRow, 1, 4);
}

function screen_on_load()
{
	grdPredata.setvisible(false);
}