const btnStart=document.querySelector('.btnStart');
const btnEnd=document.querySelector('.btnEnd');
const carImg=document.querySelector('.car')
let num=0;
let ser;
const startBtn= ()=>{
    ser= setInterval(()=>{
    num=num+0.7;
        runaCar();

    },100)

}

const random=Math.random()*100;

function runaCar(){
    carbt=carImg.style.setProperty('--x',num+"%");
}
function stopcar() {
    clearInterval(ser);


    
}