// первый
let fillArray=[];
function getRandomArray(len) {
	for (let i=0;i<len;i++){
		fillArray[i]=Math.ceil(Math.random()*10+5) ;
		console.log(fillArray[i]);
	}
}
getRandomArray(5);
// второй
console.log('........')
let sum=0;
for(let i=0;i<fillArray.length;i++){
	sum+=fillArray[i];
}
let i=0;
sum/=fillArray.length;
while (i<=fillArray.length){
	if (sum<fillArray[i])
		console.log(fillArray[i]);
	i++;
}
// третее
console.log('.........');
let b=100;
let c=100;
let t=0;
for(let i=0;i<fillArray.length;i++){
	if(fillArray[i]<b){
		b=fillArray[i];
		t=i;
	}
}
for(let i=t;i<fillArray.length;i++){
	fillArray[i]=fillArray[i+1];
}
for(let i=0;i<fillArray.length-1;i++){
	if(fillArray[i]<c){
		c=fillArray[i];
	}
}
console.log(b,c);
//четвертое
console.log('.........');
for(let i=0;i<fillArray.length-1;i++){
	if(fillArray[i]<0.3){
		fillArray[i]==0;
	}
	console.log(fillArray[i]);
} 
// пятое
console.log('.........');
let p=0;
let writeArray=[];
let emptyArray=[];
function getArray(len) {
	for (let i=0;i<len;i++){
		writeArray[i]=Math.ceil(Math.random()*10+5) ;
		console.log(writeArray[i]);
	}
}
getArray(5);
for(let i=writeArray.length-1;i>=0;i--){
if(p<writeArray.length){
	emptyArray[p]=writeArray[i];
	console.log(emptyArray[p]);
	p++;
}
}
for(let i=0;i<emptyArray.length;i++){
	emptyArray[i]+=writeArray[i];
	console.log(emptyArray[i]);
}
// шестой
console.log('...........');
let n=0;
for(let m=0;m<writeArray.length;m++){
for(let i=0;i<writeArray.length;i++){
	if (writeArray[i]>writeArray[i+1]){
		n=writeArray[i];
		writeArray[i]=writeArray[i+1];
		writeArray[i+1]=n;
	}
}
}
console.log(writeArray);
// седьмой
console.log('............');
let fullArray=[];
 let q=0;
 let v=0; 
 let summa=0;
 	for (let j=0;j<5;j++){
 		fullArray[j]=Math.random();
 		console.log(fullArray[j]);
 	}
 	for (let i=0;i<fullArray.length;i++){
 		for (let b=0;b<fullArray.length;b++){
 			if (i==b){
 				continue;
 			}
 			if((fullArray[i]+fullArray[b]>0.999) && (fullArray[i]+fullArray[b]<1.001)){
 				console.log(fullArray[i]+' + '+fullArray[b]+' = 1');
	 		}
 		}
 	}
//восьмой
console.log('............');
let addArray=[];
let bnum=0;
let max=0;
let consArr=[];
	for (let i=0;i<5;i++) {
		consArr[i]=Math.random();
		console.log(consArr[i]+'.....');
	}
	for(let i=0;i<consArr.length;i++) {
		for (let j=0;j<consArr.length;j++) {
			if (consArr[j]>max) {
				max=consArr[j];
				bnum=j;
	    	}
		}
		addArray[bnum]=i+1;
		consArr[bnum]=0;
		max= 0;
    }
	for (let j=0;j<consArr.length;j++) {
	console.log(addArray[j]);
	}
//девятый
let mash= 0;
function xArray(x) {
	let empArray=[];
	let fulArr=[]
	for (let i=0;i<5;i++) {
		empArray[i]=Math.random();
		console.log(empArray[i]+'.........');
	}
	for (let i=4-x+1;i<5;i++) {
		fulArr[mash]=empArray[i];
		mash++;
	}
	mash=0;
	for (let i=x;i<5;i++) {
		fulArr[i]=empArray[mash];
		mash++;
	}
	for(let b=0;b < fulArr.length;b++){
		console.log(fulArr[b]);
	}
}
xArray(1);