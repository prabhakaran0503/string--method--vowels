var a=prompt("Enter only string");

document.write("Given string = "+a+"<br><br>");

b=a.split("");
console.log(b)
var c=[];

for (i=0; i<b.length; i++){
    if (b[i]=="a"||b[i]=="e"||b[i]=="i"||b[i]=="o"||b[i]=="u"){
        c.push(b[i]);
    }

}

document.write("vowels in given array =+"+c+"<br><br>");
document.write("Number of vowels in given array ="+c.length);
