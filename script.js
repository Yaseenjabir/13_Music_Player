// Selecting all the variables
const playBtn = document.querySelector(".play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const nextBtn = document.querySelector(".forward");
const previousBtn = document.querySelector(".backward")
const songName = document.querySelector(".main h1");
const artistName = document.querySelector(".main h3");
const theCurrentTime = document.querySelector('.time h6')
let theSongDuration = document.querySelector('.secondh6')
const progress = document.querySelector(".progress")
const progressParent = document.querySelector(".progressParent");


// Creating and array of objects, each object contains different songs information
const songs = [
  {
    name : "1",
    song : "LollyPop",
    artist : "The King"
  },
  {
    name : "2",
    song : "I'm not alone",
    artist : "DJ Khaled"
  },
  {
    name : "3",
    song : "Side Slide",
    artist : "Verno Cyrus"
  },
  {
    name : "4",
    song : "Shadow Box",
    artist : "Boolena"
  },
]


// Create a function to play Music
let isPlaying = false;
const playMusic = ()=>{
  isPlaying = true;
  music.play();
  playBtn.classList.replace("fa-play", "fa-pause")
  img.classList.add("anime");
}


// Create a function to stop Music
const stopMusic = ()=>{
  isPlaying = false;
  music.pause();
  playBtn.classList.replace("fa-pause", "fa-play")
  img.classList.remove("anime");
}


// Logic to stop and pause the music 
playBtn.addEventListener("click",()=>{
  if(isPlaying){
    stopMusic();
  }
  else{
    playMusic();
  }
})

let index = 0
const nextSong = ()=>{
  songName.textContent = `${songs[index].song}`;
  artistName.textContent = `${songs[index].artist}`;
  img.src = `/images/${songs[index].name}.jpg`
  music.src =`/songs/${songs[index].name}.mp3`
}


// Creating logic for next song
nextBtn.addEventListener("click",()=>{
  index++;
  if(index > songs.length - 1){
    index = 0;
  }
  nextSong();
  playMusic();
})


// Creating logic for previous song
previousBtn.addEventListener("click",()=>{
  index--;
  if(index < 0){
    index = songs.length -1
  }
  nextSong();
  playMusic();
})


// Creating logic to update the song duration and current play time
music.addEventListener("timeupdate",(e)=>{
  const songDuration = Math.floor(e.srcElement.duration);
  const currentTime = e.srcElement.currentTime;

  const progressMovement = (currentTime / songDuration) * 100;
  console.log(progressMovement)
  progress.style.width = `${progressMovement}%`
  

  //Setting Duration
  let totalMin = Math.floor((currentTime / 60));
  let totalSec = Math.floor((currentTime % 60));

  if(totalMin < 10){
    totalMin = `0${totalMin}`;
  }
  if(totalSec < 10){
    totalSec = `0${totalSec}`
  }
  theCurrentTime.textContent = `${totalMin} : ${totalSec}`



  let totalMin2 = Math.floor((songDuration / 60));
  let totalSec2 = Math.floor((songDuration % 60));
  if(totalMin2 < 10){
    totalMin2 = `0${totalMin2}`;
  }
  if(totalSec2 < 10){
    totalSec2 = `0${totalSec2}`
  }
  if(songDuration){
    theSongDuration.textContent = `${totalMin2} : ${totalSec2}`;
  }
})


// Creating logic to forward or backward the song
progressParent.addEventListener("click",(e)=>{
  let myClick = e.offsetX;
  let totalWidth = e.srcElement.clientWidth;
  let duration = music.duration;

  let total = (myClick / totalWidth) * duration;
  music.currentTime = total;
  console.log(music.duration);
  console.log(total)
})

music.addEventListener("ended",()=>{
  stopMusic();
})