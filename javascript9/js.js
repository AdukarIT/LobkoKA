// практика
// 1
let option=document.createElement("option");
let select=document.querySelector("select");
select.appendChild(option);
option.innerText="Гребля";
let options=[];
for(let i=0;i<select.children.length;i++){
	options[i]=select.children[i];
}
select.addEventListener('click',function(event){
	console.log(options[select.selectedIndex].value);
});
// 2
let inpOne=document.getElementsByClassName("inpFirst")[0];
let pOne=document.getElementsByClassName("pBlock")[0];
inpOne.addEventListener("change",function(event){
	pOne.innerHTML=inpOne.value;
});
let inpTwo=document.getElementsByClassName("inpSecond")[0];
let pTwo=document.getElementsByClassName("pBlock")[1];
inpTwo.addEventListener("change",function(event){
	pTwo.innerHTML=(+inpOne.value) + (((+inpOne.value) * (+inpTwo.value)) / 100);
	console.log("inpOne" + inpOne.value);
	console.log("inpTwo" + inpTwo.value);
});
// 3
console.log(".What.i.t..".match(/\./g));
// 4
console.log("-12 23 3.97".match(/[0-9]+[.]*[0-9]*\b/g));
// 5
console.log("45 #eer #tFguyr #tsuyyub".match(/#([a-zA-Z0-9]{3}){1,2}/g));
// 6
console.log("".match(/^$/g));
// 7
let login=document.getElementsByClassName("inpfirstClass")[0];
login.addEventListener("change",function (event){
	if(login.value.match(/[^a-zA-Z0-9]+/g) == null || login.value.match(/[a-zA-Z]+/g) == null || login.value.match(/[0-9]+/g)==null || login.value.match(/^.{6,}$/g) == null){
		alert("Введите корректный пароль!!");
	}
	else{
		alert("Проверка пройдена");
	}
});
// 8

let nm=document.getElementById("name");
let nu=document.getElementById("number");
nm.addEventListener("change",function (event){
	if(nm.value.match(/^.+$/g) == null){
		console.log("Введите корректное имя!!");
	}
});
nu.addEventListener("change",function (event) {
	if(nu.value.match(/^.+$/g) == null || nu.value.match(/[A-Za-z]/g) != null){
		console.log("Введите корректное имя!!");
	}
});
// 9
let tells=document.getElementById("formTells");
let submitGet=document.getElementById("submitGet");
let submitDelete= document.getElementById("submitDelete");
submitGet.addEventListener("click", function () {
	submitGet.submit=tells.value ;
})
submitDelete.addEventListener("click", function () {
	tells.value="";
})
// 10 и 11
let first= document.getElementById("first");
first.addEventListener("change",function(){
	formVerify(this);
})
function formVerify(form){
	for(let count=0;count < form.children.length;count++){
		if(form.children[count].type == "email"){
			if(form.children[count].value.match(/\@.*(com|by|ru)/g) == null){
		 		form.children[count].style["border-color"]="blue";				
			}
		 	else{
		 		alert("Добро пожаловать");
		 	}
		}
		if(form.children[count].type == "text"){
			if(form.children[count].value.match(/[a-zA-Z]/g) == null){
		 		form.children[count].style["border-color"]="blue";
			}
			else{
		 		alert("Добро пожаловать");				
			}
		}
	}

}
// 13
let string=" 09.59 am";
console.log(string.match(/\d+[.]{1}[0-9]{1,2}\s(a|p)m/g));
// 14
let stroca="dsf xxx xxx sd";
console.log(stroca.replace(/(\w+)\s\1/g,"$1"));