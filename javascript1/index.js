// первое задание
function getn(n) {
	let entrance = 0;
	if ((n>0) && (n<=100)) {
		entrance = (n / 20);
		for (let i = 1; i<=5 ;i++) {
			while (entrance <= i)
				return i;
		}
	}
}

console.log(getn(100));

//второе задание
let str = 'LKJJK';

switch(str) {


	case 'Peugeot':
	console.log('Peugeot - страна происхождения Франция');
	break;


	case 'Porsche':
	console.log('Porsce - страна происхождения Германия');
	break;


	case 'Ford':
	console.log('Ford - страна происхождения США');
	break;


	case 'Chevrolet':
	console.log('Chevrolet - страна происхождения США');
	break;


	case 'BMW':
	console.log('BMW - страна происхождения Германия');
	break;


	case 'Mercedes':
	console.log('Mercedes - страна происхождения Германия');
	break;


	case 'Lamborghini':
	console.log('Lamborghini - страна происхождения Италия');
	break;


	default:
	console.log('some_input-страна происхождения неизвестна');


}

// третье задание
let n = 2013;

if ((n % 4 == 0) && (n % 100 != 0) && (n % 400 == 0)) 
	console.log('Этот год високосный');
console.log('Этот год не високосный');

// четвёртое задание
let x = 5;


let f =1;
for (let i = 1;i<=10;i++) {
	f = i * x;
	console.log(x + '*' + i + '=' + f);
}

// пятое задание
let sum = 0;

for(let i = 1;i <= 50;i++ ) {
	if (i % 2 == 0)
		continue;
	sum += i;
}
console.log(sum);

// шестое задание
let n1 =0;
let n2 =1;


for(let i = 1;i <=9; i++) {
if (i==1) { 
	n1 = 0;
	console.log(n1);
	continue;
}
if (i== 9) {
	n1=n1+n2;
	console.log(n1);
	continue;
}
if (i==2) {
	n2 = 1;
	console.log(n2);
	continue;
}
n1 = n1+ n2;
n2 = n1 + n2;
console.log(n1);
console.log(n2);
}
// седьмое задание
let qwt = ' ';
let qwy = '#'


for (let j=0 ; j< 8 ; j++) {
		if (j % 2 != 0) {
			let w='';
			for(let i=0;i <4; i++) {
				w=w + qwy + qwt;
			}
			console.log(w);
		}
		if (j % 2 ==0) { 
			let w= '';
			for(let i=0;i <4; i++) {
				w=w + qwt +qwy;
			}
			console.log(w);
		}
}