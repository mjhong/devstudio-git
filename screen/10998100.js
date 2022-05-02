var m_tst_dscd            ="";  //테스트구분코드       
var m_rgs_dt              ="";  //등록일자             
var m_bz_dscd             ="";  //업무구분코드         
var m_scrn_no             ="";  //화면번호             
var m_rgs_sno             ="";  //등록일련번호         
var m_act_stcd            ="";  //조치상태코드         
var m_rgs_ttl             ="";  //등록제목             
var m_dft_cts             ="";  //결함내용             
var m_tst_dft_tp_cd       ="";  //테스트결함유형코드   
var m_acp_dt              ="";  //접수일자             
var m_acp_empno           ="";  //접수사원번호         
var m_prcsr_nm            ="";  //처리자성명           
var m_prcs_chrg_empno     ="";  //처리담당사원번호     
var m_prcs_prch_nm        ="";  //처리담당자성명       
var m_dft_prcs_cts        ="";  //결함처리내용         
var m_prr_cplt_dt         ="";  //예정완료일자         
var m_rl_cplt_dt          ="";  //실제완료일자         
var m_lst_aprv_empno      ="";  //최종승인사원번호     
var m_aprv_dttm           ="";  //승인일시             
var m_aprv_yn             ="";  //승인여부             
var m_blnt_bdcd           ="";  //소속부점코드         
var m_blnt_sctn_bdcd_nm   ="";  //소속부문부점코드명   
var m_blnt_team_bdcd      ="";  //소속팀부점코드       
var m_blnt_team_bdcd_nm   ="";  //소속팀부점코드명     
var m_brdp_tlnm           ="";  //부점전화번호         
var m_prch_tlnm           ="";  //담당자전화번호       
var m_rgs_atch_fle_ctl    ="";  //등록첨부파일목록     
var m_act_atch_fle_ctl    ="";  //조치첨부파일목록     
var m_rgs_emp_nm          ="";  //등록사원명           
var m_scrn_nm             ="";  //화면명        
var m_frs_rgs_empno       ="";  //최초등록사원번호  
var m_frs_rgs_dttm        ="";  //등록일시  

var m_excelFlag           ="";  //엑셀저장여부
var m_allQueryFlag        ="";  //전체조회여부

var m_empnoFlag           ="";  //사원조회 flag (1:조치자, 2:등록자)


var m_bCreate = false;
var m_bRead = false;
var m_bUpdate = false;
var m_bDelete = false;

//--------------------------------------------------------------
// 처리구분 설정 
// 설정 아이템 구분자 = ';'
// 설정 아이템 구성 = 코드,데이타,권한구분
// 권한구분 = C(입력), R(조회), U(수정), D(삭제)
//--------------------------------------------------------------
var m_strTranTypeSet = "1,조회,R";


function GetTestSeq(strBZCD)
{
	var strDate = factory.getsystemtime("%Y%M%D");
		return "2";
//	if (GVAL.strRunMode == GVAL.RUN_REL) // 운영
//	{
//		if(strDate < "20111023")
//		{
//			return "1";
//		}
//		else if(strDate < "20111203")
//		{
//			return "2";
//		}
//		else
//		{
//			return "3";
//		}
//	}
////		else if(strDate < "20111113")
////		{
////			return "5";
////		}
////		else if(strDate < "20111120")
////		{
////			return "6";
////		}
////		else if(strDate < "20111125")
////		{
////			return "7";
////		}
////		else return "7";
////	}
//	else
//	{
//		if(strDate < "20111023")
//		{
//			return "1";
//		}
//		else if(strDate < "20111203")
//		{
//			return "2";
//		}
//		else
//		{
//			return "3";
//		}
//	}
//		else if(strDate < "20111113")
//		{
//			return "5";
//		}
//		else if(strDate < "20111120")
//		{
//			return "6";
//		}
//		else if(strDate < "20111125")
//		{
//			return "7";
//		}
//		else return "7";		
//	}
}
//======================================================================
// TEST 시행차수 설정 End
//======================================================================


function screen_on_load()
{

	// 소속부점코드 
	this.snda000101r_outstr_sub.setcolumnhidden(this.snda000101r_outstr_sub.getcolumn("blnt_bdcd"),true);
	this.snda000101r_outstr_sub.setcolumnexcelrw(this.snda000101r_outstr_sub.getcolumn("blnt_bdcd"), false);
	//소속부점코드명
	this.snda000101r_outstr_sub.setcolumnhidden(this.snda000101r_outstr_sub.getcolumn("blnt_sctn_bdcd_nm"),true);
	this.snda000101r_outstr_sub.setcolumnexcelrw(this.snda000101r_outstr_sub.getcolumn("blnt_sctn_bdcd_nm"), false);
	//소속팀부점코드
	this.snda000101r_outstr_sub.setcolumnhidden(this.snda000101r_outstr_sub.getcolumn("blnt_team_bdcd"),true);
	this.snda000101r_outstr_sub.setcolumnexcelrw(this.snda000101r_outstr_sub.getcolumn("blnt_team_bdcd"), false);
	//팀주점코드명
	this.snda000101r_outstr_sub.setcolumnhidden(this.snda000101r_outstr_sub.getcolumn("blnt_team_bdcd_nm"),true);
	this.snda000101r_outstr_sub.setcolumnexcelrw(this.snda000101r_outstr_sub.getcolumn("blnt_team_bdcd_nm"), false);
	//부점전화번호
	this.snda000101r_outstr_sub.setcolumnhidden(this.snda000101r_outstr_sub.getcolumn("brdp_tlnm"),true);
	this.snda000101r_outstr_sub.setcolumnexcelrw(this.snda000101r_outstr_sub.getcolumn("brdp_tlnm"), false);
	
	this.btnInqUsr.setenable(false);
	//prcs_chrg_empno.setenable(false);
//	if (GVAL.strRunMode == GVAL.RUN_REL) // 운영
//	{	 
//		if (GVAL.strTranDate < "20110910")
//	    {
//			tst_dscd.setselectedcode("2"); //통합테스트 2차
//		}
//		else if (GVAL.strTranDate < "20111017")
//		{
//			tst_dscd.setselectedcode("3"); //시범점
//		}
//		else if (GVAL.strTranDate < "20111114")
//		{
//			tst_dscd.setselectedcode("4");  //전점		
//		}
//		else
//		{
//			tst_dscd.setselectedcode("0");  //운영시스템
//		}
//	}
//	else
//	{
//		tst_dscd.setselectedcode("8");  //추진단 테스트		
//	}

	if (GVAL.strRunMode == GVAL.RUN_REL) // 운영
	{
		this.tst_dscd.setinputtype(2);        //업무구분(1:활성화, 2:비활성화)
		this.bz_dscd.setfocus();
	}
	else
	{
		this.tst_dscd.setinputtype(1);        //업무구분(1:활성화, 2:비활성화)
		this.tst_dscd.setfocus();
	}
	var strScrId = "";
	//var scrFrame = GVAL.MDIManager.getchildscreeninstance(GVAL.MDIManager.gettabitemfocus());
	var scrFrame = GVAL.MIDDLE_TAB.getchildscreeninstance(GVAL.MIDDLE_TAB.gettabitemfocus());
	if(factory.isobject(scrFrame) == true){
		var mbsFrame = scrFrame.getmembers(XFD_JAVASCRIPT);
		var scrMain  = mbsFrame.tabBizScreen.getchildscreeninstance(mbsFrame.tabBizScreen.gettabitemfocus())
		if(factory.isobject(scrMain) == true){
			strScrId = scrMain.getscreenid();
		}	
	}
	var strUrl = GFN.GetScreenUrlById(GFN.SubString(strScrId, 0, 6));
//	screen.alert(strUrl);
	
	var strUrl = strUrl.split("/");
	var strBzDscd = strUrl[2]; // 개발계 적용시에는 룰에맞게 strUrl[1]로 사용
	var strBzDscdDev = strUrl[1]; // 개발계 적용시에는 룰에맞게 strUrl[1]로 사용
//	screen.alert(" strBzDscd     : "+GetTestSeq(strBzDscd));
//	screen.alert(" strBzDscdDev  : "+strBzDscdDev);
	
	//테스트 시행차수 setting	
	this.tst_dscd.setselectedindex(this.GetTestSeq(strBzDscd)-2);
	
	this.btnNext.setenable(false);
	//임시
	var strDate = factory.getsystemtime("%Y%M%D");
	var endDate = factory.getsystemtime("%Y%M%D");
	//factory.consoleprint("AAAAAAAAA : " + GVAL.strSaleDate);
	//조회기간 설정
	//inq_st_dt.settext( TIME.CalculateMonth( 1, "-", GVAL.strSaleDate) );
	//inq_st_dt.settext( TIME.CalculateDate( 3, "-", GVAL.strSaleDate) );
	strDate = TIME.CalculateDate(7, "-", strDate);
//	alert(new Date(strDate));
//	screen.alert(strDate);
	this.inq_st_dt.settext(strDate);
	this.inq_nd_dt.settext(endDate);
	
	//inq_st_dt.settext(factory.getsystemtime("%Y%M%D"));
	this.bz_dscd.addstring("00:전체");
    this.bz_dscd.setselectedcode("00");          //업무구분코드
	this.act_stcd.setselectedcode("0");          //조치상태
    this.tst_dft_tp_cd.setselectedcode("0");     //결함유형 (1:결함, 2:질문)

	m_excelFlag      ="N";  //엑셀저장여부
	m_allQueryFlag   ="N";
	//StartTran();

	// 화면 연계에 의한 호출 시 자동 조회
	if(GFN.IsLinkOpen(this.screen) == true)
	{
		var scrCall = GFN.GetCallScreen(this.screen);
		if(scrCall == null)
			return;

		this.ProcessLink(scrCall);
	}
}

//-----------------------------------------------------------------------------
// 화면 연계 함수
//-----------------------------------------------------------------------------
function ProcessLink(scrCall)
{
	var mbsCall = scrCall.getmembers(XFD_JAVASCRIPT);
	var strCallScreenID = scrCall.getscreenid();
	switch(strCallScreenID)
	{
		case "10998700":
			// 시스템 셋팅
			this.tst_dscd.setselectedindex(mbsCall.tst_dscd.getselectedindex());

			// 업무구분 셋팅
			this.bz_dscd.setselectedcode(mbsCall.snda000104u_outstr_sub.getitemtext( mbsCall.snda000104u_outstr_sub.getselectrow(), mbsCall.snda000104u_outstr_sub.getcolumn("bz_dscd")));

			// 호출화면의 선택로우 넘버
			var selCol = mbsCall.snda000104u_outstr_sub.getselectcolumn();
			// 조치상태코드
			var strAtStcd = "";

			// 선택된컬럼별 조치상태코드 셋팅
			switch(selCol)
			{
				case 2 : strAtStcd = "0"; break;
				case 3 : strAtStcd = "1"; break;
				case 4 : strAtStcd = "2"; break;
				case 5 : strAtStcd = "3"; break;
				case 6 : strAtStcd = "4"; break;
				case 7 : strAtStcd = "5"; break;
				case 8 : strAtStcd = "6"; break;
				default : strAtStcd = "0"; break;
			}
			
			// 조치상태코드
			this.act_stcd.setselectedcode(strAtStcd);
			
			// 오류조치 조회가 개발자별일때
			if(mbsCall.dev_clk.getcheck() == true)
			{

			}

			break;

		default:
			break;
	}
}


//=====================================================================
//    거래 처리 함수
//=====================================================================
function StartTran()
{
	this.next_ky.settext("0000000");
	this.snda000101r_outstr_sub.deleteall();
	// 송신처리
	TRAN_HTTP.SendTranData(this.screen);
}


function snda000101r_outstr_sub_on_itemdblclick(objInst, nDblClickRow, nDblClickColumn, bBtnClick, nImgIndex, strImgUrl)
{

    m_tst_dscd           = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,0 ); //테스트구분코드          
    m_rgs_dt             = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,1 ); //등록일자                
    m_bz_dscd            = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,2 ); //업무구분코드            
    m_scrn_no            = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,3 ); //화면번호                
    m_rgs_sno            = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,4 ); //등록일련번호            
    m_scrn_nm            = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,5 ); //화면명                  
    m_act_stcd           = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,6 ); //조치상태코드            
    m_rgs_ttl            = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,7 ); //등록제목                
    m_dft_cts            = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,8 ); //결함내용                
    m_tst_dft_tp_cd      = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,9 ); //테스트결함유형코드      
    m_acp_dt             = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,10); //접수일자                
    m_acp_empno          = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,11); //접수사원번호            
    m_prcsr_nm           = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,12); //처리자성명              
    m_prcs_chrg_empno    = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,13); //처리담당사원번호        
    m_prcs_prch_nm       = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,14); //처리담당자성명          
    m_dft_prcs_cts       = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,15); //결함처리내용            
    m_prr_cplt_dt        = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,16); //예정완료일자            
    m_rl_cplt_dt         = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,17); //실제완료일자            
    m_lst_aprv_empno     = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,18); //최종승인사원번호        
    m_aprv_dttm          = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,19); //승인일시                
    m_aprv_yn            = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,20); //승인여부                
    m_blnt_bdcd          = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,21); //소속부점코드            
    m_blnt_sctn_bdcd_nm  = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,22); //소속부문부점코드명      
    m_blnt_team_bdcd     = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,23); //소속팀부점코드          
    m_blnt_team_bdcd_nm  = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,24); //소속팀부점코드명        
    m_brdp_tlnm          = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,25); //부점전화번호            
    m_prch_tlnm          = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,26); //담당자전화번호          
    m_rgs_atch_fle_ctl   = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,27); //등록첨부파일목록        
    m_act_atch_fle_ctl   = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,28); //조치첨부파일목록        
    m_frs_rgs_empno      = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,29); //최초등록사원번호       
    m_rgs_emp_nm         = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,30); //등록사원명            
    m_frs_rgs_dttm       = this.snda000101r_outstr_sub.getitemtext(nDblClickRow,31); //등록일시            

	var strPopReturn = GFN.LoadPopTranScreen("109985P0", "/ERRTEST/109985P0", "오류 접수 및 조치", 0, 0, 700, 600, true, this.screen);

    if (strPopReturn =="3")  //거래 후 닫힘
	{
		this.StartTran();
	}

}

function btnNext_on_mouseup(objInst)
{
	// 거래 처리 진행중이면 return;
	if(GFN.IsProcessing(this.screen))
		return;

	// 그리드 모드 설정
	GFN.SetGridMode(this.screen, this.snda000101r_outstr_sub, "APPEND");

	// 송신처리
	TRAN_HTTP.SendTranData(this.screen);
}

function screen_on_trancomplete(mapid, result, recv_userheader, recv_code, recv_msg, recv_data)
{
	if(GFN.GetNextYN(this.screen) == true){
		this.btnNext.setenable(true);
		m_allQueryFlag  ="N";

		if (m_excelFlag =="Y")
		{
			this.btnNext_on_mouseup(this.btnNext);
		}
	}else{
		this.btnNext.setenable(false);
		if (this.snda000101r_outstr_sub.getrowcount() > 0)
		{
			m_allQueryFlag ="Y";
		}

		if (m_excelFlag =="Y" && this.snda000101r_outstr_sub.getrowcount() > 0)
		{
			this.excel_btn_on_mouseup(this.excel_btn);
		}
	}
	//서비스 작업중임으로 임시로 데이터 입력부분, 나중에 주석처리
	//AddTestData();
	

}
function AddTestData()
{
	this.snda000101r_outstr_sub.additemex(1, "20110711", true, false);
	this.snda000101r_outstr_sub.additemex(1, "20110715", true, false);
	this.snda000101r_outstr_sub.additemex(1, "20110719", true, false);
	for(var i = 0; i< 10; i++)
	{
		this.snda000101r_outstr_sub.additem();
		this.snda000101r_outstr_sub.setitemtext(i, 0, "1");
		this.snda000101r_outstr_sub.setitemtext(i, 1, "20110711");
		this.snda000101r_outstr_sub.setitemtext(i, 2, "NH");
		this.snda000101r_outstr_sub.setitemtext(i, 3, "TRN001");
		this.snda000101r_outstr_sub.setitemtext(i, 4, "111111111");
		this.snda000101r_outstr_sub.setitemtext(i, 5, "단건처리오류보고");
		this.snda000101r_outstr_sub.setitemtext(i, 6, "2");
		this.snda000101r_outstr_sub.setitemtext(i, 7, "단건처리오류보고");
		this.snda000101r_outstr_sub.setitemtext(i, 8, "오류보고테스트");
		this.snda000101r_outstr_sub.setitemtext(i, 9, "5");
		this.snda000101r_outstr_sub.setitemtext(i, 10, "20110711");
		this.snda000101r_outstr_sub.setitemtext(i, 11, "S1111");
		this.snda000101r_outstr_sub.setitemtext(i, 12, "홍길동");
		this.snda000101r_outstr_sub.setitemtext(i, 13, "S2222");
		this.snda000101r_outstr_sub.setitemtext(i, 14, "홍길순");
		this.snda000101r_outstr_sub.setitemtext(i, 15, "해당로직추가");
		this.snda000101r_outstr_sub.setitemtext(i, 16, "20110715");
		this.snda000101r_outstr_sub.setitemtext(i, 17, "20110715");
		this.snda000101r_outstr_sub.setitemtext(i, 18, "S3333");
		this.snda000101r_outstr_sub.setitemtext(i, 19, "20110715140020");
		this.snda000101r_outstr_sub.setitemtext(i, 20, "Y");
		this.snda000101r_outstr_sub.setitemtext(i, 21, "0001");
		this.snda000101r_outstr_sub.setitemtext(i, 22, "RP중개");
		this.snda000101r_outstr_sub.setitemtext(i, 23, "1001");
		this.snda000101r_outstr_sub.setitemtext(i, 24, "0002");
		this.snda000101r_outstr_sub.setitemtext(i, 25, "0211112222");
		this.snda000101r_outstr_sub.setitemtext(i, 26, "01000001111");
		this.snda000101r_outstr_sub.setitemtext(i, 27, "MainScreen_TRN00100__20110726153635875.jpg;MainScreen___20110506144534421.jpg");
		this.snda000101r_outstr_sub.setitemtext(i, 28, "Message_TRN00100__20110726153634750.jpg");
		this.snda000101r_outstr_sub.setitemtext(i, 29, "S4444");
		this.snda000101r_outstr_sub.setitemtext(i, 30, "한예슬");
		this.snda000101r_outstr_sub.setitemtext(i, 31, "20110711140020");
		
	}
}

function btnSaveApproval_on_mouseup(objInst)
{
	var strPopReturn = GFN.LoadPopTranScreen("109984P0", "/ERRTEST/109984P0", "통합단말 결함 및 질문 등록", 0, 0, 700, 320, true, this.screen);
    if (strPopReturn =="3")  //거래 후 닫힘
	{
		this.StartTran();
	}
}


function prcs_chrg_empno_on_keydown(objInst, keycode, bctrldown, bshiftdown, baltdown, bnumpadkey)
{
	if (keycode == 8)	//back space
	{
		this.prcs_prch_nm.settext("");
	}
	//사원번호 5자리가 입력되었을때
//	if (prcs_chrg_empno.gettext.length == 5)
//	{
//		m_empnoFlag = "1"; //조치자
//		strUsEmpno = prcs_chrg_empno.gettext();
//		strUsrNm = "";
//
//		//히든팝업여부 true(히든팝업으로 호출)/false(기본팝업으로 호출)
//		m_strHiddenFlag = true;
//
//		GFN.LoadHiddenPopTranScreen("102003P0", "/ERRTEST/102003P0", "사용자조회", 0, 0, 600, 410, true, screen, true);
//
//		//사원번호SET
//		prcs_chrg_empno.settext(strUsEmpno);
//		
//		//사원명SET
//		prcs_prch_nm.settext(strUsrNm);
//	}
	return 0;
}

function frs_rgs_empno_on_keydown(objInst, keycode, bctrldown, bshiftdown, baltdown, bnumpadkey)
{
	if (keycode == 8)	//back space
	{
		this.frs_rgs_nm.settext("");
	}
//	//사원번호 5자리가 입력되었을때
//	if (frs_rgs_empno.gettext.length == 5)
//	{
//		m_empnoFlag = "2"; //등록자
//		strUsEmpno = frs_rgs_empno.gettext();
//		strUsrNm = "";
//
//		//히든팝업여부 true(히든팝업으로 호출)/false(기본팝업으로 호출)
//		m_strHiddenFlag = true;
//
//		GFN.LoadHiddenPopTranScreen("102003P0", "/ERRTEST/102003P0", "사용자조회", 0, 0, 600, 410, true, screen, true);
//
//		//사원번호SET
//		frs_rgs_empno.settext(strUsEmpno);
//		
//		//사원명SET
//		frs_rgs_nm.settext(strUsrNm);
//	}

	return 0;
}

function btnInqUsr_on_mouseup(objInst)
{
	m_empnoFlag = "1"; //조치자
	strUsEmpno = this.prcs_chrg_empno.gettext();
	strUsrNm = "";
	m_strHiddenFlag = false;

	GFN.LoadPopTranScreen("102003P0", "/ERRTEST/102003P0", "사용자조회", 0, 0, 600, 410, true, this.screen);		
factory.consoleprint("strUsEmpno : " + strUsEmpno + " : strUsrNm : " + strUsrNm);
	this.prcs_chrg_empno.settext(strUsEmpno);
	this.prcs_prch_nm.settext(strUsrNm);
}

function btnInqUsr2_on_mouseup(objInst)
{
	m_empnoFlag = "2"; //등록자
	strUsEmpno = this.frs_rgs_empno.gettext();
	strUsrNm = "";
	m_strHiddenFlag = false;

	GFN.LoadPopTranScreen("102003P0", "/ERRTEST/102003P0", "사용자조회", 0, 0, 600, 410, true, this.screen);		

	this.frs_rgs_empno.settext(strUsEmpno);
	this.frs_rgs_nm.settext(strUsrNm);
}

function SetData_102003()
{
	strParentEmpno = "";

	//히든팝업으로 호출할때에만 조회조건을 팝업으로 전달한다.
	if (m_strHiddenFlag != true)
	{
		return;
	}
    if (m_empnoFlag =="1")
	{
	
	    //사원번호
		strParentEmpno = this.prcs_chrg_empno.gettext();
	}
	else
	{
	    //사원번호
		strParentEmpno = this.frs_rgs_empno.gettext();
	}

}


function screen_on_activate()
{
	if(this.tst_dscd.getselectedcode() != "" && this.inq_st_dt.gettext() != "" && this.inq_nd_dt.gettext() != "" && this.bz_dscd.getselectedcode() != "" && this.act_stcd.getselectedcode() != "" && this.tst_dft_tp_cd.getselectedcode() != "" )
	{
		this.StartTran();
	}
}



function tst_dscd_on_focusout(objInst, focusouttype)
{
	var strText = this.tst_dscd.gettext();
	var nSelIndex = this.tst_dscd.getselectedindex();
	if(strText.length > 0 && nSelIndex == -1)
	{
		GFN.ShowMsg(this.screen, "[" + strText + "]는 시행차수 항목에 유효하지 않은 값입니다.", XFD_MB_ERROR, XFD_MB_OK);
		this.tst_dscd.settext("");
		this.tst_dscd.setfocus();
		this.tst_dscd.showselectbox(true);
	}
}

function act_stcd_on_focusout(objInst, focusouttype)
{
	var strText = this.act_stcd.gettext();
	var nSelIndex = this.act_stcd.getselectedindex();
	if(strText.length > 0 && nSelIndex == -1)
	{
		GFN.ShowMsg(this.screen, "[" + strText + "]는 조치상태 항목에 유효하지 않은 값입니다.", XFD_MB_ERROR, XFD_MB_OK);
		this.act_stcd.settext("");
		this.act_stcd.setfocus();
		this.act_stcd.showselectbox(true);
	}
}

function tst_dft_tp_cd_on_focusout(objInst, focusouttype)
{
	var strText = this.tst_dft_tp_cd.gettext();
	var nSelIndex = this.tst_dft_tp_cd.getselectedindex();
	if(strText.length > 0 && nSelIndex == -1)
	{
		GFN.ShowMsg(this.screen, "[" + strText + "]는 결함유형 항목에 유효하지 않은 값입니다.", XFD_MB_ERROR, XFD_MB_OK);
		this.tst_dft_tp_cd.settext("");
		this.tst_dft_tp_cd.setfocus();
		this.tst_dft_tp_cd.showselectbox(true);
	}
}

function bz_dscd_on_focusout(objInst, focusouttype)
{
	var strText = this.bz_dscd.gettext();
	var nSelIndex = this.bz_dscd.getselectedindex();
	if(strText.length > 0 && nSelIndex == -1)
	{
		GFN.ShowMsg(this.screen, "[" + strText + "]는 업무구분 항목에 유효하지 않은 값입니다.", XFD_MB_ERROR, XFD_MB_OK);
		this.bz_dscd.settext("");
		this.bz_dscd.setfocus();
		this.bz_dscd.showselectbox(true);
	}
}

function btnFrDt_on_mouseup(objInst)
{
	TIME.ShowCalendar(this.screen, this.inq_st_dt);
}

function btnToDt_on_mouseup(objInst)
{
	TIME.ShowCalendar(this.screen, this.inq_nd_dt);

}

function excel_btn_on_mouseup(objInst)
{
	if(this.snda000101r_outstr_sub.getrowcount() < 1)
	{
		GFN.ShowMsg(this.screen,"조회 된 건수가 없습니다.조회 처리 후 엑셀 저장하십시요");
		return;
	}

    m_excelFlag ="Y";

	if (m_allQueryFlag != "Y")
	{
		this.btnNext_on_mouseup(this.btnNext);
		return;
	}
//	if(GFN.GetNextYN(screen) == true){
//		GFN.ShowMsg(screen,"다음 건이 있습니다.전체 항목 조회 후 엑셀 저장하십시요");
//		return;
//	}

	var strFileName = "C:\\" + this.tst_dscd.getselectedcomment() + "_" + this.bz_dscd.getselectedcode() + "_" + this.act_stcd.getselectedcode() + "_" + GVAL.strTranDate + ".xls";
	this.snda000101r_outstr_sub.saveexceldirect(strFileName, true, true, true, 1, true);

    m_excelFlag    ="N";

	//그리드의내역을 excel로저장하는 API
	//saveexcel과 다른점은 다이얼로그창의 옵션들을 미리 조정하여
	//띄울수 있다는 점이다.
	//
	//**파라미터
	//String : strFileName(파일이름)
	//Bool : bIncludePattern(패턴저장여부)
	//Bool : bIncludeHeader(헤더저장여부)
	//Bool : bAfterCloseWnd(다이얼로그창닫기여부)
	//Bool : bAfterOpenExcel(엑셀열기여부)
	//Short : bOverWriteOption(아래 설명참조)
	//Bool : bShowSaveWnd(다이얼로그창보이기여부)

	//**nOverWriteOption 상수
	//0 : 물어보기
	//1 : 무조건 덮어쓰기
	//2 : 시트에 이어붙이기
	//3 : 존재하면 그냥 return
}

function scrn_no_on_change()
{

	
	if(this.scrn_no.gettext().length == 6)
	{
		this.scrn_nm.settext("");
		var strTitle = GFN.GetScreenNameById(GFN.SubString(this.scrn_no.gettext(), 0, 6));
		if (strTitle =="")
		{
			this.scrn_nm.settext(strTitle);
			GFN.ShowMsg(this.screen,"화면번호를 잘못 입력하였습니다.");
			this.scrn_no.setfocus();
			return false;	
		}
		else
		{
			this.scrn_nm.settext(strTitle);
		}
	}
}

function scrn_no_on_keydown(objInst, keycode, bctrldown, bshiftdown, baltdown, bnumpadkey)
{
	if (keycode == 8)	//back space
	{
		this.scrn_nm.settext("");
	}
	return 0;
}

function btnRgs_on_mouseup(objInst)
{
	var strPopReturn = GFN.LoadPopTranScreen("109988P0", "/ERRTEST/109988P0", "타시스템 결함 및 질문 등록", 0, 0, 700, 320, true, this.screen);
    if (strPopReturn =="3")  //거래 후 닫힘
	{
		this.StartTran();
	}
}

function btnSelect_on_mouseup(objInst)
{
	this.StartTran();
}

function test_on_click(objInst)
{
	GFN.LoadPopTranScreen("109986P0", "/ERRTEST/109986P0", "등록 유형 도움말", 0, 0, 700, 600, true, this.screen);
}