// две первые
console.log("..........");
let emptyArray =[];
for (let i=0;i<5;i++) {
	emptyArray[i] =Math.random()*30+15;
}
let pArray =[];
function returnArray (emptyArray) {
	let pAr ={};
	for (let j=0;j<5;j++) {
		pArray[j] =pAr;
	}
	for (let i=0;i<5;i++) {
		pArray[i].initial =emptyArray[i];
		pArray[i].sqrt =Math.sqrt(emptyArray[i]);
		pArray[i].rendition =Math.sqrt(emptyArray[i]).toFixed(2);

		if (Math.floor(Math.sqrt(emptyArray[i]))+0.5 >Math.sqrt(emptyArray[i])) 
		{
			pArray[i].floor ="true";
			pArray[i].ceil ="false";
		}
		else {
			pArray[i].ceil ="true";
			pArray[i].floor ="false";
		}
		for(let propName in pArray[i]) {
			console.log(propName + " " + pArray[i][propName]);
		}
		console.log("..........");
	}
}
returnArray(emptyArray);
// 3
let st ="cbfzddzfbbc";
let num1 =0;
let num2 =0;
let ch=0;
	if (st.length %2==0){
		num1 =st.slice(0,st.length/2);
		num2 =st.slice(st.length/2,st.length);
	}
	else
	{
		num1 =st.slice(0,st.length/2);
		num2 =st.slice(st.length/2+1,st.length);
	}
let v =0;
	for (let i=(num1.length)-1;i>=0;i--) {
		if (num1[i] == num2[v])
			ch++;
		else { 
			console.log('не палиндром');
			break;
		}
		v++;	
	}
	if (ch == num2.length)
		console.log('палиндром');
// 4
let str='sdgsgfgs';
function word(str) {
	let m = 0;
	let arr={};
	let Mass=[];
	for (let j=0;j<str.length;j++) {
		Mass[j]=arr;
	}
	for (let i=0;i<str.length ;i++) {
		Mass[i].letter=str[i];
		for (let b =0;b<str.length;b++) {
			if (i ==b)
				continue;
			if (str[i] == str[b]) {

				m++;
			}
		}
		Mass[i].repetition=m;
		m=0;
		for (let m in Mass[i])
			console.log (m + ':' + Mass[i][m]);
	}
	let n = 0;
	let lk = 0;
	for (let i=0;i<str.length;i++) {
		if (Mass[i].repetition>lk)
			{
			lk=Mass[i].repetition;
			n=i;
		}
	}
	console.log(Mass[n].letter);
}
word(str);
//5
console.log("//////////");
let str1="privet ludi";
let search="i";
let replace="k";
let i=0;
function newstr(str1,search,replace){
		
}
newstr(str1,search,replace);
// 6
let son = 'сам себе друг и приятель';
function Upletter (son) {
	let sir = [];
	let sea = 0;
	let car = 0;
	for (let j=0;j<son.length; j ++) {
		if (son[j]==' ') {
			sir[sea]=j+1;
			sea ++;
		}
	}
	for (let i=0; i <son.length;i++) {
		if (i ==sir[car]) {
			console.log(son[i].toUpperCase());
			car++;
			continue;
		}
		if ( i ==0) {
			console.log(son[i].toUpperCase());
			continue;
		}
		console.log(son[i]);
	}
}	
Upletter(son);
// 7
let seno = 'что тебя не убивает делает тебя лучше' ;
function replacementletter(seno){
	let m = 0;
	let arr=[];
	let Mass=[];
	for (let i=0;i<seno.length ;i++) {
		Mass[i]=seno[i];
		for (let b =0;b<seno.length;b++) {
			if (i ==b)
				continue;
			if (seno[i] == seno[b]) {

				m++;
			}
		}
		arr[i]=m;
		m=0;
	}
	for (let k = 0; k <seno.length;k++){
		if (arr[k] >0) {
			console.log('*');
			continue;
		}
		console.log(Mass[k]);
	}
}

replacementletter(seno);
//8
let date = new Date();

function DayOfWeek(date) {
  let days = ['вс','пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()];
}

console.log(DayOfWeek(date) );
// //9
let day=prompt('Год,месяц,число','2019.5.26');
let dat = new Date (day);

function DayWeek(dat) {
  let days = ['вс','пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[dat.getDay()];
}

console.log(DayWeek(dat) );
// //10
// function dateofbirth (dat,date){
// 	let month=dat.getMonth();
// 	let number=dat.getDate(); 
// 	let month1=date.getMonth();
// 	let number1=dat.getDate();
// 	let dayofbithday=((month1+1)*31-(31-number1))-(((month+1)*31-(31-number)));
// 	if (dayofbirthday<0) {
// 		dayofbithday=((month+1)*31-(31-number))-(((month1+1)*31-(31-number1)));
// 		return dayofbirthday;
// 	}
// 	return dayofbirthday;
// }
// console.log(dateofbirth());


//11
let ett=8;
function getsqrt(ett){
	let newnumber=0;
	for (let i=2;i<=ett;i++){
		if (ett/i == i) {
			newnumber=i;
		}
	}
	if (newnumber != 0){
		return newnumber;
	}
	else{
		throw new Error("Error");
	}
}
console.log(getsqrt(ett));