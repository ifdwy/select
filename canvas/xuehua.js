//图标降落样式
function Obj(){}
Obj.prototype.draw=function(o){
	//设置图标的颜色以及随机出现的大小
	o.style.color="green";
	o.style.fontSize=12+Math.ceil(Math.random()*14)+'px';
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
	},1000);
}

var flame=document.getElementById("flame");
//使用setInterval定时器每800毫秒创建一个笑脸
setInterval(function(){
	var x=document.createElement('div');//创建一个div
	x.innerHTML="*";//设置div里的内容
	x.style.position="absolute";//设置div的绝对路径，如果是相对位置则会引起其他内容的位置发生改变
	flame.appendChild(x);//把它放置form中去，appendChild（）是添加一个子节点
	var obj=new Obj();//创建一个函数
	obj.draw(x);//执行函数里的方法
},2000);

//利用canvas画图--画树
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
//画树冠
ctx.beginPath();
ctx.moveTo(115,65);
ctx.lineTo(85,75);
ctx.lineTo(105,75);
ctx.lineTo(65,85);
ctx.lineTo(95,85);
ctx.lineTo(55,100);
ctx.lineTo(175,100);
ctx.lineTo(135,85);
ctx.lineTo(165,85);
ctx.lineTo(130,75);
ctx.lineTo(150,75);
ctx.lineTo(115,65);
//阴影
ctx.shadowBlur=10;
ctx.shadowOffsetX=40;
ctx.shadowOffsetY=25;
ctx.shadowColor="gray";

//填充颜色
ctx.fillStyle="green";
ctx.fill();
ctx.lineWidth=1;
ctx.stroke();
ctx.closePath();

//画树干
ctx.beginPath();
ctx.moveTo(105,100);
ctx.lineTo(105,125);
ctx.lineTo(125,125);
ctx.lineTo(125,100);
ctx.fillStyle="#996633";
ctx.fill();
ctx.lineWidth=1;
ctx.stroke();
ctx.closePath();

//利用canvas创建渐变数据
var cvsDate =document.getElementById("cvs_date");
var cvs =cvsDate.getContext("2d");
cvs.font="30px Verdana";
//创建线性渐变
var line=cvs.createLinearGradient(0,0,cvsDate.width,0);
line.addColorStop("0","magenta");
line.addColorStop("0.5","blue");
line.addColorStop("1.0","red");
// 渐变填充
cvs.strokeStyle=line;
cvs.strokeText("now date",0,40);

//获取当前时间
window.onload =function(){
	var count=document.getElementById("count");
	showtime();
}
function showtime(){
	var nowdate=new Date();//创建Date对象nowdate,以获取当前时间
     var year=nowdate.getFullYear(),//获取年份
         month=nowdate.getMonth()+1,//获取月份，getMonth()得到的是0-11，需要加1
         date=nowdate.getDate(),//获取日份
         day=nowdate.getDay(),//获取一周中的某一天，getDay()得到的是0-6
         week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
         h=nowdate.getHours(),
         m=nowdate.getMinutes(),
         s=nowdate.getSeconds(),
         h=checkTime(h),//函数checkTime用于格式化时，分，秒
         m=checkTime(m),
         s=checkTime(s);
     count.innerHTML=year+"年"+month+"月"+date+"日 "+week[day]+" "+h+"："+m+"："+s;
     setTimeout(showtime, 1000);//反复执行函数本身
}
function checkTime(i) {
   if (i<10) {
      i="0"+i;
   }
   return i;
}