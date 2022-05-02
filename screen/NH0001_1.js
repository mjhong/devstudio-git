/**
 * 이 모듈은 From-To 달력이다.
 * @this calFromTo
 * @module 0001_1
 * @version 1.0 버전정보
 * @since 0.9 생성되기 시작한 버전
 * @copyright 저작권정보
 * @license 라이센스 정보
 * @author 제작자 <email@home.com>
 */

/**
 * 이벤트 설명부분
 * @event onfire2
 * @property {number} velocity - 여기는 속성이 들어간다.
 */

/**
 * 이벤트 설명부분
 * @event onfire
 * @property {number} velocity - 여기는 속성이 들어간다.
 */

/**
 * 이벤트 설명부분
 * @event onfire3
 * @property {number} velocity - 여기는 속성이 들어간다.
 */

/**
 * 이것은 상수 정의입니다.
 * @const
 * @type {string}
 */
const con_var1 = "test";

/**
 * 이것은 상수 정의입니다. 내부용
 * @const
 * @private
 * @type {string}
 */
const con_var2 = "test";





/**
 *
 * @private
 */
function screen_on_load()
{

}

/**
 *
 * @private
 */
function dt_from_on_changed(objInst, prev_text, curr_text, event_type)
{
	if (event_type == 1 || event_type == 4) {
		var strToDate = this.dt_to.gettext();
		if (strToDate < curr_text) {
			this.dt_to.showcalendar(false);
			this.dt_to.settextex(curr_text, false, false);
			this.dt_to.showcalendar(true);
		}
	}
}

/**
 *
 * @private
 */
function dt_to_on_changed(objInst, prev_text, curr_text, event_type)
{
	if (event_type == 1 || event_type == 4) {
		var strToDate = this.dt_from.gettext();
		if (strToDate > curr_text) {
			this.dt_from.showcalendar(false);
			this.dt_from.settextex(curr_text, false, false);
			this.dt_from.showcalendar(true);
		}
	}
}

/**
 * 값을 리턴한다.
 * @author 제작자
 * @return {object} 리턴값을 리턴한다.
 * @method
 */
function getValue()
{
	return "";
}

/**
 * 두번째 메소드임
 * @author 제작자
 * @param {string} AType 호출 유형 "from", "to"
 * @param {string=} AOpt 선택성 옵션
 * @return {string} 날자 리턴
 * @fires calFromTo#ondate 이벤트발생
 * @method
 */
function getValue2(AType, AOpt)
{
	return "";
}