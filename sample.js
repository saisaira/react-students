
// document.write("Welcome");

// var a="10";
// var b="20";
// var c= Number(a)+Number(b);
// document.write(c);

// var d="10 apssdc 20 webdesign 34 React";
// var d=d.split(" ");
// console.log(d);
// for (var i = 0; i < d.length; i++) {
//    console.log(i);
// 	if(isNaN(d[i])) {
// 		document.write("it is a string"+"<br/>");
// 	}
// 	else{
// 	document.write("it is a number"+"</br>");
// 	}
// }
// creating a array
var arr = [
{
	name:"sairam",
	age:29,
	salary:"30k",
	hobbies:["playing chess","reading books"],
	favfood:["chicken","mutton"]
},
{
	name:"Rajesh",
	age:33,
	salary:"40k",
	hobbies:["playing crecket","reading books"],
	favfood:["chicken","fish"]
},
{
	name:"Gayathri",
	age:25,
	salary:"40k",
	hobbies:["playing Ludo","reading books"],
	favfood:["chicken","mutton","Fish"]
},
{
	name:"Surya Narayana",
	age:34,
	salary:"45k",
	hobbies:["playing cricket","reading books"],
	favfood:["chicken","mutton","Fish"]
}
]
document.write("<div class='main-div'>");
for (var i = 0; i < arr.length; i++) {
	document.write("<div class='sub-div'>");
	// console.log(arr[i].name);
	 document.write("<h1>"+arr[i].name+"</h1>");
	 document.write("<h4>"+arr[i].age+"</h4>");
	 document.write("<h4>"+arr[i].salary+"</h4>");
	 document.write('<ol>');
	 for (var j = 0; j <arr[i].hobbies.length; j++) {
	 	
	 	document.write("<li>"+arr[i].hobbies[j]+"</li>")  
	 }
	 document.write("</ol>");
	 document.write("</div>")
}
document.write("</div>")
