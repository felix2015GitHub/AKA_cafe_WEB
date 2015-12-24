var gui={
	main:{
		page:"",
		load:function(p){
			$("div#main").html("");
			gui.timer.info.stop();
			gui.timer.timeinfo.stop();
			gui.timer.redirect.stop();
			gui.timer.login.stop();
//			wizard.unload(); 
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
	side:{
		page:"",
		load:function(p){
			$("div#side").html("");
			gui.timer.info.stop();
			gui.timer.timeinfo.stop();
			gui.timer.redirect.stop();
			$.ajaxSetup({ cache: false });
			$("div#side").load(p, function(){
				gui.side.page=p; 
			});
		},
		reload:function(p){
			gui.side.load(gui.side.page); 
		}
	},
	content:{
		page:"",
		load:function(p){
			$("div#content").html("");
			gui.timer.info.stop();
			gui.timer.timeinfo.stop();
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
			gui.timer.info.stop();
			gui.timer.timeinfo.stop();
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
			gui.timer.info.stop();
			gui.timer.timeinfo.stop();
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
			gui.timer.info.stop();
			gui.timer.timeinfo.stop();
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
	mainWizard:{
		page:"",
		load:function(p){
			$("div#mainWizard").html("");
			gui.timer.info.stop();
			gui.timer.timeinfo.stop();
			gui.timer.redirect.stop();
			$.ajaxSetup({ cache: false });
			$("div#mainWizard").load(p, function(){
				gui.mainWizard.page=p; 
			});
		},
		reload:function(){
			gui.mainWizard.load(gui.mainWizard.page); 
		}
	},
	cfgbg:{
		minHeight:640,
		minWidth:1012,
		chgHeight:function(h){
			gui.cfgbg.minHeight=h;
			//$("#cfgbg").css("height",h+"px");
			if($(window).height()<gui.cfgbg.minHeight){
				$("#main").css("height", gui.cfgbg.minHeight+"px");
			}else{
				$("#main").css("height","100%");
			}
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
		gui.side.reload(); 
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
		info:{
			timer:"",
			start:function(s,p){
				gui.timer.info.timer=setTimeout(s,p);
			},
			stop:function(){
				if(gui.timer.info.timer){clearTimeout(gui.timer.info.timer);}
			},
			restart:function(s,p){
				gui.timer.info.stop(); 
				gui.timer.info.start(s,p); 
			}
		},
		timeinfo:{
			timer:"",
			start:function(s,p){
				gui.timer.timeinfo.timer=setTimeout(s,p);
			},
			stop:function(){
				if(gui.timer.timeinfo.timer){clearTimeout(gui.timer.timeinfo.timer);}
			},
			restart:function(s,p){
				gui.timer.timeinfo.stop(); 
				gui.timer.timeinfo.start(s,p); 
			}
		},
		uptimeinfo:{
			timer:"",
			start:function(s,p){
				gui.timer.uptimeinfo.timer=setTimeout(s,p);
			},
			stop:function(){
				if(gui.timer.uptimeinfo.timer){clearTimeout(gui.timer.uptimeinfo.timer);}
			},
			restart:function(s,p){
				gui.timer.uptimeinfo.stop(); 
				gui.timer.uptimeinfo.start(s,p); 
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
	}, 
	loadNv2IdCheckbox:function(nv, id){
		var nvget={};
		nvget['nvget']=nv;
		$.ajaxSetup({ cache: false });
		$.getJSON(CGI_NAME, nvget, function(data){
			if(data[nv]=='1'){
				$(id).attr('checked', 'enabled'); 
			}
			if(data[nv]=='enabled'){
				$(id).attr('checked', 'enabled');
			}
		});
	},
	loadNv2IdCheckboxWithFunc:function(nv, id, func){
		var nvget={};
		nvget['nvget']=nv;
		$.ajaxSetup({ cache: false });
		$.getJSON(CGI_NAME, nvget, function(data){
			if(data[nv]=='1'){
				$(id).attr('checked', 'enabled'); 
			}
			if(data[nv]=='enabled'){
				 $(id).attr('checked', 'enabled');
			}
			func(); 
		});
	},
	loadNv2IdRadio:function(nv, id){
		var nvget={};
		nvget['nvget']=nv;
		$.ajaxSetup({ cache: false });
		$.getJSON(CGI_NAME, nvget, function(data){
			$(id).attr('checked', 'enabled'); 
		});
	},
	loadNv2IdRadioWithFunc:function(nv, id, func){
		var nvget={};
		nvget['nvget']=nv;
		$.ajaxSetup({ cache: false });
		$.getJSON(CGI_NAME, nvget, function(data){
			$(id).attr('checked', 'enabled'); 
			func(); 
		});
	},
	loadNvWithFunc:function(nv, func){
		var nvget={};
		if(webtest==1){
			var webtestdata=webtestnv[nv];
			func(webtestdata);
		}else{
			nvget['nvget']=nv;
			$.ajaxSetup({ cache: false });
			var p=$.getJSON(CGI_NAME, nvget, function(data){
	/*
				for(var x in data[nv]){
					data[nv][x].split(" ").join("nbsp;");
				}
	*/
				for(var x in data[nv]){
					data[nv][x].split("<").join("&lt;");
				}
				func(data[nv]);
			});
		}
		return p; 
	},
	loadNv2Id:function(nv, id){
		var nvget={};
		nvget['nvget']=nv;
		$.ajaxSetup({ cache: false });
		$.getJSON(CGI_NAME, nvget, function(data){
			$(id).val(data[nv]); 
		});
	},
	loadNv2IdWithFunc:function(nv, id, func){
		var nvget={};
		nvget['nvget']=nv;
		$.ajaxSetup({ cache: false });
		$.getJSON(CGI_NAME, nvget, function(data){
			$(id).val(data[nv]); 
			func();
		});
	},
	loadNv2IdCheckbox:function(nv, id){
		var nvget={};
		nvget['nvget']=nv;
		$.ajaxSetup({ cache: false });
		$.getJSON(CGI_NAME, nvget, function(data){
			if(data[nv]=='1'){
				$(id).attr('checked', 'enabled'); 
			}
			if(data[nv]=='enabled'){
				 $(id).attr('checked', 'enabled');
			}
		});
	},
	loadNv2IdCheckboxWithFunc:function(nv, id, func){
		var nvget={};
		nvget['nvget']=nv;
		$.ajaxSetup({ cache: false });
		$.getJSON(CGI_NAME, nvget, function(data){
			if(data[nv]=='1'){
				$(id).attr('checked', 'enabled'); 
			}
			if(data[nv]=='enabled'){
				 $(id).attr('checked', 'enabled');
			}
			func(); 
		});
	},
	loadNv2IdSelect:function(id){
		gui.loadNv2Id(id, "select#"+id); 
	},
	loadNv2IdSelectWithFunc:function(id, func){
		gui.loadNv2IdWithFunc(id, "select#"+id, func); 
	},
	loadNvByTab:function(tab){
		for(var key in tab){
			if(tab[key]=="checkbox"){
				gui.loadNv2IdCheckbox(key, "#"+key); 
			}else if(tab[key]=="radio"){
				gui.loadNv2IdRadio(key, "#"+key); 
			}else if(tab[key]=="select"){
				gui.loadNv2IdSelect(key); 
			}else{
				gui.loadNv2Id(key, "#"+key); 
			}
		}
	},
	nvsetJSONFunc:function(cginame, nvset, func){
		if(webtest==1){
			var data={"nvset":"ok"};
			for(var setdata in nvset){
				if((setdata!=='act')&&(setdata!=='service')){
					webtestnv[setdata]=nvset[setdata];
				}
				if(setdata=='service'){
					webtestservicefunc[nvset[setdata]]();
				}
			}
			func(data);
		}else{
			$.getJSON(CGI_NAME, nvset, function(data){
				func(data);
			});
		}
	}
}; 
var wizard={
	id:0,
	isLoad:0,
	nvntp:"",
	nvwanid:"",
	nvwan:"",
	nvstep:0,
	load:function(id){
		switch(id){
			case 1:
				wizard.isLoad=1; 
				wizard.id=id;
				gui.content.load("setup/systz.htm");
				wizardforward("step1");
				wizardback("step2");
				wizardback("step3");
				break; 
			case 2:
				wizard.isLoad=1; 
				wizard.id=id;
				gui.content.load("setup/wanindex.htm");
				wizardforward("step2");
				wizardback("step1");
				wizardback("step3");
				break; 
			case 3:
				wizard.isLoad=1; 
				wizard.id=id;
				wizardforward("step3");
				wizardback("step1");
				wizardback("step2");
				break; 
			case 4:
				wizard.isLoad=0; 
				wizard.id=id;
				gui.side.load("frame/frame_menu.htm");
				gui.content.load("setup/welcome.htm"); 
				wizardback("step1");
				wizardback("step2");
				wizardback("step3");
				break; 
		}
		return wizard.isLoad; 
	},
	unload:function(){
		wizard.id=0; 
		wizard.isLoad=0; 
		wizard.nvntp="";
		wizard.nvwanid="";
		wizard.nvwan="";
	},
	sys_mode:0,
	manual2gClick:0,
	manual5gClick:0,
	conntest:0,  //connecting test , default 0 , 2.4G=2 , 5G=5
	config:0  //config done , yes 1 , no 0
};
var APwizard={
	wz2g:{
		ssid:"",
		channel:0,
		encryption:0,
		keyLength:0,
		keyFormat:0,
		defaultKey:0,
		wepKey1:"",
		wepKey2:"",
		wepKey3:"",
		wepKey4:"",
		auth:0,
		pskFormat:0,
		pskKey:"",
		wpsstatus:1
	},
	wz5g:{
		ssid:"",
		channel:0,
		encryption:0,
		keyLength:0,
		keyFormat:0,
		defaultKey:0,
		wepKey1:"",
		wepKey2:"",
		wepKey3:"",
		wepKey4:"",
		auth:0,
		pskFormat:0,
		pskKey:"",
		wpsstatus:1
	},
	unload2g:function(){
		APwizard.wz2g.ssid="";
		APwizard.wz2g.channel=0;
		APwizard.wz2g.encryption=0;
		APwizard.wz2g.keyLength=0;
		APwizard.wz2g.keyFormat=0;
		APwizard.wz2g.defaultKey=0;
		APwizard.wz2g.wepKey1="";
		APwizard.wz2g.wepKey2="";
		APwizard.wz2g.wepKey3="";
		APwizard.wz2g.wepKey4="";
		APwizard.wz2g.auth=0;
		APwizard.wz2g.pskFormat=0;
		APwizard.wz2g.pskKey="";
		APwizard.wz2g.wpsstatus=1;
	},
	unload5g:function(){
		APwizard.wz5g.ssid="";
		APwizard.wz5g.channel=0;
		APwizard.wz5g.encryption=0;
		APwizard.wz5g.keyLength=0;
		APwizard.wz5g.keyFormat=0;
		APwizard.wz5g.defaultKey=0;
		APwizard.wz5g.wepKey1="";
		APwizard.wz5g.wepKey2="";
		APwizard.wz5g.wepKey3="";
		APwizard.wz5g.wepKey4="";
		APwizard.wz5g.auth=0;
		APwizard.wz5g.pskFormat=0;
		APwizard.wz5g.pskKey="";
		APwizard.wz5g.wpsstatus=1;
	}
};
var CGI_NAME='status.cgi'; 
function checkLoginWithFunc(func){
	var nvget={};
	nvget['nvget']='login';
	$.ajaxSetup({ cache: false });
	//gui.nvsetJSONFunc(CGI_NAME, nvset, function(data){
	$.getJSON(CGI_NAME, nvget, function(data){
		if(data['login']=='1'){
			func();
		}else if(data['login']=='2'){
			gui.err.load(3);
		}else if(data['login']=='4'){
			gui.main.load("setup/upg_progress.htm");
		}else{
			gui.main.load("login.htm");
			setwizard0();
		}
	});
}
function setwizard0(){
	var nvset={};
	nvset={
		"wizard_setting":"0",
		"act":"nvset"
	}
	gui.nvsetJSONFunc(CGI_NAME, nvset, function(data){
	//$.getJSON(CGI_NAME, nvset, function(data){
		if(data['nvset']=='ok'){
		}
	});
}
function checkLogin(){
    nvset={
		"login":"2"
    }; 
    gui.nvsetJSONFunc(CGI_NAME, nvset, function(data){
    //$.getJSON(CGI_NAME, nvset, function(data){
        if(data['login']!='1'){
        	gui.timer.uptimeinfo.stop();
		gui.timer.login.stop();
		gui.err.load(1); 
		gui.main.redirect('login.htm',5000); 
	}
    });
}

function logout(){
	var nvset={};
	nvset={
		"login":"3"
	}; 
	gui.timer.uptimeinfo.stop();
	gui.timer.login.stop(); 
	gui.nvsetJSONFunc(CGI_NAME, nvset, function(data){
	//$.getJSON(CGI_NAME, nvset, function(data){
		if(data['login']!='1'){
			gui.main.load("login.htm"); 
		}
	});
}
var statusModel="Wi-fi Dualband Repeater";
var selectap={
	done:0,
	ssid:"",
	bssid:"",
	rssi:0,
	channel:0,
	mode:0,
	apmode:0,
	encry:0,
	crypto:0,
	wpamix:0,
	extch:"",
	wzconf_sel:0,
	wzconf_type:0,
	unload:function(){
		selectap.done=0;
		selectap.ssid="";
		selectap.bssid="";
		selectap.rssi=0;
		selectap.channel=0;
		selectap.mode=0;
		selectap.apmode=0;
		selectap.encry=0;
		selectap.crypto=0;
		selectap.wpamix=0;
		selectap.extch="";
		wzconf_sel:0;
		wzconf_type:0;
	},
	ap5g:{
		done:0,
		ssid:"",
		bssid:"",
		rssi:0,
		channel:0,
		mode:0,
		apmode:0,
		encry:0,
		crypto:0,
		wpamix:0,
		extch:"",
		unload:function(){
			selectap.ap5g.done=0;
			selectap.ap5g.ssid="";
			selectap.ap5g.bssid="";
			selectap.ap5g.rssi=0;
			selectap.ap5g.channel=0;
			selectap.ap5g.mode=0;
			selectap.ap5g.apmode=0;
			selectap.ap5g.encry=0;
			selectap.ap5g.crypto=0;
			selectap.ap5g.wpamix=0;
			selectap.ap5g.extch="";
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

var langlist={
"lang_en":"en",
"lang_tw":"tw"
};
/*
var langlist={
"lang_en":"en",
"lang_de":"de",
"lang_nl":"nl",
"lang_fr":"fr",
"lang_it":"it",
"lang_es":"es",
"lang_pt":"pt"
};
*/
function setlang(langid, mode){
	var nvset={};
	nvset={
		"lang":langlist[langid],
		"act":"nvset",
		"service":"langcfg"
	};
	gui.nvsetJSONFunc(CGI_NAME, nvset, function(data){
	//$.getJSON(CGI_NAME, nvset, function(data){
		if(data['nvset']=='ok'){
			if(mode==1){
				gui.content.page="setup/APdashboard.htm";
			}else{
				gui.content.page="setup/dashboard.htm";
			}
			gui.reload();
		}
	});
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
var multiSSID2Gdata=[];
var multiSSID2GdataTmp=[];
var multiSSID5Gdata=[];
var multiSSID5GdataTmp=[];
