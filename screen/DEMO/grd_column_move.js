function btn_visible_on_mouseup()
{
	factory.loadpopup("컬럼숨김","/계정계/poc331_popup","컬럼숨김상태",false,3,0,0,true,true,screen);
	var scrpop = factory.findpopup("컬럼숨김");
	if(factory.isobject(scrpop)) {
		scrpop.domodal();
	}
}