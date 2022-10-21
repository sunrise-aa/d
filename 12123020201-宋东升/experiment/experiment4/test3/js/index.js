let subject=[["SQL SERVER","C# OOP"],["WEB FORM","HTML/CSS/JAVASCRIPT","ORACLE"],["ASP.NET MVC","LINQ"]]
document.write("subject数组的长度："+subject.length+"<br>")
for(let i=0;i<subject.length;i++){
document.write("subject数组对象的第"+i+"个元素是另一个数组.这个小数组的长度："+subject[i].length+" <br>")
    for(let j=0;j<subject[i].length;j++){
document.write("第"+j+"个元素："+subject[i][j]+"<br>")
    }
    document.write("<hr>")
}