
$(document).ready(function() {
	var currentPage = 1;
	var pageSize = 10;
	var total = 135;
	var totalsize = 1;

	$(function() {
	   sufa();
	})

	$(".layui-box").delegate(".pageNumber","click",function () {
		var no =  parseInt($(this).attr("data"));
		currentPage = no;
		sufa();
	})

    $(".pageSizeSelect").on('change',function(){
		pageSize = parseInt($(this).find("option:selected").val());
		currentPage = 1;
		sufa();
    })

	$(".layui-laypage-first").on('click',function(){
		if(currentPage != 1) {
			currentPage = 1;
		    sufa();
		}
    })

	$(".layui-laypage-pre").on('click',function(){
		if(currentPage != 1) {
			currentPage = currentPage-1;
		    sufa();
		}
    })

	$(".layui-laypage-next").on('click',function(){
		if(currentPage != totalsize) {
			currentPage = currentPage+1;
		    sufa();
		}
    })

	$(".layui-laypage-last").on('click',function(){
		if(currentPage != totalsize) {
			currentPage = totalsize;
		    sufa();
		}
    })

	function sufa() {
		var aa = [];
		aa.push(currentPage);
		totalsize =  Math.ceil(total/pageSize);
		for(var i=1 ;i<5;i++) {
			var a= currentPage+i;
			var b= currentPage-i;
			if(aa.length < 5) {
				if(a<=totalsize) aa.push(a);
				if(b>0) aa.push(b);
			}
		}
		aa.sort(function compare(val1,val2){return val1-val2;});

		var content = "";
		for(var i=0 ;i<aa.length;i++) {
			if(aa[i] == currentPage) {
				content += "<a class=\"pageNumber aaa\" href='#' data='"+aa[i]+"'>"+aa[i]+"</a>";
			}else {
				content += "<a class=\"pageNumber\" href='#' data='"+aa[i]+"'>"+aa[i]+"</a>";
			}
		}
        $(".pageNumber").remove();
		$(".layui-laypage-pre").after(content);
	}
})
