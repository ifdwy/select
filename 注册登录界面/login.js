
var username=document.getElementById("userName");
var password=document.getElementById("password");
var newpassword=document.getElementById("newpassword");
var toLogin=document.getElementById("login");
var pattern = /^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]+$/;

toLogin.onclick= function (form){
	/*所有的内容不为空 否则不能注册
	不为空的前提下：两者密码要相等 否则弹出提示
	两者密码相等的前提下：密码的长度为大于6的数字加字母组合 否则弹出提示
	*/
	if(username.value !="" && password.value !=""){
		if(password.value == newpassword.value){
			if(password.value.length>5 && pattern.test(password.value)){
				alert("注册成功，跳转到登录界面");
				window.location.href="../test/test.html";
			}else{
				alert("请输入6位数字以上的字母加数字组合密码");
			}
			
		}else{
			alert("两者密码不一致");
		}

	}else{
		alert("请先填写注册信息！");
	}	

}

/*******密码的隐藏与显示*********/
/*******此处还有bug,当是复制的情况下会一直显示为"text"  *********/
function onshow(elmnt,ty){
	elmnt.type=ty;
}

/**重置表单内容***/
function onReset(){
	document.getElementById("toLogin").reset();
}

/**已有账号？登录***/
function onAdmin(){
	window.location.href="../test/test.html";
}