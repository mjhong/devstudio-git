function screen_on_load()
{
	var objParentScreen = screen.getparent();
	var obJParentScreenMember = objParentScreen.getmembers(1);
	
	txtName.settext(obJParentScreenMember.m_strName);
	txtDate.settext(obJParentScreenMember.m_strDate);
	txtEtc.settext(obJParentScreenMember.m_strEtc);
	
	if(obJParentScreenMember.m_strName == "고현정") {
		imgUser.setimage("/DEMO/gohyunjung.jpg");
	}
	else if(obJParentScreenMember.m_strName == "장동건") {	
		imgUser.setimage("/DEMO/jangdonggun.jpg");
	}	
	else if(obJParentScreenMember.m_strName == "이승기") {	
		imgUser.setimage("/DEMO/leeseungki.jpg");
	}	
	else if(obJParentScreenMember.m_strName == "김태희") {	
		imgUser.setimage("/DEMO/kimtaehee.jpg");
	}			
}

function btnClose_on_mouseup(objInst)
{
	screen.unload();
}