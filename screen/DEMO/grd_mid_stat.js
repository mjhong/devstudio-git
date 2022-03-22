function btnSubSum_on_mouseup(objInst)
{
	// 다중소계
	// 첫번째 보일 소계는 0, 1번 컬럼 데이터를 기준으로 소계를 보여줌
	grid1.addstatmid(XFD_GRID_MIDSTAT_SUM, "0,1", "시별 소계", 1, factory.rgb(0, 0, 0), factory.rgb(239, 249, 188));
	
	// 두번째 보일 소계는 0번 컬럼 데이터를 기준으로 소계를 보여줌	
	grid1.addstatmid(XFD_GRID_MIDSTAT_SUM, "0", "지역 소계", 0, factory.rgb(0, 0, 0), factory.rgb(254, 240, 201));
	
	// 추가된 소계 정보로 소계가 나타나도록 refresh호출
	// 만약 초기 데이터가 없고 조회시에 그리드에 데이터 추가 되는 경우에는 굳이 지금 시점에 refresh할 필요없음.
	grid1.refresh();
	
	var rowCount = grid1.getrowcount();
	var colCount = grid1.getcolumncount();
	var i;
	
	// 통계 칼럼 텍스트를 굵게 표시
	for(i = 0; i < rowCount; i++) {
		if(grid1.ismidstatrow(i)) {
			for(j = 0; j < colCount; j++) {	
				grid1.setitemfont(i, j, "맑은 고딕", 9, true, false, false);
			}
		}
	}
}