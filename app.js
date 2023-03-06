var hr=document.getElementById('hr')
var min=document.getElementById('min')
var sec=document.getElementById('sec')
var msec=document.getElementById('msec')

var second=0
var milsec=0
var hour=0
var minutes=0
var stopwatch
document.getElementById('btn2').disabled=true
document.getElementById('btn3').disabled=true

function started(){
    
stopwatch=setInterval(function(){
    milsec++
        msec.innerHTML=milsec
        if(milsec==99){
            milsec=0
            second++
            sec.innerHTML=second
           if(second>=60){
            second=0
            minutes++
            min.innerHTML=minutes
            if(minutes>=60){
                minutes=0
                hour++
                hr.innerHTML=hour
            }
           }
    
        }
    
    })
    document.getElementById('btn1').disabled=true
    document.getElementById('btn2').disabled=false
    document.getElementById('btn3').disabled=false

}

function stopped(){
    clearInterval(stopwatch)
    document.getElementById('btn2').disabled=true
    document.getElementById('btn1').disabled=false
    document.getElementById('btn3').disabled=false

}
function reset(){
    clearInterval(stopwatch)
    hour=0
    second=0
    milsec=0
    second=0
    minutes=0
    hr.innerHTML=hour
    sec.innerHTML=second
    min.innerHTML=minutes
    msec.innerHTML=milsec
    document.getElementById('btn3').disabled= true
    document.getElementById('btn1').disabled=false
    document.getElementById('btn2').disabled=true

}
function lap(){
    
}