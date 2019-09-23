document.addEventListener("DOMContentLoaded",function(){
	// практика
	// 1
	let button=document.createElement('button');
	document.body.appendChild(button);
	button.innerHTML="выводит ALERT";
	let lis=button.addEventListener('click',function(){
		alert('обернул');
	});
	// 2
	let buttonTwo=document.createElement('button');
	document.body.appendChild(buttonTwo);
	buttonTwo.innerHTML='some text';
	let ChangeButtonTwo=buttonTwo.addEventListener('click',function(){
		buttonTwo.innerHTML='button';
	});
	// 3
	let form=document.createElement('form');
	document.body.appendChild(form);
	let buttonThree=document.createElement('button');
	buttonThree.innerHTML='disable';
	buttonThree.type="button";
	let buttonFour=document.createElement('button');
	buttonFour.innerHTML='enable';
	let inpText=document.createElement('input');
	buttonFour.type="button";
	inpText.setAttribute("type", "text");
	form.appendChild(inpText);
	form.appendChild(buttonThree);
	form.appendChild(buttonFour);
	buttonThree.addEventListener('click',function(){
		inpText.disabled=true;
	});
	buttonFour.addEventListener('click',function(){
		inpText.disabled=false;
	});
	// 4
	let divTwo=document.createElement("div");
	divTwo.style.width="50px";
	divTwo.style.height="50px";
	divTwo.style.top="0";
	divTwo.style.left="300px";
	divTwo.style.backgroundColor="#00f";
	let counter;
	let inpOne=document.createElement("input");
	document.body.appendChild(divTwo);
	let coorX;
	let coorY;
	divTwo.style.position="absolute";
	document.body.appendChild(inpOne);
	inpOne.setAttribute("type","number");
	divTwo.addEventListener("mouseup",function(){
		counter=0;
	});
	window.addEventListener("mousemove",function(event){
		if(counter==1){
			divTwo.style.top=event.pageY - 25 +"px";
			divTwo.style.left=event.pageX -25  +'px';
			console.log("top:" + event.pageY + " " + "left:" + event.pageX);
		}
	});
	divTwo.addEventListener("mousedown",function(event){
		counter=1;
	});
	// 5
	let divThree=document.createElement('div');
	document.body.appendChild(divThree);
	divThree.style.width="100px";
	divThree.style.height="100px";
	divThree.style.border='1px solid #000000';
	let inpTwo=document.createElement('input');
	inpTwo.setAttribute("type", "text");
	document.body.appendChild(inpTwo);
	divThree.addEventListener('mousemove',function(event){
		inpTwo.setAttribute('value',"x : " + event.offsetX + " " + "y : " + event.offsetY);
	});
	// 6
	let divFour=document.createElement('div');
	document.body.appendChild(divFour);
	let imgOne=document.createElement('img');
	divFour.appendChild(imgOne);
	let imgTwo=document.createElement('img');
	divFour.appendChild(imgTwo);
	divFour.style.width="100px";
	divFour.style.height="100px";
	divFour.style.border='1px solid #000000';
	imgOne.setAttribute("src","images/images.jpg");
	imgOne.style.maxWidth="100%";
	imgTwo.setAttribute("src","images/imagethi.jpg");
	imgTwo.style.maxWidth="100%";
	imgTwo.style.display="none";
	let eventf=divFour.addEventListener('dblclick',function(){
		imgOne.style.display="none";
		imgTwo.style.display="block";
	});
	// 7
	let divFive=[];
	let container = document.createElement('div');
	document.body.appendChild(container);
	for(let i=0;i<20;i++){
		divFive[i]=document.createElement('div');
		container.appendChild(divFive[i]);
		divFive[i].style.width = "100px";
		divFive[i].style.height = "200px";
		divFive[i].style.display = "inline-block";
		divFive[i].style.border="1px solid #000";
	}
	container.addEventListener("mouseover",function(e){
		if (e.target == this)
			return;
		e.target.style.borderRadius="50%";
		e.target.style.transition="border-radius .5s";
	});
	container.addEventListener("mouseout",function(e){
		if (e.target == this)
			return;
		e.target.style.borderRadius="0";
		e.target.style.transition="border-radius .5s";
	});
	// домашка
	// 1
	let inpThree=document.createElement("input");
	document.body.appendChild(inpThree);
	let buttonFive=document.createElement("button");
	buttonFive.innerHTML="clone";
	document.body.appendChild(buttonFive);
	buttonFive.addEventListener('click',function(){
		let node=inpThree.cloneNode(true);
		document.body.insertBefore(node,buttonFive);
	});
	// 2
	let table=document.createElement("table");
	document.body.appendChild(table);
	let tr=document.createElement("tr");
	table.appendChild(tr);
	let th=document.createElement("th");
	th.innerHTML="Класс";
	th.style.border="1px solid #000000";
	tr.appendChild(th);
	let trs=document.createElement("tr");
	table.appendChild(trs);
	let td=document.createElement("td");
	trs.appendChild(td);
	td.innerHTML="Название";
	td.style.border="1px solid #000000";
	let num=1;
	table.addEventListener("click",function(){
		if (num==1){
			if (table.classList) {
				table.classList.remove("highlight");
			}
			table.classList.add("bordered");
		}
		if(num==2){
			table.classList.remove("bordered");
			table.classList.add("striped");
		}
		if(num==3){
			table.classList.remove("striped");
			num=0;
			table.classList.add("highlight");
		}
		num++;
	});
	// 3
	let labelFirst=document.getElementsByTagName("label")[0];
	labelFirst.addEventListener("click",function(){
		table.classList.add("bordered");
	})
	let labelTwo=document.getElementsByTagName("label")[1];
	labelTwo.addEventListener("click",function(){
		table.classList.remove("bordered");
		table.classList.add("striped");
	});
	let labelThree=document.getElementsByTagName("label")[2];
	labelThree.addEventListener("click",function(){
		table.classList.remove("striped");
		table.classList.add("highlight");
	});
	// 4
	let buttonSix=document.createElement("button");
	document.body.appendChild(buttonSix);
	let p=document.createElement("p");
	buttonSix.appendChild(p);
	p.innerHTML="вывел";
	buttonSix.addEventListener("click",alertText);
	let buttonSeven=document.createElement("button");
	document.body.appendChild(buttonSeven);
	function alertText(){
		alert(this.innerHTML);
	}
	buttonSeven.innerHTML="удалил";
	buttonSeven.addEventListener("click",function(){
		buttonSix.removeEventListener("click",alertText);
	});
	// 5
	let divSix=document.createElement("div");
	document.body.appendChild(divSix);
	let pTwo=document.createElement("p");
	document.body.appendChild(pTwo);
	let buttonEight=document.createElement("button");
	document.body.appendChild(buttonEight);
	let aTwo=document.createElement("a");
	document.body.appendChild(aTwo);
	document.addEventListener("click",function(event){
		console.log(event.target.tagName.toLowerCase());
	});
	aTwo.innerHTML="ссылка";
	pTwo.innerHTML="параграф";
	divSix.innerHTML="блок";
	buttonEight.innerHTML="кнопка";
	// 6
	let imgThree=document.getElementsByTagName("img")[0];
	let imgFour=document.getElementsByTagName("img")[1];
	imgThree.style.display="none";
	imgFour.addEventListener("mousemove",function(){
		imgThree.style.display="block";
		imgFour.style.display="none";
	});
	imgThree.addEventListener("mouseleave",function(){
		imgThree.style.display="none";
		imgFour.style.display="block";
	});
	// 7
	let imgFive=document.getElementsByTagName("img")[2];
	imgFive.style.height="50px";
	imgFive.style.width="100px";
	divSeven=document.createElement("div");
	document.body.appendChild(divSeven);
	function imgMore(){
		this.style.position="absolute";
		this.style.height="300px";
		this.style.zIndex="5";
		this.style.display="block";
		this.style.width="600px";
		this.style.zIndex="10";
		this.style.top="30%";
		this.style.left="30%";
		divSeven.style.backgroundColor="rgba(0,0,0,.5)";
		divSeven.style.position="absolute";
		divSeven.style.top="0px";
		divSeven.style.left="0px";
		divSeven.style.width="100%";
		divSeven.style.height="100%";
		divSeven.style.zIndex="6";
	}
	imgFive.style.transition="height 5s,widtn 5s";
	imgFive.onclick=imgMore;
});