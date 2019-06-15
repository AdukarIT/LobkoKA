// презентация
// 1
let label=document.querySelectorAll("table label");
console.log(label);
console.log("///");
// 2
let td=document.querySelector("table tr td");
console.log(td);
console.log("///");
// 3
let form=document.querySelector("form")[1];
console.log(form);
console.log("///");
// 4
let formsear=document.querySelector("form[name=search]");
console.log(formsear);
console.log("///");
// 5
let formsearinput=formsear.querySelector("input");
console.log(formsearinput);
console.log("///");
// 6
let elseinfo=document.getElementsByName("info[0]");
console.log(elseinfo);
console.log("///");
// 7
let info0=document.querySelectorAll("form[name=search-person] input")[3];
console.log(info0);
console.log("///");
// 8
let ul=document.createElement("ul");
document.body.appendChild(ul);
ul.classList.add("приа-рво");
let li=document.createElement('li');
	ul.appendChild(li);
	let a=document.createElement("a");
	li.appendChild(a);
	a.href="https./google.com/";
	a.innerHTML="https://google.com";
	a.style="color:red";
let lis=document.createElement('li');
	ul.appendChild(lis);
	let as=document.createElement("a");
	lis.appendChild(as);
	as.href="/tutorial";
	as.innerHTML="/tutorial.html";
let lit=document.createElement('li');
	ul.insertBefore(lit,lis);
	let at=document.createElement("a");
	lit.appendChild(at);
	at.href="local/path";
	at.innerHTML="local/path";
let lif=document.createElement('li');
	ul.appendChild(lif);
	let af=document.createElement("a");
	lif.appendChild(af);
	af.href="ftp://ftp.com/my.zip";
	af.innerHTML="ftp://ftp.com/my.zip";
let lifi=document.createElement('li');
	ul.appendChild(lifi);
	let afi=document.createElement("a");
	lifi.appendChild(afi);
	afi.href="https://node.js.org";
	afi.innerHTML="https://node.js.org";
	afi.style="color:red";
let lisi=document.createElement('li');
	ul.appendChild(lisi);
	let asi=document.createElement("a");
	lisi.appendChild(asi);
	asi.href="https://internal.com/test";
	asi.innerHTML="https://internal.com/test";
	asi.style="color:red";
// домашнее задание
// 1
let div=document.createElement('div');
document.body.appendChild(div);
div.id='#elem';
div.classList.add("www");
// 2
if (div.classList.contains("www"))
	div.classList.remove("www");
// 3
function recursiveSearchTags(doc,tag){
	let arr=[];
	let rec=function(arr,doc,tag){
		for(let i=0;i<doc.children.length;i++){
			let e=doc.children[i];
			if(arr.indexOf(e) != -1)
				break;
			if (e.tagName.toLowerCase()==tag)
				arr.push(e);
			if (e.hasChildNodes())
				rec(arr,e,tag);
		}
	}
	rec(arr,doc,tag);
	return arr;
}
console.log(recursiveSearchTags(document,"li"));
console.log("///");
// 4
let arr=[1,2,3,4,5,6];
for (let i=0;i<ul.children.length;i++){
	ul.children[i].append(arr[i]);
}
console.log(ul);
console.log("///");
// 5
let nexSib=div.previousSibling;
nexSib.append("!");
// 6
div.innerHTML="оборачивай текст";
function wraplnParagraph(){
	let text=div.textContent;
	let p=document.createElement('p');
	div.appendChild(p);
	p.append(text);
	return p;
}
console.log(wraplnParagraph());
console.log("///");
// 7
function normalizeClassNames(doc){
	let r=function(doc){
		for(let i=0;i<doc.children.length;i++){
			let e=doc.children[i];
			if (e.className){
				let k=e.classList.value;
				e.className="";
				let w=-3;
				let q='';
					for (let i=0;i<k.length;i++){
						if (k[i] == '-'){
							w=i+1;
							continue;
						}
						if (i==w){
							q+=k[i].toUpperCase();
							continue;
						}
						q+=k[i];
					}
				e.classList.add(q);
			}
			if(e.hasChildNodes()){
				r(e);
			}
		}
	}
	r(doc);
	return doc;
}
console.log(normalizeClassNames(document));