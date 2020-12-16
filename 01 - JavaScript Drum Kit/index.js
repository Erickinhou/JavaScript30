const boomAudio = document.querySelector('[boomAudio]')
const clapAudio = document.querySelector('[clapAudio]')
const hihatAudio = document.querySelector('[hihatAudio]')
const kickAudio = document.querySelector('[kickAudio]')
const openhatAudio = document.querySelector('[openhatAudio]')
const rideAudio = document.querySelector('[rideAudio]')
const snareAudio = document.querySelector('[snareAudio]')
const tinkAudio = document.querySelector('[tinkAudio]')
const tomAudio = document.querySelector('[tomAudio]')

const playAudio = (element)=>{
    const htmlCollection = element.target.children
    const targetElement = Array.from(htmlCollection);
    let audio;
    //verify if the user click on the text or on the div
    if(targetElement.length === 0){
        audio = element.target.innerHTML;
        console.log(audio);
    }  else{
        audio = htmlCollection[0].innerHTML;
    } 
    console.log(audio);
    switch(audio){
        case 'BOOM':  boomAudio.play();
            break;
        case 'CLAP': clapAudio.play();
            break;
        case 'HIHAT':  hihatAudio.play();
            break;
        case 'KICK':  kickAudio.play();
            break;
        case 'OPENHAT':  openhatAudio.play();
            break;
        case 'RIDE':  rideAudio.play();
            break;
        case 'SNARE':  snareAudio.play(); 
            break;
        case 'TINK':  tinkAudio.play();
            break;
        case 'TOM':  tomAudio.play();
            break;
    }
    return;
}

const boom = document.querySelector('[boom]').onclick = playAudio
const clap = document.querySelector('[clap]').onclick = playAudio
const hihat = document.querySelector('[hihat]').onclick = playAudio
const kick = document.querySelector('[kick]').onclick = playAudio
const openhat = document.querySelector('[openhat]').onclick = playAudio
const ride = document.querySelector('[ride]').onclick = playAudio
const snare = document.querySelector('[snare]').onclick = playAudio
const tink = document.querySelector('[tink]').onclick = playAudio
const tom = document.querySelector('[tom]').onclick = playAudio


