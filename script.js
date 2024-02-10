// const play = document.querySelector("#play");
// const music = document.querySelector("audio");
// const image = document.querySelector("img");
// const title = document.querySelector("#title");
// const artist = document.querySelector("#artist");
// const forward = document.querySelector("#forward");
// const previous = document.querySelector("#previous");

// console.log(music)

// const songs = [
//   {
//     name: "1",
//     title: "Lotus",
//     artist: "The Loyalist",
//   },
//   {
//     name: "2",
//     title: "Butterfly",
//     artist: "Jeko Kaanp",
//   },
//   {
//     name: "3",
//     title: "Leete",
//     artist: "Liuajko KJ",
//   }
// ];

// // console.log(title,artist,forward,previous)

// // console.log(play)

// let isPlaying = false;
// const playMusic = () => {
//   isPlaying = true;
//   music.play();
//   play.classList.replace("fa-play", "fa-pause");
//   image.classList.add("anime");
// };

// const pauseMusic = () => {
//   isPlaying = false;
//   music.pause();
//   play.classList.replace("fa-pause", "fa-play");
//   image.classList.remove("anime");
// };

// play.addEventListener("click", () => {
//   // if(isPlaying){
//   //   pauseMusic();
//   // }
//   // else{
//   //   playMusic();
//   // }
//   isPlaying ? pauseMusic() : playMusic();
// });

// const loadSong = (songs)=>{
//   title.textContent = songs.title;
//   artist.textContent = songs.artist;
//   music.src = `songs/${songs.name}.mp3`
//   image.src = `images/${songs.name}.jpg`
//   // image.src = 

// }

// let songsindex = 0;

// const nextSong = ()=>{
//   songsindex = (songsindex + 1)% songs.length;
//   // songsindex++
//   loadSong(songs[songsindex]);
//   playMusic();
// }

// const prevSong = ()=>{
//   songsindex = (songsindex - 1 + songs.length) % songs.length;
//   loadSong(songs[songsindex]);
//   playMusic();
// }

// forward.addEventListener("click",nextSong);
// previous.addEventListener("click",prevSong);
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const forward = document.querySelector("#forward");
const previous = document.querySelector("#previous");
const play = document.querySelector("#play");
const audio = document.querySelector("audio");
const image = document.querySelector("img");


const songs = [
  {
    name: "1",
    title: "Lotus",
    artist: "The Loyalist",
  },
  {
    name: "2",
    title: "Butterfly",
    artist: "Jeko Kaanp",
  },
  {
    name: "3",
    title: "Leete",
    artist: "Liuajko KJ",
  }
];

let isPlaying = false;
const playMusic = ()=>{
  isPlaying = true;
  audio.play();
  play.classList.replace("fa-play", "fa-pause");
  image.classList.add("anime")
}

const pauseMusic = ()=>{
  isPlaying = false;
  audio.pause();
  play.classList.replace("fa-pause", "fa-play");
  image.classList.remove("anime");
}

play.addEventListener("click",()=>{
 isPlaying ? pauseMusic() : playMusic();
})

audio.addEventListener("ended",()=>{
  pauseMusic();
})

let index = 0
const loadSong = ()=>{
  title.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  image.src = `images/${songs[index].name}.jpg`
  audio.src = `songs/${songs[index].name}.mp3`
}


const nextSong = ()=>{
  index++
  if(index === songs.length){
    index = 0
  }
  loadSong();
  playMusic();
}

const prevSong = ()=>{
  index--
  if(index < 0){
    index = songs.length - 1;
  }
  loadSong();
  playMusic();
}


forward.addEventListener("click",nextSong);
previous.addEventListener("click",prevSong)