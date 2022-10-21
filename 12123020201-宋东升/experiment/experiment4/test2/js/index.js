let count=1;

for(let i=0;i<=100;i++){
    if(i%7!=0&&count%10!=0){
         document.write(i+"&nbsp")
         count++;
    }else if(i%7!=0&&count%10==0){
        document.write(i)
        document.write("<br>")
        count++;
    }
   
}