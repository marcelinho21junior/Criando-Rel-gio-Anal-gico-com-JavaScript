const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const msg = document.querySelector("#msg");

function getTime(){
    const time = new Date();
    
    const getHourRot = (360 / 12) * time.getHours();
    const getMinRot = (360 / 60) * time.getMinutes();
    const getSecRot = (360 / 60) * time.getSeconds();

    const horas = time.getHours()

    hour.style.transform = `rotate(${getHourRot}deg)`;
    min.style.transform = `rotate(${getMinRot}deg)`;
    sec.style.transform = `rotate(${getSecRot}deg)`;

    if(horas >= 0 && horas < 6){
        msg.innerHTML = `Boa madrugada!!!`
    }else if(horas >= 6 && horas < 12){
        msg.innerHTML = `Bom dia!!!`
    }
    else if(horas >= 12 && horas < 18){
        msg.innerHTML = `Boa tarde!!!`
    }else if(horas >= 18 && horas <= 24){
        msg.innerHTML = `Boa noite!!!`
    }
}
setInterval(() => {
    getTime();
},1000)

getTime();
