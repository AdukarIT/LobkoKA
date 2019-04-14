// первый номер
function getnum(a,b,c) {
	if ((a > b) && (c > b))
		return b;
	if ((b > a) && (c > a))
		return a;
	if ((a >c) && (b > c))
		return c;
}


console.log(getnum(1,2,3));

// второй номер
function getsec(day,hou,min) {
	let sec = 0;
	sec = day* 24 * 60 *60 + hou *60 * 60 + min * 60;
	return sec;
}


console.log(getsec(0,0,1));

// третий номер
function getfact(num) {
	if(num==1){
		return 1;
	}
	return num * getfact(num-1);
}

console.log(getfact(5));

// четверый номер
let q= 0;
let e = 0;


function getrevnum(lon) {
	let q = lon % 10;
	lon = (lon - q) / 10;
	console.log(q);
	if (lon == 0)
		return lon;
	return getrevnum(lon);
}

getrevnum(4326);

// пятый номер
function getequat(fir,sec,th) {
	let D = 0;
	let n1 = 0;
	let n2 = 0;
	D = Math.pow(sec,2) - 4* fir * th;
	if (D > 0) {
		n1 = (-sec - Math.sqrt(D))/(2* fir);
		n2 = (-sec + Math.sqrt(D))/(2* fir);
		console.log(n1,n2);
	}
	if (D < 0)
		console.log('Корней нет');
	if (D == 0) {
		n1 = -sec/(2* fir);
		n2  = -sec/(2* fir);
		console.log(n1,n2);
	}
}

getequat(1,5,-24);