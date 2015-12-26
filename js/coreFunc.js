var gui={
	main:{
		page:"",
		load:function(p){
			$("div#main").html("");
			gui.timer.redirect.stop();
			gui.timer.login.stop(); 
			$.ajaxSetup({ cache: false });
			$("div#main").load(p, function(){
				gui.main.page=p; 
			});
		},
		reload:function(p){
			gui.main.load(gui.main.page); 
		},
		redirect:function(p,t){
			gui.timer.redirect.restart('gui.main.load("'+p+'")', t); 
		}
	},
	menu:{
		page:"",
		load:function(p){
			$("div#menu").html("");
			gui.timer.redirect.stop();
			$.ajaxSetup({ cache: false });
			$("div#menu").load(p, function(){
				gui.menu.page=p; 
			});
		},
		reload:function(p){
			gui.menu.load(gui.menu.page); 
		}
	},
	content:{
		page:"",
		load:function(p){
			$("div#content").html("");
			gui.timer.redirect.stop();
			$.ajaxSetup({ cache: false });
			$("div#content").load(p, function(){
				gui.content.page=p; 
			});
		},
		reload:function(){
			gui.content.load(gui.content.page); 
		}
	},
	now_contentpg:"",
	footer:{
		page:"",
		load:function(p){
			$("div#footer").html("");
			gui.timer.redirect.stop();
			$.ajaxSetup({ cache: false });
			$("div#footer").load(p, function(){
				gui.footer.page=p; 
			});
		},
		reload:function(){
			gui.footer.load(gui.footer.page); 
		}
	},
	logo:{
		page:"",
		load:function(p){
			$("div#logo").html("");
			gui.timer.redirect.stop();
			$.ajaxSetup({ cache: false });
			$("div#logo").load(p, function(){
				gui.logo.page=p; 
			});
		},
		reload:function(){
			gui.logo.load(gui.logo.page); 
		}
	},
	coverpg:{
		page:"",
		load:function(p){
			$("div#coverpg").html("");
			gui.timer.redirect.stop();
			$.ajaxSetup({ cache: false });
			$("div#coverpg").load(p, function(){
				gui.coverpg.page=p; 
			});
		},
		reload:function(){
			gui.coverpg.load(gui.coverpg.page); 
		}
	},
	err:{
		id:"",
		load:function(id){
			gui.err.id=id; 
			gui.main.load("err.htm"); 
		}
	},
	reload:function(){
//		gui.logo.reload(); 
		gui.content.reload(); 
		gui.menu.reload(); 
		gui.footer.reload(); 
		wizard.unload(); 
	},
	link:0,
	linkcount:0,
	timer:{
		pooling:{
			timer:"",
			period:0,
			func:"",
			count:0,
			times:0,
			start:function(s,p){
				gui.timer.pooling.period=p;
				gui.timer.pooling.func=s;
				gui.timer.pooling.timer=setTimeout("gui.timer.pooling.loop()",p);
			},
			loop:function(){
				gui.timer.pooling.func();
				gui.timer.pooling.timer=setTimeout("gui.timer.pooling.loop()",gui.timer.pooling.period);
			},
			startwithcount:function(s,p,c){
				gui.timer.pooling.period=p;
				gui.timer.pooling.func=s;
				gui.timer.pooling.count=c;
				gui.timer.pooling.times=0;
				gui.timer.pooling.timer=setTimeout("gui.timer.pooling.loopwithcount()",p);
			},
			loopwithcount:function(){
				gui.timer.pooling.func();
				gui.timer.pooling.times++;
				if(gui.timer.pooling.times<gui.timer.pooling.count){
					gui.timer.pooling.timer=setTimeout("gui.timer.pooling.loopwithcount()",gui.timer.pooling.period);
				}
			},
			stop:function(){
				if(gui.timer.pooling.timer){clearTimeout(gui.timer.pooling.timer);}
			},
			restart:function(s,p){
				gui.timer.pooling.stop(); 
				gui.timer.pooling.start(s,p); 
			}
		},
		login:{
			timer:"",
			period:0,
			func:"",
			start:function(s,p){
				gui.timer.login.period=p;
				gui.timer.login.func=s;
				gui.timer.login.timer=setTimeout("gui.timer.login.loop()",p);
			},
			loop:function(){
				gui.timer.login.func();
				gui.timer.login.timer=setTimeout("gui.timer.login.loop()",gui.timer.login.period);
			},
			stop:function(){
				if(gui.timer.login.timer){clearTimeout(gui.timer.login.timer);}
			},
			restart:function(s,p){
				gui.timer.login.stop(); 
				gui.timer.login.start(s,p); 
			}
		},
		redirect:{
			timer:"",
			start:function(s,p){
				gui.timer.redirect.timer=setTimeout(s,p);
			},
			stop:function(){
				if(gui.timer.redirect.timer){clearTimeout(gui.timer.redirect.timer);}
			},
			restart:function(s,p){
				gui.timer.redirect.stop(); 
				gui.timer.redirect.start(s,p); 
			}
		}
	}
}; 

function loadTidTabByHtml(tab){
	for(var key in tab){
		$('[tid="'+key+'"]').html(tab[key]);
	}
}
function loadIdTabByTxt(tab){
	for(var key in tab){
		$('#'+key).text(tab[key]);
	}
}
function loadSelByTxt(tab){
	for(var key in tab){
		$('[sid="'+key+'"]').text(tab[key]);
	}
}

function htmlspecialchars(str){
	if(str===null) return '';
	str = str.replace(/</g,"&lt;");
	str = str.replace(/ /g,"&nbsp;");
	return str;
}

function setCookieMin(name, value, min){
	var expire=new Date();
	expire.setTime(expire.getTime()+(min*60*1000));
	setCookie(name, value, expire);
}

function setCookie(name, value) {
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path = (argc > 3) ? argv[3] : null;
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : null;
	document.cookie = escape(name) + "=" + escape(value) +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == null) ? "" : ("; secure=" + secure));
}

function delCookie(name) {
	var expDate = new Date();
	expDate.setTime(expDate.getTime()-1);
	document.cookie = escape(name) + "=; expires=" + expDate.toGMTString();
}

function getCookie(name)
{
	var value = document.cookie;
	var start = value.indexOf(" " + name + "=");
	if (start == -1)
	{
		start = value.indexOf(name + "=");
	}
	if (start == -1)
	{
		value = null;
	}
	else
	{
		start = value.indexOf("=", start) + 1;
		var end = value.indexOf(";", start);
		if (end == -1)
		{
			end = value.length;
		}
		value = unescape(value.substring(start,end));
	}
	return value;
}
