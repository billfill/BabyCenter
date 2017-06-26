$(function(){
	$.ajax({
		url: "https://json2jsonp.com/?url=http%3A%2F%2Fdata.taipei%2Fopendata%2Fdatalist%2FapiAccess%3Fscope%3DresourceAquire%26rid%3Da02ccc34-dd28-4c5d-b527-c5433ec1a453&callback=baby",
		type: 'GET',
		dataType: 'jsonp',
		success: function(data){
			var source = data.result.results;
			// 一般load
			let Html = "";
			source.forEach(function(data){
				let address = data.ADDRESS.slice(8)
				Html+= "<li class=\"list-group-item\">"
				Html+= 	"<div class=\"row\">"
				Html+= 		"<p class=\"col-md-3 text-center\">"+ data.ORG_NAME +"</h4>"
				Html+= 		"<p class=\"col-md-5 text-center\"><a href=\"http://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&q="+ data.CITY + data.DIVISION+ address +"\" target=\"_blank\">"+ data.CITY + data.DIVISION+ address +"</a></p>"
				Html+= 		"<p class=\"col-md-2 text-center\">"+ data.PHONE +"</p>"
				Html+= 		"<p class=\"col-md-2 text-center\"><a class=\"btn btn-info btn-xs\" data-toggle=\"modal\" href=\'#modal-"+ data._id +"\'>更多資訊</a></p>"
				Html+= 	"</div class=\"row\">"
				Html+= 	"<div class=\"modal fade\" id=\"modal-"+ data._id +"\">"
				Html+= 		"<div class=\"modal-dialog\">"
				Html+=			"<div class=\"modal-content\">"
				Html+=				"<div class=\"modal-header\">"
				Html+=					"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>"
				Html+=					"<h4 class=\"modal-title\">"+ data.ORG_NAME +"</h4>"
				Html+=				"</div>"
				Html+=				"<div class=\"modal-body\">"
				Html+=					"<p>"+ data.ORG_INTRODUCTION +"</p>"
				Html+= 				"<div class=\"modal-footer\">"
				Html+= 					"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>"
				Html+=				"</div>"
				Html+=			"</div>"
				Html+=		"</div>"
				Html+=	"</div>"
				Html+= "</li>"						
			})
			$(".centerList>ul").html(Html);
			// 收尋功能
			$("#go").click(function(){
				let selectedHtml = "";
				var searchVal = $("#search").val()
				console.log(searchVal)
				var selected = source.filter(function(a){
					return a.ORG_NAME.indexOf(searchVal)> -1 || a.DIVISION.indexOf(searchVal) > -1
				});
				if(selected.length > 0){
				selected.forEach(function(data){
					let address = data.ADDRESS.slice(8)
					selectedHtml+= "<li class=\"list-group-item\">"
					selectedHtml+= 	"<div class=\"row\">"
					selectedHtml+= 		"<p class=\"col-md-3 text-center\">"+ data.ORG_NAME +"</h4>"
					selectedHtml+= 		"<p class=\"col-md-5 text-center\"><a href=\"http://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&q="+ data.CITY + data.DIVISION+ address +"\" target=\"_blank\">"+ data.CITY + data.DIVISION+ address +"</a></p>"
					selectedHtml+= 		"<p class=\"col-md-2 text-center\">"+ data.PHONE +"</p>"
					selectedHtml+= 		"<p class=\"col-md-2 text-center\"><a class=\"btn btn-info btn-xs\" data-toggle=\"modal\" href=\'#modal-"+ data._id +"\'>更多資訊</a></p>"
					selectedHtml+= 	"</div class=\"row\">"
					selectedHtml+= 	"<div class=\"modal fade\" id=\"modal-"+ data._id +"\">"
					selectedHtml+= 		"<div class=\"modal-dialog\">"
					selectedHtml+=			"<div class=\"modal-content\">"
					selectedHtml+=				"<div class=\"modal-header\">"
					selectedHtml+=					"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>"
					selectedHtml+=					"<h4 class=\"modal-title\">"+ data.ORG_NAME +"</h4>"
					selectedHtml+=				"</div>"
					selectedHtml+=				"<div class=\"modal-body\">"
					selectedHtml+=					"<p>"+ data.ORG_INTRODUCTION +"</p>"
					selectedHtml+= 				"<div class=\"modal-footer\">"
					selectedHtml+= 					"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>"
					selectedHtml+=				"</div>"
					selectedHtml+=			"</div>"
					selectedHtml+=		"</div>"
					selectedHtml+=	"</div>"
					selectedHtml+= "</li>"						
				})
				}else{
					alert("沒有結果")	
				}
				$(".centerList>ul").html(selectedHtml);
				console.log(selected.length)	
			})
		}
	})
})
