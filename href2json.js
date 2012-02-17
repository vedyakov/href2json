/**
	Simple parser for document.location
	Copyright (c) Alex Vedyakov 2012
	MIT Licensed
**/
(function(){
	var href = {}
	
	function getPars(string){
		var obj = {};
		if (string.length>0){
			var arr = string.split(/&/g);
			
			if (arr.length>0){
				var s1, s2, name, value;
				for (var i=0, length=arr.length; i<length; i++){
					s1 = arr[i].split('=');
					if ( s1.length>1){
						name = s1[0];
						value = s1[1];
						value = decodeURIComponent(value.replace(/\+/g," "));
						obj[s1[0]] = s1[1];
					}
				}
			}
		}
		return obj;
	}
	
	href.full = '' + document.location.href;
	
	href.protocol = '' + document.location.protocol;
	href.host = '' + document.location.host;
	href.hostname = '' + document.location.hostname;
	href.port = '' + document.location.port;
	
	href.pathname = '' + document.location.pathname;
	href.paths = href.pathname.split('/');
	if ( href.paths[0].length == 0 ){
		href.paths.shift();
	}
	
	href.hash = '' + document.location.hash;
	if ( href.hash[0] == '#' ){
		href.hash = href.hash.replace('#','');
	}
	href.hashs = getPars(href.hash);
	
	href.search = '' + document.location.search;
	if ( href.search[0] == '?' ){
		href.search = href.search.replace('?','');
	}
	href.searchs = getPars(href.search);
	
	window.href2json = href;
})();