var m_strTranCode    	= "SNDA000103U";       //거래처리할 MAP ID

//var m_serverPath = "/ksfcdat2/ndapp/data/";
var m_serverPath = GVAL.WEB_DATA_PATH + "/";

var m_imgType	   = "";
var m_imgPath	   = "";
var m_popScrWidth   = 0;
var m_popScrHeight  = 0;
var m_rgs_atch_fle_ctl  ="";  //등록파일목록
var m_stateFlag     = false;
var m_atch_fle1   = "";
var m_atch_fle2   = "";
var m_atch_fle3   = "";
var m_DownFile1   = "";
var m_DownFile2   = "";
var m_DownFile3   = "";


var m_strDelFlag    = "";   //1.삭제


/*---------------------------------------------------------------------
	102003P0(사용자조회) 팝업호출을 위한 멤버변수
---------------------------------------------------------------------*/
var strParentEmpno = "";	    //사원번호
var strUsEmpno     = "";	    //사원번호(받는변수)
var strUsrNm       = "";	    //사원명(받는변수)

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

function screen_on_load()
{

//	/*------------------------------------------------------------
//	요 부분은 팝업창에서 부모창 프레임에 접근하기 위해서는 항상 이렇게!
//	------------------------------------------------------------*/
//	var scrTranFrame = GFN.GetFrameByScreen(this.screen);			   //거래화면의 프레임 가져오기
//	var mbsTranFrame = scrTranFrame.getmembers(XFD_JAVASCRIPT);	//프레임의 멤버 인스턴스 가져오기
//	//부모창에서 입력데이터를 가져온다.
//	var m_scrParent = mbsTranFrame.m_scrParent;
//	m_mbsParent = m_scrParent.getmembers(XFD_JAVASCRIPT);          //실제 부모창의 컨트롤에 접근할 수 있는 객체
//					
//	m_tst_dscd          = GFN.Trim(m_mbsParent.m_tst_dscd         )  ; //테스트구분코드      O    
//	m_rgs_dt            = GFN.Trim(m_mbsParent.m_rgs_dt           )  ; //등록일자           O    
//	m_bz_dscd           = GFN.Trim(m_mbsParent.m_bz_dscd          )  ; //업무구분코드        O         
//	m_scrn_no           = GFN.Trim(m_mbsParent.m_scrn_no          )  ; //화면번호           O    
//	m_rgs_sno           = GFN.Trim(m_mbsParent.m_rgs_sno          )  ; //등록일련번호        O       
//	m_act_stcd          = GFN.Trim(m_mbsParent.m_act_stcd         )  ; //조치상태코드        O            
//	m_rgs_ttl           = GFN.Trim(m_mbsParent.m_rgs_ttl          )  ; //등록제목                
//	m_dft_cts           = GFN.Trim(m_mbsParent.m_dft_cts          )  ; //결함내용                
//	m_tst_dft_tp_cd     = GFN.Trim(m_mbsParent.m_tst_dft_tp_cd    )  ; //테스트결함유형코드      
//	m_acp_dt            = GFN.Trim(m_mbsParent.m_acp_dt           )  ; //접수일자                
//	m_acp_empno         = GFN.Trim(m_mbsParent.m_acp_empno        )  ; //접수사원번호            
//	m_prcsr_nm          = GFN.Trim(m_mbsParent.m_prcsr_nm         )  ; //처리자성명              
//	m_prcs_chrg_empno   = GFN.Trim(m_mbsParent.m_prcs_chrg_empno  )  ; //처리담당사원번호        
//	m_prcs_prch_nm      = GFN.Trim(m_mbsParent.m_prcs_prch_nm     )  ; //처리담당자성명          
//	m_dft_prcs_cts      = GFN.Trim(m_mbsParent.m_dft_prcs_cts     )  ; //결함처리내용            
//	m_prr_cplt_dt       = GFN.Trim(m_mbsParent.m_prr_cplt_dt      )  ; //예정완료일자            
//	m_rl_cplt_dt        = GFN.Trim(m_mbsParent.m_rl_cplt_dt       )  ; //실제완료일자            
//	m_lst_aprv_empno    = GFN.Trim(m_mbsParent.m_lst_aprv_empno   )  ; //최종승인사원번호        
//	m_aprv_dttm         = GFN.Trim(m_mbsParent.m_aprv_dttm        )  ; //승인일시                
//	m_aprv_yn           = GFN.Trim(m_mbsParent.m_aprv_yn          )  ; //승인여부                
//	m_blnt_bdcd         = GFN.Trim(m_mbsParent.m_blnt_bdcd        )  ; //소속부점코드            
//	m_blnt_sctn_bdcd_nm = GFN.Trim(m_mbsParent.m_blnt_sctn_bdcd_nm)  ; //소속부문부점코드명      
//	m_blnt_team_bdcd    = GFN.Trim(m_mbsParent.m_blnt_team_bdcd   )  ; //소속팀부점코드          
//	m_blnt_team_bdcd_nm = GFN.Trim(m_mbsParent.m_blnt_team_bdcd_nm)  ; //소속팀부점코드명        
//	m_brdp_tlnm         = GFN.Trim(m_mbsParent.m_brdp_tlnm        )  ; //부점전화번호            
//	m_prch_tlnm         = GFN.Trim(m_mbsParent.m_prch_tlnm        )  ; //담당자전화번호          
//	m_rgs_atch_fle_ctl  = GFN.Trim(m_mbsParent.m_rgs_atch_fle_ctl )  ; //등록첨부파일목록        
//	m_act_atch_fle_ctl  = GFN.Trim(m_mbsParent.m_act_atch_fle_ctl )  ; //조치첨부파일목록        
//	m_rgs_emp_nm        = GFN.Trim(m_mbsParent.m_rgs_emp_nm       )  ; //등록사원명              
//	m_scrn_nm           = GFN.Trim(m_mbsParent.m_scrn_nm          )  ; //화면명                  
//	m_frs_rgs_empno     = GFN.Trim(m_mbsParent.m_frs_rgs_empno    )  ; //최초등록사원번호   
//	m_frs_rgs_dttm      = GFN.Trim(m_mbsParent.m_frs_rgs_dttm     )  ; //등록일시   
//
//
//
//	if (m_frs_rgs_empno == GVAL.objUserInfo.strUserID )
//	{
//		this.btnDel.setvisible(true);
//	}
//	else
//	{
//		this.btnDel.setvisible(false);
//	}
//
//
//    this.frs_rgs_empno.settext(m_frs_rgs_empno); //작성자
//	this.rgs_emp_nm.settext(m_rgs_emp_nm);       //작성자명
//
//    this.rgs_dt.settext(m_rgs_dt); //등록일자 
//    this.frs_rgs_dttm.settext(m_frs_rgs_dttm); //등록일시
// 
//    this.blnt_bdcd.settext(m_blnt_bdcd        );          //소속부점코드      
//    this.blnt_sctn_bdcd_nm.settext(m_blnt_sctn_bdcd_nm);  //소속부문부점코드명
//    this.blnt_team_bdcd.settext(m_blnt_team_bdcd   );     //소속팀부점코드    
//    this.blnt_team_bdcd_nm.settext(m_blnt_team_bdcd_nm);  //소속팀부점코드명  
//    this.brdp_tlnm.settext(m_brdp_tlnm);                  //소속팀부점전화번호  
//    this.prch_tlnm.settext(m_prch_tlnm);                  //연락처 	
//
//
//	this.tst_dscd.setselectedcode(m_tst_dscd);            //테스트차수
//	this.bz_dscd.setselectedcode(m_bz_dscd);              //업무구분코드
//	this.bz_dscd.setinputtype(1);
//	this.bz_dscd2.setselectedcode(m_bz_dscd);             //업무구분코드(업무이관)
//	this.bz_dscd2.setinputtype(2);
//
//    this.scrn_no.settext(m_scrn_no);                      //화면번호 
//	this.scrn_no_nm.settext(m_scrn_nm);                   //화면명     
//    this.tst_dft_tp_cd.setselectedcode(m_tst_dft_tp_cd);  //테스트결함유형코드
//
// 
//    this.rgs_sno.settext(m_rgs_sno);                      //등록일련번호 
//    this.rgs_ttl.settext(m_rgs_ttl);                      //등록제목     
//    this.dft_cts.settext(m_dft_cts);                      //결함내용  
//
//    if (m_act_stcd =="2") //접수
//	{
//		this.act_stcd.setinputtype(1);                        //조치상태코드(필수)
//		this.act_stcd.setselectedcode(m_act_stcd);            //조치상태코드  
//		this.btnFrDt.setenable(true);          //달력
//		this.btnInqUsr.setenable(true);        //조치예정자 조회 도구
//		this.rl_cplt_dt_title.setvisible(false);
//		this.rl_cplt_dt.setvisible(false);
//
//		this.bz_dscd2.setinputtype(2);        //업무구분
//		this.prr_cplt_dt.setinputtype(1);     //조치예정일
//		this.btnFrDt.setenable(true);        //달력
//		this.prcs_chrg_empno.setinputtype(1); //조치예정자
//		this.btnInqUsr.setenable(true);      //조치예정자 조회
//		this.prcs_prch_nm.setinputtype(1);    //성명
//		this.dft_prcs_cts.setinputtype(1);    //조치내용
//	}
//    else if (m_act_stcd =="3") //조치완료
//	{
//		this.act_stcd.setinputtype(1);                        //조치상태코드(필수)
//		this.act_stcd.setselectedcode(m_act_stcd);            //조치상태코드  
//		this.btnFrDt.setenable(false);                        //달력
//		this.btnInqUsr.setenable(false);                      //조치예정자 조회 도구
//		this.rl_cplt_dt_title.setvisible(true);
//		this.rl_cplt_dt.setvisible(true);
//
//		this.bz_dscd2.setinputtype(2);        //업무구분
//		this.prr_cplt_dt.setinputtype(2);     //조치예정일
//		this.btnFrDt.setenable(false);        //달력
//		this.prcs_chrg_empno.setinputtype(2); //조치예정자
//		this.btnInqUsr.setenable(false);      //조치예정자 조회
//		this.prcs_prch_nm.setinputtype(2);    //성명
//		this.dft_prcs_cts.setinputtype(2);    //조치내용
//	}
//	else
//	{
//		this.act_stcd.setinputtype(1);                        //조치상태코드(필수)
//		this.act_stcd.setselectedcode(m_act_stcd);            //조치상태코드  
//		this.act_stcd.setfocus();
//		this.btnFrDt.setenable(true);          //달력
//		this.btnInqUsr.setenable(true);        //조치예정자 조회 도구
//		this.rl_cplt_dt_title.setvisible(false);
//		this.rl_cplt_dt.setvisible(false);
//
//		this.bz_dscd2.setinputtype(2);        //업무구분
//		this.prr_cplt_dt.setinputtype(2);     //조치예정일
//		this.btnFrDt.setenable(false);        //달력
//		this.prcs_chrg_empno.setinputtype(2); //조치예정자
//		this.btnInqUsr.setenable(false);      //조치예정자 조회
//		this.prcs_prch_nm.setinputtype(2);    //성명
//		this.dft_prcs_cts.setinputtype(2);    //조치내용
//	}
//
//
//
//	this.btnMainSearch.setvisible(false);
//
//
//    this.acp_dt.settext(m_acp_dt);                        //접수일자
//    this.acp_empno.settext(m_acp_empno);                  //접수사원번호  
//    this.prcsr_nm.settext(m_prcsr_nm);                    //처리자성명  
//
//
//	if (m_prr_cplt_dt == "")
//	{
//		if (m_act_stcd !="4" && m_act_stcd !="5" && m_act_stcd !="6" ) //보류,수용불가,추진단검토
//		{
//			this.prr_cplt_dt.settext(GVAL.strTranDate);           //조치예정일자  (당일) 
//		}
//		else
//		{
//			this.prr_cplt_dt.settext("");              //조치예정일자    
//		}  
//	}
//	else
//	{
//		this.prr_cplt_dt.settext(m_prr_cplt_dt);              //조치예정일자    
//	}
//
//	if (m_prcs_chrg_empno != "")
//	{
//		this.prcs_chrg_empno.settext(m_prcs_chrg_empno);              //조치예정자명    
//	}
//
//	if (m_prcs_prch_nm != "")
//	{
//		this.prcs_prch_nm.settext(m_prcs_prch_nm);              //조치예정자명    
//	}
//	if (m_dft_prcs_cts != "")
//	{
//		this.dft_prcs_cts.settext(m_dft_prcs_cts);              //조치내용    
//	}
//
//	if (m_rl_cplt_dt != "")
//	{
//		this.rl_cplt_dt.settext(m_rl_cplt_dt);              //조치완료일자    
//	}
//
//
//
//	//등록파일명
//	if (m_rgs_atch_fle_ctl != "")
//	{
//		var arrSetting = m_rgs_atch_fle_ctl.split(";");		  // 1차 구분자
//		m_atch_fle1   = arrSetting[0];
//		m_atch_fle2   = arrSetting[1];
//
//		if(m_atch_fle1 == undefined || m_atch_fle1 == null || m_atch_fle1.length == 0)
//		{
//			m_atch_fle1 ="";
//		}
//
//
//		if(m_atch_fle2 == undefined || m_atch_fle2 == null || m_atch_fle2.length == 0)
//		{
//			m_atch_fle2 ="";
//		}
//
//		if (m_atch_fle1 != "")
//		{
//			this.fldMainImgPath.settext(m_atch_fle1);
//			this.fldSvrMainImgPath.settext(m_serverPath + m_atch_fle1 );
//
//			this.btnMainImage.setvisible(true);
//			this.btnFileDown1.setvisible(true);
//
//		}
//		else
//		{
//			this.btnMainImage.setvisible(false);
//			this.btnFileDown1.setvisible(false);
//		}
//		
//		if (m_atch_fle2 != "")
//		{
//			this.fldPopImgPath.settext(m_atch_fle2);
//			this.fldSvrPopImgPath.settext(m_serverPath + m_atch_fle2 );
//
//			this.btnPopImage.setvisible(true);
//			this.btnFileDown2.setvisible(true);
//
//
//		}
//		else
//		{
//			this.btnPopImage.setvisible(false);
//			this.btnFileDown2.setvisible(false);
//		}
//	} 
//	else
//	{
//		this.btnMainImage.setvisible(false);
//		this.btnFileDown1.setvisible(false);
//		this.btnPopImage.setvisible(false);
//		this.btnFileDown2.setvisible(false);
//	} 
//
//	//조치파일명
//	if (m_act_atch_fle_ctl != "")
//	{
//		var arrSetting = m_act_atch_fle_ctl.split(";");		  // 1차 구분자
//		m_atch_fle3   = arrSetting[0];
//
//		if(m_atch_fle3 == undefined || m_atch_fle3 == null || m_atch_fle3.length == 0)
//		{
//			m_atch_fle3 ="";
//		}
//
//
//		if (m_atch_fle3 != "")
//		{
//			this.fldMainImgPath2.settext(m_atch_fle3);
//			this.fldSvrMainImgPath2.settext(m_serverPath + m_atch_fle3 );
//
//
//			this.btnMainImage2.setvisible(true);
//			this.btnFileDown3.setvisible(true);
//
//		}
//		else
//		{
//			this.btnMainImage2.setvisible(false);
//			this.btnFileDown3.setvisible(false);
//		}
//	} 
//	else
//	{
//		this.btnMainImage2.setvisible(false);
//		this.btnFileDown3.setvisible(false);
//	}
////	screen.alert(m_act_stcd);
////	if( m_act_stcd = "7" )
////	{
////		sendBtn.setvisible(false);
////	} else
////		sendBtn.setvisible(true);
////
////
////
////	screen.alert(act_stcd.getselectedcode());
//	if( this.act_stcd.getselectedcode() == "1" )
//		this.btnMainImage_on_mouseup(this.btnMainImage);
//		
}



//업로드 완료 후 거래 전송.
function screen_on_updowncomplete(bIsUpload,arrUpDownLocalParam,arrUpDownServerParam,bRet)
{
	if(bRet == true){				 //성공일 경우
		if(bIsUpload == true){		//업로드를 한 경우
			FTP.ClearUploadDownloadParam(this.screen,true);	//셋팅되어있는 파람을 삭제..반드시해야함

//			if(act_stcd.getselectedcode() == "4")  //업무이관
//			{
//				var str_bz_dscd = bz_dscd2.getselectedcode()
//				bz_dscd.setselectedcode(str_bz_dscd);              //업무구분코드
//				acp_dt.settext("");                                //접수일자
//			    acp_empno.settext("");                             //접수사원번호  
//			    prcsr_nm.settext("");                              //처리자성명 
//			}
			if(this.act_stcd.getselectedcode() == "4" || this.act_stcd.getselectedcode() == "5" || this.act_stcd.getselectedcode() == "6")  //보류,수용불가,추진단검코
			{
				this.acp_dt.settext("");                                //접수일자
			    this.acp_empno.settext("");                             //접수사원번호  
			 //   prcsr_nm.settext("");                              //처리자성명 
			}
			TRAN_HTTP.SendTranData(this.screen,"");
		}
		else
		{
			if (m_imgType =="MAIN")
			{
				if (m_atch_fle1.indexOf(".jpg") != -1 || m_atch_fle1.indexOf(".JPG") != -1 || m_atch_fle1.indexOf(".gif") != -1 || m_atch_fle1.indexOf(".GIF") != -1 || m_atch_fle1.indexOf(".bmp") != -1 || m_atch_fle1.indexOf(".BMP") != -1 || m_atch_fle1.indexOf(".png") != -1 || m_atch_fle1.indexOf(".PNG") != -1  || m_atch_fle1.indexOf(".tif") != -1 || m_atch_fle1.indexOf(".TIF") != -1)
	            {
					this.ViewMainFile();
				}
				else
				{
					//다운로드 파일 실행
					FILE.ExcuteProgram(m_DownFile1);  
				}
			}
			else if (m_imgType =="POP")
			{
				//이미지파일이면
				if (m_atch_fle2.indexOf(".jpg") != -1 || m_atch_fle2.indexOf(".JPG") != -1 || m_atch_fle2.indexOf(".gif") != -1 || m_atch_fle2.indexOf(".GIF") != -1 || m_atch_fle2.indexOf(".bmp") != -1 || m_atch_fle2.indexOf(".BMP") != -1 || m_atch_fle2.indexOf(".png") != -1 || m_atch_fle2.indexOf(".PNG") != -1 || m_atch_fle2.indexOf(".tif") != -1 || m_atch_fle2.indexOf(".TIF") != -1)
				{
					this.ViewPopFile();
				}
				else
				{
					//다운로드 파일 실행
					FILE.ExcuteProgram(m_DownFile2);  
				}
			}
			else if (m_imgType =="MAIN2")
			{
				//이미지파일이면
				if (m_atch_fle3.indexOf(".jpg") != -1 || m_atch_fle3.indexOf(".JPG") != -1 || m_atch_fle3.indexOf(".gif") != -1 || m_atch_fle3.indexOf(".GIF") != -1 || m_atch_fle3.indexOf(".bmp") != -1 || m_atch_fle3.indexOf(".BMP") != -1 || m_atch_fle3.indexOf(".png") != -1 || m_atch_fle3.indexOf(".PNG") != -1 || m_atch_fle3.indexOf(".tif") != -1 || m_atch_fle3.indexOf(".TIF") != -1)
				{
					this.ViewMainFile2();
				}
				else
				{
					//다운로드 파일 실행
					FILE.ExcuteProgram(m_DownFile3);  
				}
			}

		}
	}else{
		if(bIsUpload == true){		//업로드를 한 경우
			GFN.ShowMsg(this.screen,"파일 업로드 중 오류가 발생하였습니다.");
		}
		else
		{
			GFN.ShowMsg(this.screen,"파일 다운로드 중 오류가 발생하였습니다.");
		}
	}
}


function btnMainImage_on_mouseup(objInst)
{
	if(this.fldMainImgPath.gettext() == "") return;

	m_imgType = "MAIN";

	//현재업로드 혹은 다운로드 중이면 리턴처리
	if(m_stateFlag == true) return;
	m_stateFlag = true;

	m_DownFile1 =  "C:\\xFrameDevStudio\\TEMP\\" + m_atch_fle1;
	//m_imgType ="";
	
	var strLocalPath = "C:\\xFrameDevStudio\\TEMP\\";
	var strServerFile = m_atch_fle1;
	var strSub = "img";			//서버의 첨부파일 Sub 폴더
	FILE.DownloadFile(strLocalPath, strSub, strServerFile);
	m_stateFlag = false;			//현재 상태 키 초기화
	this.ViewMainFile();
}

function ViewMainFile()
{
	m_imgPath = m_DownFile1;
	factory.loadpopup("이미지뷰어","/FRAME/UTIL/IMAGEVIEWER","이미지뷰어",false,3,0,0,true,false,this.screen);
}

function btnFileDown1_on_mouseup(objInst)
{
	m_imgType ="";
	var strFilter = "모든파일(*.*)|*.*";
	var strSavePath = factory.showfolderdialog("C:\\xFrameDevStudio\\TEMP\\", "디렉토리열기");	
//	screen.alert("strSavePath============="+strSavePath)

	if(strSavePath == "") return;
	if(this.fldMainImgPath.gettext() == "") return;

//	//현재업로드 혹은 다운로드 중이면 리턴처리
//	if(m_stateFlag == true) return;
//	m_stateFlag = true;
//
	m_DownFile1 = strSavePath + "\\" + m_atch_fle1;	
//	FTP.ClearUploadDownloadParam(screen, false);
//	FTP.SetUploadDownloadParam(screen, false, m_DownFile1,  fldSvrMainImgPath.gettext())
//	FTP.ExcuteUploadDownload(screen, false, true);
//	m_stateFlag = false;			//현재 상태 키 초기화
	
	
	var strLocalPath = strSavePath;
	var strServerFile = this.fldMainImgPath.gettext();
	var strSub = "img";			//서버의 첨부파일 Sub 폴더
	var ret = FILE.DownloadFile(strLocalPath, strSub, strServerFile);

}


function btnPopImage_on_mouseup(objInst)
{
	if(this.fldPopImgPath.gettext() == "") return;
	m_imgType = "POP";
	//현재업로드 혹은 다운로드 중이면 리턴처리
	if(m_stateFlag == true) return;
	m_stateFlag = true;

	m_DownFile2 =  "C:\\xFrameDevStudio\\TEMP\\" + m_atch_fle2;	

	var strLocalPath = "C:\\xFrameDevStudio\\TEMP\\";
	var strServerFile = m_atch_fle2;
	var strSub = "img";			//서버의 첨부파일 Sub 폴더
	FILE.DownloadFile(strLocalPath, strSub, strServerFile);
	m_stateFlag = false;			//현재 상태 키 초기화
	this.ViewPopFile();
}

function ViewPopFile()
{

	if(this.fldPopImgPath.gettext() == "") return;

	m_imgPath = m_DownFile2;
	factory.loadpopup("이미지뷰어","/FRAME/UTIL/IMAGEVIEWER","이미지뷰어",false,3,0,0,true,false,this.screen);
}

function btnFileDown2_on_mouseup(objInst)
{
	m_imgType ="";

	var strFilter = "모든파일(*.*)|*.*";
	var strSavePath = factory.showfolderdialog("C:\\xFrameDevStudio\\TEMP\\", "디렉토리열기");	

	if(strSavePath == "") return;
	if(this.fldPopImgPath.gettext() == "") return;

//	//현재업로드 혹은 다운로드 중이면 리턴처리
//	if(m_stateFlag == true) return;
//	m_stateFlag = true;
//
	m_DownFile2 = strSavePath + "\\" + m_atch_fle2;	
//	FTP.ClearUploadDownloadParam(screen, false);
//	FTP.SetUploadDownloadParam(screen, false, m_DownFile2,  fldSvrPopImgPath.gettext())
//	FTP.ExcuteUploadDownload(screen, false, true);
//	m_stateFlag = false;			//현재 상태 키 초기화

	var strLocalPath = strSavePath;
	var strServerFile = this.fldPopImgPath.gettext();
	var strSub = "img";			//서버의 첨부파일 Sub 폴더
	FILE.DownloadFile(strLocalPath, strSub, strServerFile);
}



function btnFileDown3_on_mouseup(objInst)
{
	m_imgType ="";
	var strFilter = "모든파일(*.*)|*.*";
	var strSavePath = factory.showfolderdialog("C:\\xFrameDevStudio\\TEMP\\", "디렉토리열기");	

	if(strSavePath == "") return;
	if(this.fldMainImgPath2.gettext() == "") return;

//	//현재업로드 혹은 다운로드 중이면 리턴처리
//	if(m_stateFlag == true) return;
//	m_stateFlag = true;
//
	m_DownFile3 = strSavePath + "\\" + m_atch_fle3;	
//	FTP.ClearUploadDownloadParam(screen, false);
//	FTP.SetUploadDownloadParam(screen, false, m_DownFile3,  fldSvrMainImgPath2.gettext())
//	FTP.ExcuteUploadDownload(screen, false, true);
//	m_stateFlag = false;			//현재 상태 키 초기화

	var strLocalPath = strSavePath;
	var strServerFile = this.fldMainImgPath2.gettext();
	var strSub = "img";			//서버의 첨부파일 Sub 폴더
	FILE.DownloadFile(strLocalPath, strSub, strServerFile);
}


function closeBtn_on_mouseup(objInst)
{
 	/* 팝업창 닫기 */
	GFN.ClosePopTranScreen(this.screen, 1);
}



function sendBtn_on_mouseup(objInst)
{
	this.StartTran();
}

//=====================================================================
//    거래 처리 함수
//=====================================================================
function StartTran()
{

	if(false == this.CheckValidation()){
		return false;
	}

	if (m_strDelFlag =="1")  //삭제
	{
		// 송신처리
		TRAN_HTTP.SendTranData(this.screen);
	}
	else
	{
		if(this.fldMainImgPath2.gettext() == "")    // 업로드 파일 없음
		{
//			if(act_stcd.getselectedcode() == "4")  //업무이관
//			{
//				var str_bz_dscd = bz_dscd2.getselectedcode()
//				bz_dscd.setselectedcode(str_bz_dscd);              //업무구분코드
//				acp_dt.settext("");                                //접수일자
//			    acp_empno.settext("");                             //접수사원번호  
//			    prcsr_nm.settext("");                              //처리자성명 
//			}	
//			if(act_stcd.getselectedcode() == "5" ||act_stcd.getselectedcode() == "6")  //보류,수용불가
			if(this.act_stcd.getselectedcode() == "4" ||this.act_stcd.getselectedcode() == "6")  //보류,추진단검토
			{
				this.acp_dt.settext("");                                //접수일자
			    this.acp_empno.settext("");                             //접수사원번호  
			//    prcsr_nm.settext("");                              //처리자성명 
			}	
			// 송신처리
			TRAN_HTTP.SendTranData(this.screen);
		}
		else
		{
			this.FileUpload();
			TRAN_HTTP.SendTranData(this.screen);
		}
	}
}





function FileUpload()
{
//	m_act_atch_fle_ctl = FILE.GetFileName(fldMainImgPath2.gettext());
//	var strMainFileName = m_serverPath + FILE.GetFileName(fldMainImgPath2.gettext());
//
//	fldSvrMainImgPath2.settext(strMainFileName);	//메인화면의 서버파일명을 셋팅(거래 시 서버파일의 주소가 필요하므로.
//
//	FTP.ClearUploadDownloadParam(screen,true);
//	FTP.SetUploadDownloadParam(screen,true,fldMainImgPath2.gettext(),strMainFileName);
//
//	FTP.ExcuteUploadDownload(screen,true,true);
	
	var strLocalPath = this.fldMainImgPath2.gettext();
	var strSub = "img";		// 첨부파일을 업로드할 서버의 Sub 폴더
	FILE.UploadFile(strLocalPath, strSub, true);
	return true;
}



function btnInqUsr_on_mouseup(objInst)
{
	strUsEmpno = this.prcs_chrg_empno.gettext();
	strUsrNm = "";
	m_strHiddenFlag = false;

	GFN.LoadPopTranScreen("102003P0", "/ERRTEST/102003P0", "사용자조회", 0, 0, 600, 410, true, this.screen);		

	this.prcs_chrg_empno.settext(strUsEmpno);
	this.prcs_prch_nm.settext(strUsrNm);
}

function SetData_102003()
{
	strParentEmpno = "";

	//히든팝업으로 호출할때에만 조회조건을 팝업으로 전달한다.
	if (m_strHiddenFlag != true)
	{
		return;
	}

    //사원번호
	strParentEmpno = this.prcs_chrg_empno.gettext();
}



function btnFrDt_on_mouseup(objInst)
{
	TIME.ShowCalendar(this.screen, this.prr_cplt_dt);
}

function act_stcd_on_itemchange(objInst, nprev_item, ncur_item, event_type)
{
	//===========================================================
	//1.미접수, 2:접수, 3:조치완료, 4.업무이관, 5.보류 , 6.업무이관
    //==========================================================
	if(this.act_stcd.getselectedcode() == "1")
	{
		c2.setinputtype(1);        //업무구분
		this.prr_cplt_dt.setinputtype(2);     //조치예정일
		this.prcs_chrg_empno.setinputtype(2); //조치예정자
		this.prcs_prch_nm.setinputtype(2);    //성명
		this.dft_prcs_cts.setinputtype(2);    //조치내용
		this.rl_cplt_dt.settext("");          //완료일자
		this.btnFrDt.setenable(false);        //달력
		this.btnInqUsr.setenable(false);      //조치예정자 조회 도구
		this.btnMainSearch.setvisible(false);

	}
	else if(this.act_stcd.getselectedcode() == "2")
	{
		this.acp_dt.settext(GVAL.strTranDate);                        //접수일자
	    this.acp_empno.settext(GVAL.objUserInfo.strUserID);           //접수사원번호  
	    this.prcsr_nm.settext(GVAL.objUserInfo.strUserName);          //처리자성명  
		this.bz_dscd2.setinputtype(1);        //업무구분
		this.prr_cplt_dt.setinputtype(1);     //조치예정일
		this.prcs_chrg_empno.setinputtype(1); //조치예정자
		this.prcs_prch_nm.setinputtype(1);    //성명
		this.dft_prcs_cts.setinputtype(1);    //조치내용
		this.rl_cplt_dt.settext("");          //완료일자
		this.btnFrDt.setenable(true);         //달력
		this.btnInqUsr.setenable(false);       //조치예정자 조회 도구
		this.btnMainSearch.setvisible(false);
	}
	else if(this.act_stcd.getselectedcode() == "3")
	{
		if (m_acp_dt == "")
		{
			this.acp_dt.settext(GVAL.strTranDate);              //접수일자    
		}
		else
		{
			this.acp_dt.settext(m_acp_dt);                      //접수일자    
		}

		if (m_acp_empno == "")
		{
			this.acp_empno.settext(GVAL.objUserInfo.strUserID);        //접수사원번호    
		}
		else
		{
			this.acp_empno.settext(m_acp_empno);                      //접수사원번호    
		}
		if (m_prcsr_nm == "")
		{
			this.prcsr_nm.settext(GVAL.objUserInfo.strUserName);      //처리자성명    
		}
		else
		{
			this.prcsr_nm.settext(m_prcsr_nm);                      //처리자성명    
		}

		if (m_prcs_chrg_empno == "")
		{
			this.prcs_chrg_empno.settext(GVAL.objUserInfo.strUserID);        //처리담당사원번호    
		}
		else
		{
			this.prcs_chrg_empno.settext(m_prcs_chrg_empno);                      //처리담당사원번호    
		}

		if (m_prcs_prch_nm == "")
		{
			this.prcs_prch_nm.settext(GVAL.objUserInfo.strUserName);      //처리담당자성명    
		}
		else
		{
			this.prcs_prch_nm.settext(m_prcs_prch_nm);                      //처리담당자성명    
		}

		if (m_prr_cplt_dt == "")
		{
			this.prr_cplt_dt.settext(GVAL.strTranDate);      //예정완료일자    
		}
		else
		{
			this.prr_cplt_dt.settext(m_prr_cplt_dt);                      //예정완료일자    
		}
     

		this.bz_dscd2.setinputtype(1);        //업무구분
		this.prr_cplt_dt.setinputtype(2);     //조치예정일
		this.prcs_chrg_empno.setinputtype(2); //조치예정자
		this.prcs_prch_nm.setinputtype(2);    //성명
		this.dft_prcs_cts.setinputtype(1);    //조치내용

		this.rl_cplt_dt.settext(GVAL.strTranDate);     //완료일자 

		this.btnFrDt.setenable(false);         //달력
		this.btnInqUsr.setenable(false);       //조치예정자 조회 도구
		this.btnMainSearch.setvisible(true);
	}
	else if(this.act_stcd.getselectedcode() == "4" )   // 보류
	{
		this.bz_dscd2.setinputtype(1);        //업무구분

		this.prr_cplt_dt.settext("");
		this.prr_cplt_dt.setinputtype(2);     //조치예정일
		this.btnFrDt.setenable(false);        //달력

		this.prcs_chrg_empno.setinputtype(2); //조치예정자
//		prcs_chrg_empno.settext("");
//		btnInqUsr.setenable(false);        //조치예정자 조회 도구

		this.prcs_prch_nm.setinputtype(2);    //성명
//		prcs_prch_nm.settext(""); 


		this.dft_prcs_cts.setinputtype(1);    //조치내용

		this.rl_cplt_dt.settext("");           //완료일자
		this.btnMainSearch.setvisible(true);
	}
	else if(this.act_stcd.getselectedcode() == "5" || this.act_stcd.getselectedcode() == "6") //수용불가, 결함아님
	{
		if (m_acp_dt == "")
		{
			this.acp_dt.settext(GVAL.strTranDate);              //접수일자    
		}
		else
		{
			this.acp_dt.settext(m_acp_dt);                      //접수일자    
		}

		if (m_acp_empno == "")
		{
			this.acp_empno.settext(GVAL.objUserInfo.strUserID);        //접수사원번호    
		}
		else
		{
			this.acp_empno.settext(m_acp_empno);                      //접수사원번호    
		}

		if (m_prcsr_nm == "")
		{
			this.prcsr_nm.settext(GVAL.objUserInfo.strUserName);      //처리자성명    
		}
		else
		{
			this.prcsr_nm.settext(m_prcsr_nm);                      //처리자성명    
		}

		if (m_prcs_chrg_empno == "")
		{
			this.prcs_chrg_empno.settext(GVAL.objUserInfo.strUserID);        //처리담당사원번호    
		}
		else
		{
			this.prcs_chrg_empno.settext(m_prcs_chrg_empno);                      //처리담당사원번호    
		}

		if (m_prcs_prch_nm == "")
		{
			this.prcs_prch_nm.settext(GVAL.objUserInfo.strUserName);      //처리담당자성명    
		}
		else
		{
			this.prcs_prch_nm.settext(m_prcs_prch_nm);                      //처리담당자성명    
		}
		this.prr_cplt_dt.settext("");
		this.prr_cplt_dt.setinputtype(2);     //조치예정일
		

		this.bz_dscd2.setinputtype(1);        //업무구분
		this.prr_cplt_dt.setinputtype(2);     //조치예정일
		this.prcs_chrg_empno.setinputtype(2); //조치예정자
		this.prcs_prch_nm.setinputtype(2);    //성명
		this.dft_prcs_cts.setinputtype(1);    //조치내용

		this.rl_cplt_dt.settext(GVAL.strTranDate);     //완료일자 

		this.btnFrDt.setenable(false);         //달력
		this.btnInqUsr.setenable(false);       //조치예정자 조회 도구
		this.btnMainSearch.setvisible(true);
	}else if(this.act_stcd.getselectedcode() == "7") //테스터 확인완료
	{


//		lst_aprv_empno.settext(GVAL.objUserInfo.strUserID);
//		lst_aprv_empno.setinputtype(2);     //조치예정일
		

		this.bz_dscd2.setinputtype(1);        //업무구분
		this.prr_cplt_dt.setinputtype(2);     //조치예정일
		this.prcs_chrg_empno.setinputtype(2); //조치예정자
		this.prcs_prch_nm.setinputtype(2);    //성명
		this.dft_prcs_cts.setinputtype(1);    //조치내용

		this.btnFrDt.setenable(false);         //달력
		this.btnInqUsr.setenable(false);       //조치예정자 조회 도구
		this.btnMainSearch.setvisible(true);
	}
}



function btnMainSearch_on_mouseup(objInst)
{

	var strFilter = "모든파일(*.*)|*.*";
	var strSelectFile = factory.showfileopendialog(strFilter, "C:\\", "", "파일선택", false);
	
    if(strSelectFile == ""){
	    return;
    }
	
	var retFilename = strSelectFile.split("|");
    this.fldMainImgPath2.settext(retFilename[0]);

	m_act_atch_fle_ctl = FILE.GetFileName(this.fldMainImgPath2.gettext());
	var nIndex = GFN.IndexOf(m_act_atch_fle_ctl, " ", 0);

	if (nIndex != -1)
	{
		GFN.ShowMsg(this.screen,"첨부파일명에 스페이스를 제거하여 첨부하십시요.");
		this.fldMainImgPath2.settext("");
		this.act_atch_fle_ctl.settext("");
		return;
	}

	this.act_atch_fle_ctl.settext(m_act_atch_fle_ctl);

}


function CheckValidation()
{
	
	if(this.act_stcd.getselectedcode()== ""){
		GFN.ShowMsg(this.screen,"조치상태를 입력하십시오.");
		this.act_stcd.setfocus();
		return false;
	}
	if (m_strDelFlag != "1")
	{
//		screen.alert(act_stcd.getselectedcode());
		//1.미접수[0], 2:접수[1], 3:조치완료[2], 4.업무이관[3]
		if(this.act_stcd.getselectedcode() == "1" )
		{
			GFN.ShowMsg(this.screen,"조치상태를 확인하십시요.(미접수).");
			this.act_stcd.setfocus();
			return false;
	
		}
		else if(this.act_stcd.getselectedcode() == "2")
		{
			if(this.prr_cplt_dt.gettext() == ""){
				GFN.ShowMsg(this.screen,"조치예정일자를 입력하십시오.");
				this.prr_cplt_dt.setfocus();
				return false;
			}
			if( this.prcs_chrg_empno.getselectedcode().substring(0,1) != "S" || this.prcs_chrg_empno.getselectedcode().length != 5 ){
				this.screen.alert("조치예정자 선택이 잘못되었습니다.");
				this.prcs_chrg_empno.setselectedcode("");
				this.prcs_chrg_empno.settext("1");
				this.prcs_prch_nm.settext("Temp");
				return false;
			}
			if(this.prcs_chrg_empno.gettext() == ""){
				GFN.ShowMsg(this.screen,"조치예정자 ID 입력하십시오.");
				this.prcs_chrg_empno.setfocus();
				return false;
			}
			if(this.prcs_prch_nm.gettext() == ""){
				GFN.ShowMsg(this.screen,"조치예정자명 입력하십시오.");
				this.prcs_prch_nm.setfocus();
				return false;
			}

			
		}
		else if(this.act_stcd.getselectedcode() == "3")
		{
			if(this.dft_prcs_cts.gettext() == ""){
				GFN.ShowMsg(this.screen,"조치내용을 입력하십시요.");
				this.dft_prcs_cts.setfocus();
				return false;
			}
	//		if(fldMainImgPath2.gettext() == ""){
	//			GFN.ShowMsg(screen,"첨부파일을 누락되었습니다.");
	//			fldMainImgPath2.setfocus();
	//			return false;
	//		}
		}
//		else if(act_stcd.getselectedcode() == "4")
//		{
//			if(bz_dscd2.getselectedcode() == "")
//			{
//				GFN.ShowMsg(screen,"업무이관업무코드를 입력하십시요.");
//				bz_dscd2.setfocus();
//				return false;
//			}
//			if(dft_prcs_cts.gettext() == ""){
//				GFN.ShowMsg(screen,"업무이관 사유를 조치내용에 입력하십시요.");
//				dft_prcs_cts.setfocus();
//				return false;
//			}
//		}
		else if(this.act_stcd.getselectedcode() == "4" )
		{
			if(this.dft_prcs_cts.gettext() == ""){
				GFN.ShowMsg(this.screen,"보류 사유를 조치내용에 입력하십시요.");
				this.dft_prcs_cts.setfocus();
				return false;
			}
		}
		else if(this.act_stcd.getselectedcode() == "5")
		{
			if(this.dft_prcs_cts.gettext() == ""){
				GFN.ShowMsg(this.screen,"수용불가 사유를 조치내용에 입력하십시요.");
				this.dft_prcs_cts.setfocus();
				return false;
			}
		}
		else if(this.act_stcd.getselectedcode() == "6")
		{
			if(this.dft_prcs_cts.gettext() == ""){
				GFN.ShowMsg(this.screen,"결함아님 사유를 조치내용에 입력하십시요.");
				this.dft_prcs_cts.setfocus();
				return false;
			}
		}
		else if(this.act_stcd.getselectedcode() == "7")
		{
			if(GVAL.objUserInfo.strUserID.substring(0,1) == "S"){
				GFN.ShowMsg(this.screen,"S사번은 테스트 완료 하실 수 없습니다.");
				this.dft_prcs_cts.setfocus();
				return false;
			}
		}		
	}
	return true;
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
//		strUsEmpno = prcs_chrg_empno.gettext();
//		strUsrNm = "";
//
//		//히든팝업여부 true(히든팝업으로 호출)/false(기본팝업으로 호출)
//		m_strHiddenFlag = true;
//
//		GFN.LoadHiddenPopTranScreen("102003P0", "/SCREEN/AA/102003P0", "사용자조회", 0, 0, 600, 410, true, screen, true);
//
//		//사원번호SET
//		prcs_chrg_empno.settext(strUsEmpno);
//		
//		//사원명SET
//		prcs_prch_nm.settext(strUsrNm);
//	}
	return 0;
}

function screen_on_trancomplete(mapid, result, recv_userheader, recv_code, recv_msg, recv_data)
{
	if (m_strDelFlag =="1")
	{
		GFN.ShowMsg(this.screen,"등록건이 삭제 완료되었습니다.");
	}
	else
	{
	    if(this.act_stcd.getselectedcode() == "2")
		{
			GFN.ShowMsg(this.screen,"접수가 완료되었습니다.");
		}
		else if(this.act_stcd.getselectedcode() == "3")
		{
			GFN.ShowMsg(this.screen,"조치가 완료되었습니다.");
		}
		else if(this.act_stcd.getselectedcode() == "6")
		{
			GFN.ShowMsg(this.screen,"결함아님이 완료되었습니다.");
		}
		else if(this.act_stcd.getselectedcode() == "4" )
		{
			GFN.ShowMsg(this.screen,"보류 등록이 완료되었습니다.");
		}
		else if(this.act_stcd.getselectedcode() == "5")
		{
			GFN.ShowMsg(this.screen,"수용불가 등록이 완료되었습니다.");
		}
	}	
 	/* 팝업창 닫기 */
	GFN.ClosePopTranScreen(this.screen, 3);
}

function btnHelp_on_mouseup()
{
	factory.loadpopup("109986P0", "/SCREEN/ND/109986P0", "등록유형 설명", false, 3, 0, 0, true, false, scrParent);
}

function btnMainImage2_on_mouseup(objInst)
{
	if(this.fldMainImgPath2.gettext() == "") return;

	m_imgType = "MAIN2";

	//현재업로드 혹은 다운로드 중이면 리턴처리
	if(m_stateFlag == true) return;
	m_stateFlag = true;

	m_DownFile3 =  "C:\\xFrame\\TEMP\\" + m_atch_fle3;	
	var strLocalPath = "C:\\xFrameDevStudio\\TEMP\\";
	var strServerFile = m_atch_fle3;
	var strSub = "img";			//서버의 첨부파일 Sub 폴더
	FILE.DownloadFile(strLocalPath, strSub, strServerFile);
	m_stateFlag = false;			//현재 상태 키 초기화
	this.ViewMainFile2();
}

function ViewMainFile2()
{
    m_imgType = "MAIN";
	m_imgPath = m_DownFile3;
//screen.alert("m_imgPath="+m_imgPath);

	factory.loadpopup("이미지뷰어","/FRAME/UTIL/IMAGEVIEWER","이미지뷰어",false,3,0,0,true,false,this.screen);
}

function ExcuteProgram(strDownFile)
{
	//다운로드 파일 실행
	FILE.ExcuteProgram(strDownFile);  
}

//삭제(본인 등록건)
function btnDel_on_mouseup(objInst)
{
	m_strDelFlag ="1"; //삭제
	m_strTranCode = "SNDA000105U";                // 삭제
	this.screen.applytranmap(m_strTranCode, false, false);
	this.StartTran();
}

function prcs_chrg_empno_on_itemchange(objInst, nprev_item, ncur_item, event_type)
{
//	prcs_chrg_empno.
	if( this.prcs_chrg_empno.getselectedcode().substring(1,5) == "----" ){
		this.screen.alert("조치예정자 선택이 잘못되었습니다.");
		this.prcs_chrg_empno.setselectedcode("");
		this.prcs_chrg_empno.settext("1");
		this.prcs_prch_nm.settext("Temp");
		return;
	}
	
	this.prcs_prch_nm.settext(this.prcs_chrg_empno.getselectedcomment());
}