function screen_on_load()
{

}


function btn_copy_on_mouseup(objInst)
{
	var src_row_index, dst_row_index;
	var src_item_depth, dst_item_depth;
	var src_checked_row_count, dst_checked_row_count;
	var src_row_count, dst_row_count;
	var i;		
	var temp_src_item_depth;
	var src_start_row_index, src_end_row_index;


	src_checked_row_count = grdList.getcheckedrowcount();
	dst_checked_row_count = grdListDst.getcheckedrowcount();
	factory.consoleprint("src_checked_row_count = " + src_checked_row_count + ", dst_checked_row_count = " + dst_checked_row_count);
	
	if(src_checked_row_count != 1) {
		factory.consoleprint("복사 아이템이 지정되지 않았습니다.");		
		return;
	}
	
	if(dst_checked_row_count != 1) {
		factory.consoleprint("대상 아이템이 지정되지 않았습니다.");
		return;
	}	
		
	src_row_index = grdList.getcheckedrow(0);
	dst_row_index = grdListDst.getcheckedrow(0);
	factory.consoleprint("src_row_index = " + src_row_index + ", dst_row_index = " + dst_row_index);
	
	src_row_count = grdList.getrowcount();
	src_item_depth = grdList.getitemdepth(src_row_index);
	dst_item_depth = grdListDst.getitemdepth(dst_row_index);
	
	factory.consoleprint("src_row_count = " + src_row_count);
	factory.consoleprint("src_item_depth = " + src_item_depth);
	factory.consoleprint("dst_item_depth = " + dst_item_depth);
	
	// 복사 대상 시작 및 끝 행에 대한 인덱스를 구함
	for(i = src_row_index + 1; i < src_row_count; i++) {
		temp_src_item_depth = grdList.getitemdepth();
		if(temp_src_item_depth >= src_item_depth) {
			break;
		}
	}
	
	src_start_row_index = src_row_index;
	src_end_row_index = i - 1;
	factory.consoleprint("src_start_row_index = " + src_start_row_index);
	factory.consoleprint("src_end_row_index = " + src_end_row_index);
	
	// 데이터 셋의 열 갯수를 구함
	column_count = DS_TREE.getcolumncount();
	factory.consoleprint("column_count = " + column_count);

	var depth_column_index = 0;
	depth_column_index = DS_TREE_DST.getcolumn("DEPTH");
	factory.consoleprint("depth_column_index = " + depth_column_index);
		
	for(i = src_start_row_index; i <= src_end_row_index; i++) {
		// 데이터 셋 정보를 구해서 대상 데이터 셋에 추가
		var j, item_value, item_depth, depth_column_index;
		var insert_row_index, depth_column_index;

		insert_row_index = dst_row_index + 1 + (i - src_start_row_index);
		factory.consoleprint("insert_row_index = " + insert_row_index);
		DS_TREE_DST.insertrow(insert_row_index);

		item_depth = grdList.getitemdepth(i);
		item_depth = dst_item_depth + 1 + (item_depth - src_item_depth);
		factory.consoleprint("item_depth = " + item_depth);
		DS_TREE_DST.setdatabyname(insert_row_index, "DEPTH", item_depth);
		
		for(j = 0; j < column_count; j++) {
			if(j == depth_column_index) { 
				continue;
			}
			
			item_value = DS_TREE.getdata(i, j);
			DS_TREE_DST.setdata(insert_row_index, j, item_value);
		}	
	}
}

function btn_log_dst_xdataset_on_mouseup(objInst)
{
	factory.xdataset(DS_TREE_DST);
}

function btn_delete_on_mouseup(objInst)
{
	var row_index, checked_row_count;

	checked_row_count = grdListDst.getcheckedrowcount();
	factory.consoleprint("checked_row_count = " + checked_row_count);
	if(checked_row_count != 1) {
		factory.consoleprint("아이템이 지정되지 않았습니다.");		
		return;
	}
	
	row_index = grdListDst.getcheckedrow(0);
	factory.consoleprint("row_index = " + row_index);
	
	grdListDst.deleteitem(row_index);
}

function btn_add_on_mouseup(objInst)
{
	var strItemText = fldItemText.gettext();
	
	var row_index, checked_row_count;

	checked_row_count = grdListDst.getcheckedrowcount();
	factory.consoleprint("checked_row_count = " + checked_row_count);
	if(checked_row_count != 1) {
		factory.consoleprint("아이템이 지정되지 않았습니다.");		
		return;
	}
	
	row_index = grdListDst.getcheckedrow(0);
	factory.consoleprint("row_index = " + row_index);
	
	var parent_item_key = grdListDst.getitemkey(row_index);
	var item_key = parent_item_key + "_CHILD";
	
	grdListDst.insertitem(strItemText, 3, 3, item_key, parent_item_key, "");
}