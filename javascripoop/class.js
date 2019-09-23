// практика
// 1
class Worker{
	constructor(name,surname,rate,days){
		this.name=name;
		this.surname=surname;
		this.rate=rate;
		this.days=days;
	}
	getSalary(){
		return this.rate*this.days;
	}
}
let Workerf = new Worker("Kolya","Smirnow",4,14);
let getprice = Workerf.getSalary();
console.log(getprice);
// 2
class User{
	constructor(name,password){
		this.name = name;
		this.password = password;
	}
	changename(name,password){
		this.name1=name;
		this.password1=password;
	}
	login(){
		if ((this.name==this.name1) && (this.password==this.password1)){
			console.log("true");
		}
	}
	consoleLog(){
		console.log("this.name= " + this.name + " this.password= " + this.password);
	}
}
class Admin extends User{
	constructor(password){
		super("admin");
		if(password!=""){
			alert("поле залогинено");
		}
	}
	consoleLog(){
		console.log("this.name= "+this.name);
	}
}
let Kostya=new User("Kostya","*");
Kostya.changename("Kostya","*");
Kostya.consoleLog();
Kostya.login();
let admin=new Admin("******");
admin.consoleLog();
// 3
class Machine{
	in(){
		console.log("включить");
	}
	out(){
		console.log("выключить");
	}
}
class Fridge extends Machine{
	constructor(){
		super();
		inccount();
		console.log(count);
	}
	cool(){
		if(count%2==0){
			super.out();
		}
		if(count%2!=0){
			super.in();
		}
	}
}
let count=0;
function inccount(){
	return count++;
}
let Borya=new Fridge();
Borya.cool();
let Borya1=new Fridge();
Borya1.cool();
// 4
class myString{
	reverse(string){
		let array="";
		for(let count=string.length-1;count>=0;count--){
			array+=string[count];
		}
		console.log(array);
	}
	ucFirst(string){
		let array=string[0].toUpperCase()+string.slice(1,);
		console.log(array);
	}
	ucWords(string){
		let array=""
		let sr=string.match(/[ ][A-Za-z0-9]+/g);
		for(let count=0;count<sr.length;count++){
			array=array+sr[count][1].toUpperCase()+sr[count].slice(2,)+" ";
		}
		console.log(array);
	}
}
let check=new myString();
check.reverse("privet ti nezavisimiy chelovec");
check.ucFirst("privet ti nezavisimiy chelovec");
check.ucWords("privet ti nezavisimiy chelovec");
// 5
class Validator{
	constructor(string){
		this.string=string;
	}
	isMail(){
		if(this.string.match(/^[A-Za-z0-9]+\@(gmail|mail)\.(by|com|ru)$/g)!=this.string){
			alert("enter current value mail");
		}
	}
	isDomain(){
		if(this.string.match(/[a-z]+\.[a-z0-9]+\.[a-z]+/g)==null){
			alert("enter current value domain")
		}
	}
	isDate(){
		if(this.string.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{2}/g)!=this.string){
			alert("enter current value date");
		}
	}
	isMobile(){
		if(this.string.match(/^[0-9]{7}$/g)!=this.string){
			alert("enter current value mobile")
		}
	}
}
let test=new Validator("2485868");
// test.isMail();
// test.isDomain();
// test.isMobile();
// test.isDate();
// 6
class Userok {
	constructor(name, surname){	
   this.name = name;
   this.surname = surname;
	}	

   getFullName() {
    	console.log(this.name + ' ' + this.surname);
   }
}
class Student extends Userok{
	constructor(name, surname,year){
		super(name,surname);
		this.year=year;
	}
	getCourse(){
		let num=2009-this.year;
		console.log(num);
	}
}
let Vasya=new Student("Vasiliy","Erovskiy",2005);
Vasya.getFullName();
Vasya.getCourse();
// 8
class Remind{
	call(text){
		let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
		audio.play();
		alert(text);
	}
}
let input=document.getElementById("input");
input.addEventListener("change",function(){
	let Reminder=new Remind();
	setTimeout(Reminder.call(input.value),3600);
})

