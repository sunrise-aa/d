function addZero(value){    
    return value < 10 ? "0" + value : value;
}

function getTime(){    
    var time = new Date();    

    var year = time.getFullYear();    
    var month = time.getMonth() + 1;    
    var day = time.getDate();    
    var hour = time.getHours();    
    var minus = time.getMinutes();   
    var second = time.getSeconds(); 

    var week = time.getDay();    
    var area = '日一二三四五'   
   
   
   document.write(year +"年"+addZero(month)+"月"+addZero(day)+"日 星期"+area[week]+addZero(hour)+"时"+addZero(minus)+"分"+addZero(second)+"秒")
}

getTime()
window.setInterval(getTime, 1000)
window.setInterval( location.reload(),2);