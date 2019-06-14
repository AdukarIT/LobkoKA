//практика
// 1
function counterFactory(start,step){
	let summa = start;
	let tictoc = function(){
		summa += step;
		return summa;
	} 
	return tictoc;
	start+=step;
}
 let firstp = counterFactory(1,1);
 console.log(firstp());
 console.log(firstp());
 console.log("//////////");
 // 2
let secondp=counterFactory(2,2);
 function call(x){
 	let arr=[];
 	for(let i=0;i<x;i++){
 		arr[i]=secondp();
 	}
 	return arr;
 }
 console.log(call(5));
  console.log("//////////");
  // 3
  let str='разбейте текст этой задачи на отдельные слова,удаляя по пути точки и запятые,а полученные слова сложите в массив.';
  let backstr=[''];
  let j=0;
  for(let i=0;i<str.length;i++){
  	if((str[i]==',') || (str[i]==' ') || (str[i]=='.')){
  		j++;
  		if(i != str.length-1){
  			backstr[j]=[''];
  		}
  		continue;
  	}
  	backstr[j]+=str[i];
  }	
  function newproperty(backstr){
  let b=backstr.length-1;
  newstr=[];
  for(let i=0;i<backstr.length;i++){
  	newstr[i]=backstr[b];
  	b--;
  }
  return newstr.sort(function(first,second){

  	if(first.length < second.length) 
  		return 1;
  	else if (first.length  > second.length)
  		return -1;
  	else return 0;
  });
}
function sumnumbers(backstr){
	return backstr.reduce(function(ac,cur){
		ac+=cur.length;
		return ac;
	},0);
}
  console.log(newproperty(backstr));
  console.log(sumnumbers(backstr));
  console.log("//////////");
 // 4
 let obj={
 	greeting:"Привет"
 };
 function func(surname,name){
 	console.log(this.greeting + "," + surname + " " + name);
 }
 func.call(obj,'Иванов','Иван');
   console.log("//////////");
// 5
 function func1(surname,name){
 	console.log(this.greeting + "," + surname + " " + name);
 }
 let arr=[];
 arr.push('Иванов');
 arr.push('Иван');
 func1.apply(obj,arr);
console.log("//////////");
 // домашка
 // 1
 let Arr=['привет','как','дела'];
 function num(arr,x){
 	let id=0;
 	let i=0;
 	let n=String.fromCharCode(x);
 	arr.forEach(function(word){
 		for (let i = 0;i<word.length;i++){
 			if(n == word[i])
 				id++;
 		}
 	});
 	return id;
 }
 console.log(num(Arr,1072));
 console.log("//////////");
 // 2
 let Mas=["dad", "rod", "doctor"];
 function letterCounter(x){
 	let id=0;
 	let n=String.fromCharCode(x);
 	let e = function(arr){
 		arr.forEach(function(word){
 		for (let i = 0;i<word.length;i++){
 			if(n == word[i])
 				id++;
 		}
 		});
 		return id;
 	}
 	return e;
 }
 let countOfD = letterCounter(100);	

console.log(countOfD(Mas));
console.log("//////////");
// 3
let fil=function(date){
	if ((date.state=='California') && (date.growth_from_2000_to_2013>'0'))
		return date;
}
console.log(data.filter(fil));
console.log("//////////");
// 4
let filt=function(data){
	if ((data.latitude<=30) && (data.latitude>=25));
	return data;
}
let s=function(date,num){
	return (date+(+num.population));
}
let fillat=data.filter(filt);
console.log(fillat.reduce(s,0));
console.log("//////////");
// 5
let filte=function(date){
	return date.city[0]=="D";
}
let sa=function(a,b){
	if (a.city > b.city) return 1;
	else if (a.city < b.city) return -1;
	else return 0;
}
let sor=data.filter(filte);
console.log(sor.sort(sa));
console.log("//////////");
// 6
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let s = obj[property];
    if (!acc[s]) {
      acc[s] = [];
    }
    let arr=[]
    arr.city=obj.city;
    arr.population=obj.population;
    arr.rank=obj.rank;
    acc[s].push(arr);
    return acc;
  }, {});
}
let groupedPeople = groupBy(data, 'state');
console.log(groupedPeople);