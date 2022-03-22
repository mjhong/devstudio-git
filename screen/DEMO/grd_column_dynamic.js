function SetItem(row, col, text, option) {
	var is_bold, is_underline, is_italic;
	
	if(option == undefined) { 
		option = {}; 
	}
	
	grdList.setitemtextex(row, col, text, false);
	
	if(option.text_horzalign === undefined) {
		grdList.setitempropex(row, col, "text_horzalign", XFD_HORZALIGN_CENTER, false);
	}
	else {
		grdList.setitempropex(row, col, "text_horzalign", option.text_horzalign, false);
	}
	
	if(option.backcolor !== undefined) {
		grdList.setitempropex(row, col, "backcolor", option.backcolor, false);
	}
	
	if(option.forecolor !== undefined) {
		grdList.setitempropex(row, col, "forecolor", option.forecolor, false);
	}	

	if(option.image !== undefined) {
		grdList.setitempropex(row, col, "image", option.image, false);
	}
		
	if(option.input_type !== undefined) {
		grdList.setitempropex(row, col, "input_type", option.input_type, false);
	}

	if(option.editable !== undefined) {
		grdList.setitempropex(row, col, "editable", option.editable, false);
	}
	
	is_bold = false;
	is_underline = false;
	is_italic = false;
	is_linethrough = false;
	if(option.is_bold === true) { is_bold = true; }
	if(option.is_italic === true) { is_italic = true; }
	if(option.is_underline === true) { is_underline = true; }
	if(is_bold || is_underline || is_italic) {
		grdList.setitempropex(row, col, "font", ["굴림체", 9, is_bold, is_italic, is_underline, is_linethrough], false);
	}
}

function btnLeftColumn_on_mouseup(objInst)
{
	var i;
	
	for(i = 0; i < 4; i++) {
		grdList.addcolumn(false);
		grdList.setcolumnwidth(i, 60);
	}
	
	grdList.addcolumn(false);
	grdList.setcolumnwidth(i, 60, true);
	
	// for(i = 0; i < 19; i++) { grdList.additem(); }
	
	// 구분
	grdList.setitemmergerangeex(0, 0, 1, 4);		// 구분
	SetItem(0, 0, "구분", { backcolor: [225, 212, 227] });

	// 종합평가점수
	grdList.setitemmergerangeex(2, 0, 2, 4);		// 종합평가점수
	SetItem(2, 0, "종합평가점수", { backcolor: [255, 222, 173], forecolor: [255, 61, 0], is_bold: true });

	// 가격
	grdList.setitemmergerangeex(3, 0, 7, 0);		// 가격
	SetItem(3, 0, "가격", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(3, 1, 4, 1);		// 견적가
	SetItem(3, 1, "견적가", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(3, 2, 3, 4);		// 구매금액
	SetItem(3, 2, "구매금액", { is_bold: true, forecolor: [4, 104, 205], backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(4, 2, 4, 3);		// 단가
	SetItem(4, 2, "단가", { backcolor: [255, 222, 173] });
	
	SetItem(4, 4, "20", { backcolor: [255, 222, 173] });
	
	SetItem(5, 1, "설계원가", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(5, 2, 5, 3);		// (구매금액1
	SetItem(5, 2, "(구매금액1", { text_horzalign: XFD_HORZALIGN_RIGHT, is_bold: true, forecolor: [4, 104, 205], backcolor: [239, 230, 240] });
	
	SetItem(5, 4, "단가)", { text_horzalign: XFD_HORZALIGN_LEFT, backcolor: [239, 230, 240] });

	grdList.setitemmergerangeex(6, 1, 7, 1);		// 절감계획
	SetItem(6, 1, "절감계획", { backcolor: [239, 230, 240] });
	
	SetItem(6, 2, "Y+1", { backcolor: [239, 230, 240] });
	SetItem(6, 3, "Y+2", { backcolor: [239, 230, 240] });
	SetItem(6, 4, "Y+3", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(7, 2, 7, 4);		// 3년 제안금액
	SetItem(7, 2, "3년 제안금액", { backcolor: [239, 230, 240] });
	
	// 5STAR
	grdList.setitemmergerangeex(8, 0, 10, 0);		// 5STAR
	SetItem(8, 0, "5STAR", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(8, 1, 8, 3);		// 품질 5스타
	SetItem(8, 1, "품질 5스타", { backcolor: [233, 246, 229] });
	
	SetItem(8, 4, "30", { backcolor: [233, 246, 229] });
	
	grdList.setitemmergerangeex(9, 1, 9, 3);		// skqdlq 5스타
	SetItem(9, 1, "납입 5스타", { backcolor: [233, 246, 229] });
	
	SetItem(9, 4, "5", { backcolor: [233, 246, 229] });
	
	grdList.setitemmergerangeex(10, 1, 10, 3);		// 기술 5스타
	SetItem(10, 1, "기술 5스타", { backcolor: [233, 246, 229] });
	
	SetItem(10, 4, "15", { backcolor: [233, 246, 229] });
	
	grdList.setitemmergerangeex(11, 0, 14, 0);		// 평가
	SetItem(11, 0, "평가", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(11, 1, 11, 3);		// 설계 사양제안 평가
	SetItem(11, 1, "설계 사양제안 평가", { backcolor: [239, 230, 240] });
	SetItem(11, 4, "10", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(12, 1, 12, 3);		// 개발능력 평가
	SetItem(12, 1, "개발능력 평가", { backcolor: [239, 230, 240] });	
	SetItem(12, 4, "20", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(13, 1, 13, 3);		// 심의평가점수
	SetItem(13, 1, "심의평가점수", { backcolor: [239, 230, 240] });	
	SetItem(13, 4, "(+)", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(14, 1, 14, 3);		// 감점점수
	SetItem(14, 1, "감점점수", { backcolor: [239, 230, 240] });		
	SetItem(14, 4, "(-)", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(15, 0, 16, 2);		// PPM단위 품질목표제
	SetItem(15, 0, "PPM단위 품질목표제", { backcolor: [239, 230, 240] });
	SetItem(15, 3, "신차", { backcolor: [239, 230, 240] });
	SetItem(15, 4, "-2~1", { backcolor: [239, 230, 240] });
	
	SetItem(16, 3, "양산차", { backcolor: [239, 230, 240] });
	SetItem(16, 4, "-2~1", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(17, 0, 17, 4);		// 재무신용등급
	SetItem(17, 0, "재무신용등급", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(18, 0, 18, 2);		// 가동율(%)
	SetItem(18, 0, "가동율(%)", { backcolor: [239, 230, 240] });
	
	grdList.setitemmergerangeex(18, 3, 18, 4);		// M/SHARE(%)
	SetItem(18, 3, "M/SHARE(%)", { backcolor: [239, 230, 240] });
	
	grdList._refreshgrid();
}

function btnDataColumn_on_mouseup(objInst)
{
	var i;
	var base_col = grdList.getcolumncount();
	
	for(i = 0; i < 5; i++) {
		col = grdList.addcolumn();
		grdList.setcolumnwidth(col, 40);
	}
	
	col = grdList.addcolumn();
	grdList.setcolumnwidth(col, 40, true);
		
	DataColumnMerge(base_col);
	
	grdList._refreshgrid();
}

function DataColumnMerge(base_col)
{
	grdList.setitemmergerangeex(0, base_col, 0, base_col + 5);
	SetItem(0, base_col, "TEST3", { text_horzalign: XFD_HORZALIGN_LEFT, forecolor: [4, 104, 205], backcolor: [225, 212, 227], is_underline: true, is_bold: true });
	
	grdList.setitemmergerangeex(1, base_col, 1, base_col + 1);
	SetItem(1, base_col, "추천", { backcolor: [233, 246, 229] });
	
	SetItem(1, base_col + 2, "", { input_type: 1, editable: true, backcolor: [233, 246, 229] });
	
	grdList.setitemmergerangeex(1, base_col + 3, 1, base_col + 5);
	SetItem(1, base_col + 3, "AAA3", { backcolor: [233, 246, 229], is_bold: true });			
	
	grdList.setitemmergerangeex(2, base_col, 2, base_col + 3);
	SetItem(2, base_col, "정상", { backcolor: [255, 222, 173], is_bold: true });				
	
	grdList.setitemmergerangeex(2, base_col + 4, 2, base_col + 5);
	SetItem(2, base_col + 4, "79.6", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0], backcolor: [255, 222, 173], is_bold: true });					
	
	grdList.setitemmergerangeex(3, base_col, 3, base_col + 3);
	SetItem(3, base_col, "834.43", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [4, 104, 205], is_bold: true });				
	
	grdList.setitemmergerangeex(3, base_col + 4, 3, base_col + 5);
	SetItem(3, base_col + 4, "(억)", { text_horzalign: XFD_HORZALIGN_LEFT });
	
	grdList.setitemmergerangeex(4, base_col, 4, base_col + 3);
	SetItem(4, base_col, "127,074.44", { text_horzalign: XFD_HORZALIGN_RIGHT, backcolor: [255, 222, 173], is_underline: true });				

	grdList.setitemmergerangeex(4, base_col + 4, 4, base_col + 5);
	SetItem(4, base_col + 4, "18.0", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0], backcolor: [255, 222, 173] });
	
	grdList.setitemmergerangeex(5, base_col, 5, base_col + 3);
	SetItem(5, base_col, "834.38", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [4, 104, 205], is_bold: true });				
	
	grdList.setitemmergerangeex(5, base_col + 4, 5, base_col + 5);
	SetItem(5, base_col + 4, "(억)", { text_horzalign: XFD_HORZALIGN_LEFT });
	
	grdList.setitemmergerangeex(6, base_col, 6, base_col + 1);
	SetItem(6, base_col, "2.00", { text_horzalign: XFD_HORZALIGN_CENTER, is_italic: true });	
	
	grdList.setitemmergerangeex(6, base_col + 2, 6, base_col + 3);
	SetItem(6, base_col + 2, "2.00", { text_horzalign: XFD_HORZALIGN_CENTER, is_italic: true });	
	
	grdList.setitemmergerangeex(6, base_col + 4, 6, base_col + 5);
	SetItem(6, base_col + 4, "2.00", { text_horzalign: XFD_HORZALIGN_CENTER, is_italic: true });		
	
	grdList.setitemmergerangeex(7, base_col, 7, base_col + 3);
	SetItem(7, base_col, "13.16", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [4, 104, 205], is_bold: true });				
	
	grdList.setitemmergerangeex(7, base_col + 4, 7, base_col + 5);
	SetItem(7, base_col + 4, "(억)", { text_horzalign: XFD_HORZALIGN_LEFT });								
	
	grdList.setitemmergerangeex(8, base_col, 8, base_col + 3);
	// SetItem(8, base_col, "", { image: "/chk_un.png", backcolor: [233, 246, 229] });
	SetItem(8, base_col, "", { image: "/DEMO/ico_star_b_3.png", backcolor: [233, 246, 229] });
	
	grdList.setitemmergerangeex(8, base_col + 4, 8, base_col + 5);
	SetItem(8, base_col + 4, "20.2", { text_horzalign: XFD_HORZALIGN_RIGHT, is_bold: true, forecolor: [255, 61, 0], backcolor: [233, 246, 229], editable: true });									
	
	grdList.setitemmergerangeex(9, base_col, 9, base_col + 3);
	// SetItem(9, base_col, "", { image: "/chk_chk_dis.png", backcolor: [233, 246, 229] });
	SetItem(9, base_col, "", { image: "/DEMO/ico_star_b_4.png", backcolor: [233, 246, 229] });
	
	grdList.setitemmergerangeex(9, base_col + 4, 9, base_col + 5);
	SetItem(9, base_col + 4, "5.0", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0], backcolor: [233, 246, 229], editable: true });										
	
	grdList.setitemmergerangeex(10, base_col, 10, base_col + 3);
	// SetItem(10, base_col, "", { image: "/chk_un.png", backcolor: [233, 246, 229] });
	SetItem(10, base_col, "", { image: "/DEMO/ico_star_b_5.png", backcolor: [233, 246, 229] });
	
	grdList.setitemmergerangeex(10, base_col + 4, 10, base_col + 5);
	SetItem(10, base_col + 4, "12.6", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0], backcolor: [233, 246, 229], editable: true });											
	
	grdList.setitemmergerangeex(11, base_col, 11, base_col + 3);
	SetItem(11, base_col, "내역", { text_horzalign: XFD_HORZALIGN_RIGHT, is_underline: true });
	
	grdList.setitemmergerangeex(11, base_col + 4, 11, base_col + 5);
	SetItem(11, base_col + 4, "9.1", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0] });												

	grdList.setitemmergerangeex(12, base_col, 12, base_col + 3);
	SetItem(12, base_col, "내역", { text_horzalign: XFD_HORZALIGN_RIGHT, is_underline: true });
	
	grdList.setitemmergerangeex(12, base_col + 4, 12, base_col + 5);
	SetItem(12, base_col + 4, "14.6", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0] });												
	
	grdList.setitemmergerangeex(13, base_col, 13, base_col + 5);
	SetItem(13, base_col, "0.0", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0] });													
	
	grdList.setitemmergerangeex(14, base_col, 14, base_col + 5);
	SetItem(14, base_col, "0.0", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0] });														
	
	grdList.setitemmergerangeex(15, base_col, 15, base_col + 5);
	SetItem(15, base_col, "-", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0] });															
	
	grdList.setitemmergerangeex(16, base_col, 16, base_col + 5);
	SetItem(16, base_col, "-", { text_horzalign: XFD_HORZALIGN_RIGHT, forecolor: [255, 61, 0] });																
	
	grdList.setitemmergerangeex(17, base_col, 17, base_col + 5);
	SetItem(17, base_col, "BBB", { text_horzalign: XFD_HORZALIGN_CENTER, backcolor: [255, 222, 173] });																	

	grdList.setitemmergerangeex(18, base_col, 18, base_col + 2);
	SetItem(18, base_col, "0.0", { text_horzalign: XFD_HORZALIGN_RIGHT });																	
	
	grdList.setitemmergerangeex(18, base_col + 3, 18, base_col + 5);
	SetItem(18, base_col + 3, "0.0", { text_horzalign: XFD_HORZALIGN_RIGHT });	
}

function screen_on_load()
{
	for(i = 0; i < 19; i++) {
		grdList.additem();
	}
	
	btnLeftColumn_on_mouseup();
}

function grdList_on_itemeditcomplete(objInst, nRow, nColumn, strPrevItemText)
{
	var headColumnCount = 5;
	var dataColumnCount = 6;
	var item_value, item_image;
	var temp_column;
	
	if(nColumn < 5) { return 1; }

	// 별점 값 칼럼이 아닌 경우, 그냥 리턴
	temp_column = nColumn - headColumnCount;
	factory.consoleprint("temp_column % dataColumnCount = " + (temp_column % dataColumnCount));
	if((temp_column % dataColumnCount) != 4) { 
		return 1; 
	}
	
	// 별점 값 행이 아닌 경우, 그냥 리턴
	if(nRow < 8 || nRow > 10) { 
		return 1; 
	}
	
	factory.consoleprint("STAR VALUE");
	item_value = grdList.getitemtext(nRow, nColumn);
	item_value = parseFloat(item_value);
	if(isNaN(item_value) == false) {
		factory.consoleprint("item_value = " + item_value);
		
		if(item_value < 1) { item_image = ""; }
		else if(item_value < 2) { item_image = "/DEMO/ico_star_b_1.png"; }
		else if(item_value < 3) { item_image = "/DEMO/ico_star_b_2.png"; }
		else if(item_value < 4) { item_image = "/DEMO/ico_star_b_3.png"; }
		else if(item_value < 5) { item_image = "/DEMO/ico_star_b_4.png"; }
		else { item_image = "/DEMO/ico_star_b_5.png"; }
		
		grdList.setitemimage(nRow, nColumn - 4, item_image);
	}

	return 1;
}

function grdList_on_itemclick(objInst, nClickRow, nClickColumn)
{

}