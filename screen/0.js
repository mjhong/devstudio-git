function screen_on_load()
{
	titlebox01.setuserdata("110001");
	titlebox02.setuserdata("110002");
	titlebox03.setuserdata("110003");
	titlebox04.setuserdata("110004");
	titlebox05.setuserdata("110005");
	titlebox06.setuserdata("110006");
	titlebox07.setuserdata("110007");
	titlebox08.setuserdata("110008");
	titlebox09.setuserdata("110009");
	titlebox10.setuserdata("110010");
} 




      
/**
오브젝트 속성 : 1
오브젝트명 : 2
이벤트명 : 3
설명 : 4
화면ID : 5
거래코드 : 6
*/
function procBiz_on_click(objInst)
{
	var strTitle = objInst.gettitle();
	var strText = objInst.gettext();
	var strUserData = objInst.getuserdata();
	alert(strTitle + ":\n" + strText + "\n" + strUserData);
}