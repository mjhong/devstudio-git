var startDate;
var endDate;

function btnSearch_on_mouseup()
{
	// ASYNC 처리
	/*
	var ret = screen.requestsubmit("TR_SELECT_EMP", true);
	factory.consoleprint("Return Value = " + ret);
	*/

	factory.consoleprint("getxtranmapurl = " + screen.getxtranmapurl("TR_SELECT"));

	startDate = new Date();
	fldElapseTime.settext("");
			
	// SYNC 처리
	screen.setxtrancompress(false);	// html5 확장 API
		
	var ret = screen.requestsubmit("TR_SELECT", true);
	factory.consoleprint("Return Value = " + ret);	
	/*
	var instResult = screen.getsubmitresult();
	factory.consoleprint("map id  : " + instResult.mapid);
	factory.consoleprint("nResult : " + instResult.result);
	factory.consoleprint("recv userheader : " + instResult.recvuserheader);			
	factory.consoleprint("recv_code : " + instResult.recvcode);
	factory.consoleprint("recv_msg  : " + instResult.recvmsg);		
	*/
}



function btnSelect_on_mouseup()
{
	screen.setxtrancompress(false);	// html5 확장 API
	screen.requestsubmit("TR_SELECT", true);
}

function btnSearchZip_on_mouseup(objInst)
{
	screen.setxtrancompress(true);	// html5 확장 API
	screen.requestsubmit("TR_SELECT", true);
}

function SetEndTime(fldEndTime)
{
	endDate = new Date();
	var startTime = startDate.getTime();
	var endTime = endDate.getTime();
	var elapseSecond = (endTime - startTime) / 1000;
	// var elapseMSecond = (endTime - startTime) % 1000;
	// factory.consoleprint("elapseMSecond = " + elapseMSecond);
	fldEndTime.settext(elapseSecond);	
}

function screen_on_submitcomplete(mapid, result, recv_userheader, recv_code, recv_msg)
{
	SetEndTime(fldElapseTime);
	
	factory.consoleprint("screen_on_submitcomplete> mapid = " + mapid);
	factory.consoleprint("screen_on_submitcomplete> result = " + result);
	factory.consoleprint("screen_on_submitcomplete> recv_userheader = " + recv_userheader);
	factory.consoleprint("screen_on_submitcomplete> recv_code = " + recv_code);
	factory.consoleprint("screen_on_submitcomplete> recv_msg = " + recv_msg);				
	
}

function btnInsert_on_mouseup(objInst)
{
	screen.requestsubmit("TR_INSERT", true);
}

function btnMass_on_mouseup(objInst)
{
	startDate = new Date();
	fldElapseTime.settext("");
		
	// screen.setxtrancompress(false);	// html5 확장 API
	screen.requestsubmit("TR_MASS", true);
}

function btnMassSync_on_mouseup(objInst)
{
	var ret;
	
	startDate = new Date();
	fldElapseTime.settext("");
		
	screen.setxtrancompress(false);	// html5 확장 API
	ret = screen.requestsubmit("TR_MASS2", false);
	if(ret == false) {
		factory.consoleprint("requestsubmit fail");
		return;
	}

    // 데이터 통신 결과 정보 오브젝트를 구함
    // 오브젝트에는 on_submitcomplete 이벤트의 파라미터로 전달되는
    // 데이터를 포함하고 있음.
    var instResult = screen.getsubmitresult();
    if(instResult == null) {
        screen.alert("데이터 처리 결과를 얻을 수 없습니다.");
        return;
    }
    
    // 처리 결과를 콘솔에 출력
    factory.consoleprint("mapid  = " + instResult.mapid);
    factory.consoleprint("result = " + instResult.result);
    factory.consoleprint("recvuserheader = " + instResult.recvuserheader);
    factory.consoleprint("recvcode = " + instResult.recvcode);
    factory.consoleprint("recvmsg = " + instResult.recvmsg);
}

function btnMassZip_on_mouseup(objInst)
{
	startDate = new Date();
	fldElapseTime.settext("");
		
	screen.setxtrancompress(true);	// html5 확장 API
	screen.requestsubmit("TR_MASS", true);
}

function btn_savecsv_on_mouseup(objInst)
{
	grdList.savecsv();
}

function btn_saveexcel_on_mouseup(objInst)
{
	grdList.saveexcel();
}

function btn_readcsv_on_mouseup(objInst)
{
	grdList.readcsv();
}

function btn_readexcel_on_mouseup(objInst)
{
	grdList.readexcel();
}

function btn_xdatasetlog_on_mouseup(objInst)
{
	factory.xdataset(DS_EMP_LIST);
}