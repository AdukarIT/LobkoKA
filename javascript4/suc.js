// 1
let arr = {
	power : "yes"
}
let txt="power";
function trueorfalse(arr,txt) {
	console.log(txt in arr);
}
trueorfalse(arr,txt);
// two
let dish= {
	oatmeal :{
		milk :1,
		flakes :0.3
	},
	portion :3
}
function dishreturn(dish) {
	dish.oatmeal.milk=dish.oatmeal.milk/dish.portion;
	dish.oatmeal.flakes=dish.oatmeal.flakes /dish.portion;
	for (let propName in dish.oatmeal) {
		console.log("для одной порции овсянки требуется   " + dish.oatmeal[propName] + "   " + propName);

	}
}
dishreturn(dish);
// 3
let cylinder ={
	radius :0.5,
	height :1.5,
	volume :function() {
		let volumereturn =Math.PI*Math.pow(this.radius,2)*this.height;
		console.log("объем цилиндра равен   " + volumereturn);
	}	
}
cylinder.volume();
// 4
let penguins ={
	character :"Пингвины мистера Поппера",
	Author :"Ричард и Флоренс Отвотер",
	Genre :"Детская новелла",
	canfly :"true",
	sayhello :function(){
		console.log("Привет.У нас нет имени для каждого.Называй нас   " + this.character);
	},
	fly :function() {
		if (this.canfly =="true") {
			console.log ("Ура.Я летаю!!!");
		}
		else
			console.log("Печаль.Я не могу лететь");
	}
}
penguins.sayhello();
penguins.fly();
