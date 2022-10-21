for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        document.write("&nbsp")
    }
    for(let z=1;z<=i*2-1;z++){
       
        if(z==i*2-1){
       document.write("*<br>")
        }else{
             document.write("*")
        } 
    }
   
}