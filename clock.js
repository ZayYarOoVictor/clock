var date=new Date()
function zay(){
    var date=new Date();
    const sec= document.querySelector('#second');
    const minute=document.querySelector('#minute');
    const hour=document.querySelector('#hour')
    
    sec.style.transform=`rotate(${date.getSeconds()*6}deg)`
    minute.style.transform=`rotate(${date.getMinutes()*6-60}deg)`
    hour.style.transform=`rotate(${date.getHours()*30-180+date.getMinutes()/2}deg)`
    
}
setInterval(zay,100)
''