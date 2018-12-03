
/*****判断表单内容是否为空,若不为空则跳转至其他的页面********/
var username=document.getElementById("userName");
var pwd=document.getElementById("password");
var onSubmit=document.getElementById("submit");

onSubmit.onclick=function(form){
	if(username.value=="" && pwd.value==""){
		alert("用户名和密码不能为空");
	}
	else{
		if(username.value =="admin"){
			if(pwd.value =="123456"){
				alert("登录成功");
				/***登录成功后并跳转至其他页面*****/
				//window.location.href="../test/canvans.html";
			}
		}
		else{
			alert("用户名和密码不正确");
		}
		
	}

}

/*******密码的隐藏与显示
function onshow(elmnt,ty){
	elmnt.type=ty;
}
*********/
function show(){
	pwd.onmousedown=function() {
		pwd.type="text"
	}
	pwd.onmouseup=function() {
		pwd.type="password"
	}
}



/****没有账号？注册****/
function login(){
	window.location.href="../test/login.html"
}

/**重置表单内容***/
function onReset(){
	document.getElementById("form1").reset();

}

/****悬浮提示*****/
function display(id){
	//控制显示隐藏的内容
	id.style.color="red";
	document.getElementById("t1_show").style.visibility="visible";
	id.onmouseout=function() {
		id.style.color="black";
		document.getElementById("t1_show").style.visibility="hidden";
	}
	
}

/******
//雪花下降样式
//创建一个对象
function Obj(){}
Obj.prototype.draw=function(o){
	//设置图标的颜色以及随机出现的大小
	o.style.color="green";
	o.style.fontSize=14+Math.ceil(Math.random()*16)+'px';
	//设置每次下落的数值
	var speed=0;
	//设置开始下落位置
	var startDraw=Math.random()*document.documentElement.clientWidth;
	o.style.left=startDraw+'px';
	//当笑脸图标下降的高度大于400的时候，则图标消失
	setInterval(function(){
		if(speed<400){
			o.style.top=speed+'px';
			o.style.left=startDraw+Math.ceil(Math.random()*8)+'px';
			speed +=10;
		}
		else{
			o.style.display="none";
		}
	},400);
}

var form=document.getElementById("form1");
//使用setInterval定时器每800毫秒创建一个笑脸
setInterval(function(){
	var x=document.createElement('div');//创建一个div
	x.innerHTML="☺";//设置div里的内容
	x.style.position="absolute";//设置div的绝对路径，如果是相对位置则会引起其他内容的位置发生改变
	form.appendChild(x);//把它放置form中去，appendChild（）是添加一个子节点
	var obj=new Obj();//创建一个函数
	obj.draw(x);//执行函数里的方法
},800);
***********/