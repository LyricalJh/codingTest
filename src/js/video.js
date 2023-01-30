const video = document.querySelector("video");
const videoController = document.getElementById("videoController");
const psBtn = videoController.querySelector("#playPauseBtn");
const volumeBtn = videoController.querySelector("#volume");
const volumeRange = videoController.querySelector("#volumeRange");
const full = document.getElementById('full');
const currenTime = document.getElementById('currenTime');
const totalTime = document.getElementById('totalTime');
const timeline = document.getElementById('timeline');

let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayAndStop = () => {
  if (video.paused) {
    video.play();
    psBtn.className = "fas fa-pause";
  } else {
    video.pause();
    psBtn.className = "fas fa-play";
  }
};

const handleSound = () => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
    volumeBtn.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeRange.value = 0;
    volumeBtn.className = "fas fa-volume-mute";
  }
};

const handleVolume = (event) => {
  const {
    target: { value }
  } = event;
  if (video.muted) {
    video.muted = false;
    volumeBtn.className = "fas fa-volume-mute";
  }
  if (value === "0") {
    volumeBtn.className = "fas fa-volume-off";
  } else {
    volumeBtn.className = "fas fa-volume-up";
  }
  video.volume = volumeValue = value;
};

const spacePlay = (event) => {
    const spaceBar = event.code;
    if(spaceBar === 'Space' && video.paused){
        video.play();
    }else {
        video.pause();
    }
}

const fullScreen = () => {
    const fullscreen = document.fullscreenElement;
    console.log(fullscreen);
    if(fullscreen){    
        document.exitFullscreen();
    }else{
        video.requestFullscreen();
    }
}

const formatTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(14,19 );
}

const time = new Date(29 * 1000).toISOString();
console.log(time);


const TimeLineChange = (event) => {
  const {
    target: {value}
  } = event;
  video.currentTime = value;
}



const loadTimeData = () => {
    totalTime.innerText = formatTime(Math.floor(video.duration));
    timeline.max = Math.floor(video.duration); 
    
}

const TimeUpdate = () => {
    currenTime.innerText = formatTime(Math.floor(video.currentTime));
    timeline.value = Math.floor(video.currentTime);
}

const fullBtn = (event) => {
  const fkey = event.code;
  if(fkey === 'KeyF'){
    video.requestFullscreen();
  }else if(fkey === 'Escape'){
    document.exitFullscreen();
  }
}


timeline.addEventListener('input', TimeLineChange);
video.addEventListener('timeupdate', TimeUpdate);
video.addEventListener('loadeddata', loadTimeData);
psBtn.addEventListener("click", handlePlayAndStop);
volumeBtn.addEventListener("click", handleSound);
volumeRange.addEventListener("input", handleVolume);
window.addEventListener("keydown", spacePlay);
window.addEventListener("keydown",fullBtn);
full.addEventListener("click", fullScreen);