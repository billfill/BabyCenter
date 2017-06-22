$(function(){
	$.ajax({
		url: "https://json2jsonp.com/?url=http%3A%2F%2Fdata.taipei%2Fopendata%2Fdatalist%2FapiAccess%3Fscope%3DresourceAquire%26rid%3Da02ccc34-dd28-4c5d-b527-c5433ec1a453&callback=baby",
		type: 'GET',
		dataType: 'jsonp',
		success: function(data){
			const center = data.result.results;
			const cl = center.length
			let centerHtml= "";
			for(let i = 0; i <cl; i++){
				let address = center[i].ADDRESS.slice(8)
				centerHtml+= "<li class=\"list-group-item\">"
				centerHtml+= 	"<div class=\"row\">"
				centerHtml+= 		"<p class=\"col-md-3 text-center\">"+ center[i].ORG_NAME +"</h4>"
				centerHtml+= 		"<p class=\"col-md-5 text-center\"><a href=\"http://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&q="+ center[i].CITY + center[i].DIVISION+ address +"\" target=\"_blank\">"+ center[i].CITY + center[i].DIVISION+ address +"</a></p>"
				centerHtml+= 		"<p class=\"col-md-2 text-center\">"+ center[i].PHONE +"</p>"
				centerHtml+= 		"<p class=\"col-md-2 text-center\"><a class=\"btn btn-info btn-xs\" data-toggle=\"modal\" href=\'#modal-"+ center[i]._id +"\'>更多資訊</a></p>"
				centerHtml+= 	"</div class=\"row\">"
				centerHtml+= 	"<div class=\"modal fade\" id=\"modal-"+ center[i]._id +"\">"
				centerHtml+= 		"<div class=\"modal-dialog\">"
				centerHtml+=			"<div class=\"modal-content\">"
				centerHtml+=				"<div class=\"modal-header\">"
				centerHtml+=					"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>"
				centerHtml+=					"<h4 class=\"modal-title\">"+ center[i].ORG_NAME +"</h4>"
				centerHtml+=				"</div>"
				centerHtml+=				"<div class=\"modal-body\">"
				centerHtml+=					"<p>"+ center[i].ORG_INTRODUCTION +"</p>"
				centerHtml+= 				"<div class=\"modal-footer\">"
				centerHtml+= 					"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>"
				centerHtml+=				"</div>"
				centerHtml+=			"</div>"
				centerHtml+=		"</div>"
				centerHtml+=	"</div>"
				centerHtml+= "</li>"
			}
		$(".centerList>ul").html(centerHtml);
		}
	})
	$.ajax({
		url: "https://json2jsonp.com/?url=http%3A%2F%2Fdata.taipei%2Fopendata%2Fdatalist%2FapiAccess%3Fscope%3DresourceAquire%26rid%3De7cdaca3-e9da-46f9-b857-395e6e8e06a6&callback=person",
		type: 'GET',
		dataType: 'jsonp',
		success: function(data){
			const personal = data.result.results;
			const cl = personal.length
			let personalHtml= "";
			for(let i = 0; i <cl; i++){
				let address = personal[i].ADDRESS.slice(6)
				personalHtml+= "<li class=\"list-group-item\">"
				personalHtml+= 	"<div class=\"row\">"
				personalHtml+= 		"<p class=\"col-md-3 text-center\">"+ personal[i].ORG_NAME +"</h4>"
				personalHtml+= 		"<p class=\"col-md-5 text-center\"><a href=\"http://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&q="+personal[i].CITY + personal[i].DIVISION+ address +"\" target=\"_blank\">"+personal[i].CITY + personal[i].DIVISION+ address +"</a></p>"
				personalHtml+= 		"<p class=\"col-md-2 text-center\">"+ personal[i].PHONE +"</p>"
				personalHtml+= 		"<p class=\"col-md-2 text-center\"><a class=\"btn btn-info btn-xs\" data-toggle=\"modal\" href=\'#modal-"+ personal[i].FAX +"\'>更多資訊</a></p>"
				personalHtml+= 	"</div class=\"row\">"
				personalHtml+= 	"<div class=\"modal fade\" id=\"modal-"+ personal[i].FAX +"\">"
				personalHtml+= 		"<div class=\"modal-dialog\">"
				personalHtml+=			"<div class=\"modal-content\">"
				personalHtml+=				"<div class=\"modal-header\">"
				personalHtml+=					"<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>"
				personalHtml+=					"<h4 class=\"modal-title\">"+ personal[i].ORG_NAME +"</h4>"
				personalHtml+=				"</div>"
				personalHtml+=				"<div class=\"modal-body\">"
				personalHtml+=					"<p>"+ personal[i].REGISTERED +"</p>"
				personalHtml+=					"<p>"+ personal[i].PROP_TITLE + ": "+ personal[i].PROP+"</p>"
				personalHtml+=					"<p>"+ personal[i].BEDNO_TITLE+ ": "+ personal[i].BEDNO+"</p>"
				personalHtml+= 				"<div class=\"modal-footer\">"
				personalHtml+= 					"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>"
				personalHtml+=				"</div>"
				personalHtml+=			"</div>"
				personalHtml+=		"</div>"
				personalHtml+=	"</div>"
				personalHtml+= "</li>"
			}
		$(".personalList>ul").html(personalHtml);
		}
	})	
});
