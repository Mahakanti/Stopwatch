// First access data from HTML

let display=document.querySelector('.display');

let stop=document.querySelector('.stop');
let start=document.querySelector('.start');
let reset=document.querySelector('.reset');
// initial value of second,minute,milisec is zero
let msec= 0;
let sec= 0;
let min= 0;
 let timer=null;//This null value can change later
 start.addEventListener('click',function(){
    //setInterval return timer id,after each ten milisec call startTime function
  console.log(timer);
    timer=setInterval(startTime,10);
 })
 // for stop button
 stop.addEventListener('click',function(){
    console.log(timer);
    clearInterval(timer);
 })
 // for reset button
 reset.addEventListener('click',function(){
   clearInterval(timer);
   display.innerHTML=`00:00:00`;
   msec=sec=min=0;
    
    
 })
// When click on start button this function will call
 function startTime(){
msec++;
// 1000 milisec =1 sec
if(msec==100){
    msec=0;
    sec++;
    if(sec==60){
        sec=0;
        min++;
    }
}
let milisec;
if(msec<10){
    milisec=`0${msec}`;
}else{
    milisec=msec;
}
let secs;
if(sec<10){
    secs=`0${sec}`;
}else{
    secs=sec;
}
let mins;
if(min<10){
    mins=`0${min}`;
}else{
    mins=min;
}

display.innerHTML=`${mins}:${secs}:${milisec}`
 }
