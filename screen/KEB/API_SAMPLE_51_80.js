function btn_setcolumnpatternmask_on_mouseup(objInst)
{
	// 그리드 생성
	var grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.setcolumnwidth(0, 100);
	grid.addcolumn();
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	
	// 편집가능하게 변경
	grid.setcolumneditable(0, true);
	grid.setcolumneditable(1, true);
	
	// 패턴 변경
	grid.setcolumnpattern(0, "999999-9999999");
	
	// 이전 패턴 마스크 출력
	console.log("이전 패턴 마스크: " + grid.getcolumnpatternmask(0));
	
	// 마스크 패턴 지정
	var a = grid.setcolumnpatternmask(0, "12312312313"); 
	console.log(a);
	// 이후 패턴 마스크 출력
	console.log("이후 패턴 마스크: " + grid.getcolumnpatternmask(0));
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1234561234567");
	grid.setitemtext(1, 0, "1111112222222");
}

function btn_getitempatternmask_on_mouseup(objInst)
{
	// 그리드 생성
	var grdList = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grdList.addcolumn();
	grdList.addcolumn();
	grdList.setcolumnwidth(0, 100);
	
	// 로우 생성
	grdList.addrow();
	
	// 편집가능하게 변경
	grdList.setcolumneditable(0, true);
	grdList.setcolumneditable(1, true);
	
	// 패턴 변경
	grdList.setitempattern(0, 0,"999999-9999999", 0);
	
	// 이전 패턴 마스크 출력
	var z;
	z = grdList.getitempatternmask(0, 0);
	console.log("이전 패턴 마스크: " +z);
	//console.log("이전 패턴 마스크: " + grdList.getitempatternmask(0, 0));
	
	// 마스크 패턴 지정
	var a = grdList.setitempatternmask(0, 0, "999xx999"); // 마스크 패턴 지정
	console.log(a);
	// 이후 패턴 마스크 출력
	var c;
	//c = grdList.getitempatternmask(0, 0);
	//c = grdList.getitempatternmask("A", 0);
	c = grdList.getitempatternmask(0, "A");
	console.log("이후 패턴 마스크: " + c);
	
	// 테스트 값 설정
	var x = grdList.setitemtext(0,0,"1234561234567");
	console.log(x);
}

function btn_setitempatternmask_on_mouseup(objInst)
{
	// getitempatternmask API와 동일
	btn_getitempatternmask_on_mouseup();
}

function btn_getcolumnsorting_on_mouseup(objInst)
{
	var ret;
	
	// 그리드 생성
	var grd = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grd.addcolumn();
	grd.addcolumn();
	grd.setcolumnwidth(0, 100);
	
	// 로우 생성
	grd.addrow();
	grd.addrow();
	grd.addrow();
	
	// 편집가능하게 변경
	grd.setcolumneditable(0, true);
	grd.setcolumneditable(1, true);
	
	// 테스트 값 설정
	grd.setitemtext(0, 0, "1");
	grd.setitemtext(1, 0, "2");
	grd.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grd.setitemtext(0, 1, "1");
	grd.setitemtext(1, 1, "2");
	grd.setitemtext(2, 1, "3");
	
	// 헤더 클릭시 정렬 지정
	grd.setheaderclicksort(true);
	
	// 0열 헤더 클릭시 정렬 수행 여부를 반환
	ret = grd.getcolumnsorting(0);
	console.log("0열 이전 = " + ret);

	// 1열 헤더 클릭시 정렬 수행 여부를 반환
	ret = grd.getcolumnsorting(1);
	console.log("1열 이전 = " + ret);
	
	// 헤더 클릭시 0열의 정렬 수행 여부 설정
	var a = grd.setcolumnsorting(0, true);
	//var a = grd.setcolumnsorting(0, -1);
	console.log(a);
	
	// 0열 헤더 클릭시 정렬 수행 여부를 반환
	ret = grd.getcolumnsorting(0);
	console.log("0열 이후 = " + ret);
}

function btn_setcolumnsorting_on_mouseup(objInst)
{
	// getcolumnsorting API와 동일
	btn_getcolumnsorting_on_mouseup();
}

function btn_getcolumnsortorder_on_mouseup(objInst)
{
	// 그리드 생성
	var grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 200);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	grid.setcolumnwidth(0, 100);
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 편집가능하게 변경
	grid.setcolumneditable(0, true);
	grid.setcolumneditable(1, true);
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "2");
	grid.setitemtext(3, 0, "2");
	grid.setitemtext(4, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "0");
	grid.setitemtext(1, 1, "0");
	grid.setitemtext(2, 1, "1");
	grid.setitemtext(3, 1, "2");
	grid.setitemtext(4, 1, "3");
	
	// 헤더 클릭시 정렬 지정
	grid.setheaderclicksort(true);
	
	// 정렬 설정
	var strOP = "0:ASC,1:DESC";
	grid.multisortex(strOP, false);
	
	// 정렬 대상 컬럼 구하기
	var arrSortColumns = grid.getsortcolumns();
	if(arrSortColumns == null) {
		console.log("arrSortColumns is null");
		return;
	}
	
	console.log("sort column count : " + arrSortColumns.length);
	for(var nCount = 0;nCount < arrSortColumns.length;nCount++) {
		var nColumn = arrSortColumns[nCount];
		var nSortOrder = grid.getcolumnsortorder(nColumn);
		if(nSortOrder == XFD_GRID_SORT_ASC) {
			console.log("sort column : " + nColumn + " order : 오름차순");
		} else if(nSortOrder == XFD_GRID_SORT_DES) {
			console.log("sort column : " + nColumn + " order : 내림차순");
		}
	}
}

function btn_getheaderclicksort_on_mouseup(objInst)
{
	// 첫번째 그리드 생성
	var grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	grid.setcolumnwidth(0, 100);
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "1");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "3");
	
	//그리드 헤더 클릭시 정렬 여부를 가져온다
	console.log("첫번째 그리드 헤더 클릭시 정렬여부 : " + grid.getheaderclicksort());
	
	// 두번째 그리드 생성
	grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 105, 200, 100);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	grid.setcolumnwidth(0, 100);
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "1");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "3");
	
	//var a = grid.setheaderclicksort(true);
	var a = grid.setheaderclicksort("AAA");
	console.log(a);
	
	//그리드 헤더 클릭시 정렬 여부를 가져온다
	console.log("두번째 그리드 헤더 클릭시 정렬여부 : " + grid.getheaderclicksort());
}

function btn_setheaderclicksort_on_mouseup(objInst)
{
	// getheaderclicksort API와 동일
	btn_getheaderclicksort_on_mouseup();
}

function btn_getmultisort_on_mouseup(objInst)
{
	// 첫번째 그리드 생성
	var grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 200);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	grid.setcolumnwidth(0, 100);
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "2");
	grid.setitemtext(3, 0, "2");
	grid.setitemtext(4, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "0");
	grid.setitemtext(1, 1, "3");
	grid.setitemtext(2, 1, "2");
	grid.setitemtext(3, 1, "1");
	grid.setitemtext(4, 1, "4");
	
	// 헤더 클릭시 정렬 지정
	grid.setheaderclicksort(true);
	
	// 이전 정렬 옵션 출력
	console.log("이전 getmultisort = " + grid.getmultisort());
	
	// 정렬 설정
	var strOP = "0:DESC,1:ASC";
	grid.multisortex(strOP, false);
	
	// 이후 정렬 옵션 출력
	console.log("이후 getmultisort = " + grid.getmultisort());
}

function btn_getsortcolumns_on_mouseup(objInst)
{
	// 그리드 생성
	var grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	grid.setcolumnwidth(0, 100);
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 편집가능하게 변경
	grid.setcolumneditable(0, true);
	grid.setcolumneditable(1, true);
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "1");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "3");
	
	// 헤더 클릭시 정렬 지정
	grid.setheaderclicksort(true);
	
	var arrSortColumns = grid.getsortcolumns();
	console.log("[이전] sort column count : " + arrSortColumns.length);	
	
	// 정렬 설정
	var strOP = "0:ASC,1:DESC";
	grid.multisortex(strOP, false);
	
	// 정렬 대상 컬럼 구하기
	var arrSortColumns = grid.getsortcolumns();
	if(arrSortColumns == null) {
		console.log("arrSortColumns is null");
		return;
	}
	
	console.log("[이후] sort column count : " + arrSortColumns.length);	
}

function btn_multisort_on_mouseup(objInst)
{
	// 그리드 생성
	var grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	grid.setcolumnwidth(0, 100);
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 편집가능하게 변경
	grid.setcolumneditable(0, true);
	grid.setcolumneditable(1, true);
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "1");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "3");
	
	// 헤더 클릭시 정렬 지정
	grid.setheaderclicksort(true);
	
	// 멀티정렬 설정 다이얼로그 열기 
	grid.multisort();
}

function btn_multisortex_on_mouseup(objInst)
{
	// getmultisort API와 동일
	btn_getmultisort_on_mouseup();
}

function btn_releasesort_on_mouseup(objInst)
{
	// 그리드 생성
	var grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 정렬 설정
	var strOP = "0:DESC";
	grid.multisortex(strOP, false);
	
	// 초기화 전 정렬옵션 출력
	console.log("초기화 전 정렬옵션 = " + grid.getmultisort());
	
	// 정렬 초기화
	grid.releasesort();
	
	// 초기화 후 정렬옵션 출력
	console.log("초기화 전 정렬옵션 = " + grid.getmultisort());
}

function btn_sort_on_mouseup(objInst)
{
	// 그리드 생성
	var grid = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "3");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "1");
	
	// 오름차순 정렬
	grid.sort(1, 1);
}

function btn_clearallstatuserrow_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 200, 
		height: 200,
		//statistics_row: "4,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:"
		statistics_row: "2,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:"
		//statistics_row: "6,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:"
	};
	
	var grid = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);

	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "3");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "1");
	
	// 값 설정전
	console.log("통계행 (0,0)의 데이터 : " + grid.getstatisticsrowdisplaytext(0, 0));
	grid.setstatuserrowtext(0, 0, "홀수행 합계");

	// 값 설정후
	console.log("통계행 (0,0)의 데이터 : " + grid.getstatisticsrowdisplaytext(0, 0));
	
	// 통계행 내용 지우기
	var a = grid.clearallstatuserrow();
	console.log(a);
	
	// 내용 지운 후
	console.log("통계행 (0,0)의 데이터 : " + grid.getstatisticsrowdisplaytext(0, 0));
}

function btn_clearstatuserrow_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 200, 
		height: 200,
		statistics_row: "2,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:6,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,"
		//statistics_row: "3,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:6,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,"
		//statistics_row: "6,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:6,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,"
};
	
	var grid = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "3");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "1");
	
	// 테스트값 입력
	grid.setstatuserrowtext(0, 0, "홀수행 합계");
	grid.setstatuserrowtext(1, 0, "홀수행 합계");
	
	// 통계행 내용 지우기
	var a = grid.clearstatuserrow(0);
	console.log(a);
	var b = grid.clearstatuserrow(1);
	console.log(b);
}

function btn_getcolumnstatrowtype_on_mouseup(objInst)
{
	// 그리드 생성
	var grdNormal = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grdNormal.addcolumn();
	grdNormal.addcolumn();
	
	// 1번째 칼럼을 갯수로 설정
	grdNormal.setcolumnstatrowtype(1, 2);
	
    // 칼럼 갯수를 구함
    var nColumnCount = grdNormal.getcolumncount();
    var i;
	
    for(i = 0; i < nColumnCount; i++) {
        // 컬럼의 통계 타입을 구함
        var nStatRowType = grdNormal.getcolumnstatrowtype(i);
        if(nStatRowType == 0) {
            console.log(i + "번째 칼럼 : 합계");
        }
        else if(nStatRowType == 1) {
            console.log(i + "번째 칼럼 : 평균");
        }
        else if(nStatRowType == 2) {
            console.log(i + "번째 칼럼 : 갯수");	
        } 
        else if(nStatRowType == 3) {
            console.log(i + "번째 칼럼 : 최소값");	
        }
        else if(nStatRowType == 4) {
            console.log(i + "번째 칼럼 : 최대값");	
        } 
        else if(nStatRowType == 5) {
            console.log(i + "번째 칼럼 : 사용자정의");	
        }
        else {
            console.log("알 수 없는 통계 형식..");	
        }
    }
}

function btn_getcolumnstatvalue_on_mouseup(objInst)
{
	// 그리드 생성
	var grd = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grd.addcolumn();
	grd.addcolumn();
	
	// 로우 생성
	grd.addrow();
	grd.addrow();
	grd.addrow();
	
	// 테스트 값 설정
	grd.setitemtext(0, 0, "1");
	grd.setitemtext(1, 0, "2");
	grd.setitemtext(2, 0, "3");
	
	// 통계 출력
	console.log("SUM = " + grd.getcolumnstatvalue(0, 0));
	console.log("AVER = " + grd.getcolumnstatvalue(0, 1));
	console.log("COUNT = " + grd.getcolumnstatvalue(0, 2));
	console.log("MIN = " + grd.getcolumnstatvalue(0, 3));
	console.log("MAX = " + grd.getcolumnstatvalue(0, 4));
}

function btn_getitemstatvalue_on_mouseup(objInst)
{
	var objStatVal, nStatVal;
	
	// 그리드 생성
	var grdMerge = screen.createobject(XFD_CTRLKIND_GRID, 0, 0, 200, 100);
	
	// 컬럼 생성
	grdMerge.addcolumn();
	grdMerge.addcolumn();
	
	// 로우 생성
	grdMerge.addrow();
	grdMerge.addrow();
	
	// 테스트 값 설정
	grdMerge.setitemtext(0, 0, "1");
	grdMerge.setitemtext(1, 0, "1");
	
	// 테스트 값 설정
	grdMerge.setitemtext(0, 1, "2");
	grdMerge.setitemtext(1, 1, "2");
	
	// 컬럼 타입 숫자로 설정
	grdMerge.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grdMerge.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);

	// 0행 0열 ~ 1행 1열 까지의 합계 계산
    nStatVal = grdMerge.getitemstatvalue(0, 0, 0, 1, 1);
	console.log("SUM = " + nStatVal);

	// 0행 0열 ~ 1행 1열 까지의 합계, 평균, 개수 계산
    objStatVal = grdMerge.getitemstatvalue([0, 1], 0, 0, 1, 1);
	console.log("SUM = " + objStatVal.sum);
	console.log("AVER = " + objStatVal.avg);
	
	// 0행 0열 ~ 1행 1열 까지의 합계, 평균, 개수, 최소, 최대 계산
    objStatVal = grdMerge.getitemstatvalue(-1, 0, 0, 1, 1);
	console.log("SUM = " + objStatVal.sum);
	console.log("AVER = " + objStatVal.avg);
	console.log("COUNT = " + objStatVal.count);
	console.log("MIN = " + objStatVal.min);
	console.log("MAX = " + objStatVal.max);	
}

function btn_getstatcolumncount_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 400, 
		height: 200,
		statistics_column: "0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,합계,:0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,합계,:"
	};
	
	var grid = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	
	// 컬럼 타입 숫자로 설정
	grid.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grid.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "3");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "1");
	
	// 통계열의 개수 출력
	console.log("통계열의 개수 : " + grid.getstatcolumncount());
}


function btn_getstatcolumnstattype_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 400, 
		height: 200,
		statistics_column: "0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,합계,:0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,합계,:"
	};
	
	var grdPivot = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grdPivot.addcolumn();
	grdPivot.addcolumn();
	
	// 컬럼 타입 숫자로 설정
	grdPivot.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grdPivot.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);
	
	// 로우 생성
	grdPivot.addrow();
	grdPivot.addrow();
	grdPivot.addrow();
	
	// 테스트 값 설정
	grdPivot.setitemtext(0, 0, "1");
	grdPivot.setitemtext(1, 0, "2");
	grdPivot.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grdPivot.setitemtext(0, 1, "3");
	grdPivot.setitemtext(1, 1, "2");
	grdPivot.setitemtext(2, 1, "1");
		
	var nStatType = 0;
	
	// 0: 합계, 1: 평균, 2: 갯수, 3: 최소값, 4: 최대값, 5: 컬럼별 정의, 6: 사용자 정의
    // -1: 오류
	nStatType = grdPivot.getstatcolumnstattype(0);
	console.log("이전 Stat Type = " + nStatType);

	// 평균으로 변경
	grdPivot.setstatcolumnstattype(0, 1);

	// 변경 후 출력
	nStatType = grdPivot.getstatcolumnstattype(0);
	console.log("이후 Stat Type = " + nStatType);
}

function btn_getstatisticscoltext_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 400, 
		height: 200,
		statistics_column: "0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,합계,:0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,합계,:"
	};
	
	var grd = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grd.addcolumn();
	grd.addcolumn();
	
	// 컬럼 타입 숫자로 설정
	grd.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grd.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);
	
	// 로우 생성
	grd.addrow();
	grd.addrow();
	grd.addrow();
	
	// 테스트 값 설정
	grd.setitemtext(0, 0, "1");
	grd.setitemtext(1, 0, "2");
	grd.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grd.setitemtext(0, 1, "1");
	grd.setitemtext(1, 1, "2");
	grd.setitemtext(2, 1, "3");
	
	console.log("통계열 (1,0)의 데이터 : " + grd.getstatisticscoltext(1, 0));
}

function btn_getstatisticsrowtext_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 250, 
		width: 400, 
		height: 200,
		//statistics_row: "1,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:"
		statistics_row: "0,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:1,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,",
		statistics_column: "0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,사용자정의,:1,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,사용자정의,:"
		
	};
	
	var grd = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grd.addcolumn();
	grd.addcolumn();
	
	// 컬럼 타입 숫자로 설정
	grd.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grd.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);
	
	// 로우 생성
	grd.addrow();
	grd.addrow();
	grd.addrow();
	
	// 테스트 값 설정
	grd.setitemtext(0, 0, "1");
	grd.setitemtext(1, 0, "2");
	grd.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grd.setitemtext(0, 1, "3");
	grd.setitemtext(1, 1, "2");
	grd.setitemtext(2, 1, "1");
	
	console.log("통계행 (1,0)의 데이터 : " + grd.getstatisticsrowtext(0, 0));
}

function btn_getstatofstattext_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 400, 
		height: 200,
		statistics_row: "0,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:1,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,",
		statistics_column: "0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,사용자정의,:1,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,사용자정의,:"
	};
	
	var grid = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grid.addcolumn();
	grid.addcolumn();
	
	grid.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grid.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);
	
	// 로우 생성
	grid.addrow();
	grid.addrow();
	grid.addrow();
	
	// 테스트 값 설정
	grid.setitemtext(0, 0, "1");
	grid.setitemtext(1, 0, "2");
	grid.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grid.setitemtext(0, 1, "4");
	grid.setitemtext(1, 1, "2");
	grid.setitemtext(2, 1, "1");

	
	// 통계열 0번째 통계행 1번째에 해당하는 통계의 통계데이터 셀에 데이터 설정
	var ret = grid.setstatofstattext(0, 1, "1234");
	console.log("결과: " + ret);
	grid.setstatofstattext(0, 0, "2468");
	var a = grid.getstatofstattext(0, 0);
	console.log(a);
}

function btn_getstatrowcount_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 200, 
		height: 200,
		statistics_row: "0,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:0,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:"
	};
	
	var grd = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grd.addcolumn();
	grd.addcolumn();
	
	// 컬럼 타입 숫자로 설정
	grd.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grd.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);
	
	// 로우 생성
	grd.addrow();
	grd.addrow();
	grd.addrow();
	
	// 테스트 값 설정
	grd.setitemtext(0, 0, "1");
	grd.setitemtext(1, 0, "2");
	grd.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grd.setitemtext(0, 1, "3");
	grd.setitemtext(1, 1, "2");
	grd.setitemtext(2, 1, "1");
	
	console.log("통계행의 개수 : " + grd.getstatrowcount());
}

function btn_setcolumnstatrowtype_on_mouseup(objInst)
{
	// getcolumnstatrowtype API와 동일
	btn_getcolumnstatrowtype_on_mouseup();
}

function btn_setstatcolumnstattype_on_mouseup(objInst)
{
	// getstatcolumnstattype API와 동일
	btn_getstatcolumnstattype_on_mouseup();
}

function btn_setstatcolumntitle_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 400, 
		height: 200,
		statistics_column: "0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,합계,:0,80,0,1,00000000,00D2D2D2,00000000,00FFFFFF,0,1,\"\",0,,합계,:"
	};
	
	var grd = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grd.addcolumn();
	grd.addcolumn();
	
	// 컬럼 타입 숫자로 설정
	grd.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grd.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);
	
	// 로우 생성
	grd.addrow();
	grd.addrow();
	grd.addrow();
	
	// 테스트 값 설정
	grd.setitemtext(0, 0, "1");
	grd.setitemtext(1, 0, "2");
	grd.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grd.setitemtext(0, 1, "1");
	grd.setitemtext(1, 1, "2");
	grd.setitemtext(2, 1, "3");
		
	// 1번 Index 통계열의 제목을 설정합니다.
	var ret = grd.setstatcolumntitle(1, "1234");
	//var ret = grd.setstatcolumntitle(1);
	//var ret = grd.setstatcolumntitle(1, "1234");
	console.log("결과 = " + ret);
}

function btn_setstatofstattext_on_mouseup(objInst)
{
	// getstatofstattext API와 동일
	btn_getstatofstattext_on_mouseup();
}

function btn_setstatrowtitle_on_mouseup(objInst)
{
	var objProp = {
		x: 0, 
		y: 0, 
		width: 200, 
		height: 200,
		statistics_row: "0,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:0,00000000,00FFFFFF,00000000,00D2D2D2,00000001,00000001,'',,:"
	};
	
	var grd = screen.createobjectex(XFD_CTRLKIND_GRID, objProp);
	
	// 컬럼 생성
	grd.addcolumn();
	grd.addcolumn();
	
	// 컬럼 타입 숫자로 설정
	grd.setcolumndatatype(0, XFD_GRID_DATA_NUMERIC);
	grd.setcolumndatatype(1, XFD_GRID_DATA_NUMERIC);
	
	// 로우 생성
	grd.addrow();
	grd.addrow();
	grd.addrow();
	
	// 테스트 값 설정
	grd.setitemtext(0, 0, "1");
	grd.setitemtext(1, 0, "2");
	grd.setitemtext(2, 0, "3");
	
	// 테스트 값 설정
	grd.setitemtext(0, 1, "3");
	grd.setitemtext(1, 1, "2");
	grd.setitemtext(2, 1, "1");
	
	// 1번 Index 통계행의 제목을 설정합니다.
	var ret = grd.setstatrowtitle(1, "합계");
	console.log("결과 = " + ret);
}