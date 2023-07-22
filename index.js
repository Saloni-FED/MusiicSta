console.log("Welcome To My Spotify");
//audio//
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.querySelector("#masterPlay");
let progressBar=document.querySelector("#progressBar");
let myGif=document.querySelector('#myGif');

//Event Listener for Play/Pause
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        myGif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        myGif.style.opacity=0;
    } 
});
//seekbar and time update
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value=progress;
    
});
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
}
)
//Now updating the img and its songs
let songIndex=0;
let songItems=Array.from(document.getElementsByClassName('songItems'));
let songs=[
    {songName:'Tum hi ho',filePath:'songs/1.mp3',coverPath:'covers/1.png'},
    {songName:'Ami Je Tomar',filePath:'songs/2.mp3',coverPath:'covers/2.png'},
    {songName:'Kuch Na hoke',filePath:'songs/3.mp3',coverPath:'covers/3.png'},
    {songName:'Tum Awaz Dogi kya',filePath:'songs/4.mp3',coverPath:'covers/4.png'},
    {songName:'Kesariya',filePath:'songs/5.mp3',coverPath:'covers/5.png'},
    {songName:'Tumse Pyaar Kiya',filePath:'songs/6.mp3',coverPath:'covers/6.png'},
    
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

//for songs in container to play
// let songItemPlay=Array.from(document.getElementsByClassName("songItemPlay"));
songItemPlay=Array.from(document.getElementsByClassName("songItemPlay"));

const makeAllPlay= ()=>{
    songItemPlay.forEach(element =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 
        
    })
}
songItemPlay.forEach(element=>{
    element.addEventListener('click',(e)=>{
         
        makeAllPlay();
        songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.currentTime=0;
         audioElement.src=`songs/${songIndex+1}.mp3`;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         
    })
})
document.getElementById('forward').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex=songIndex+1;
    }
    audioElement.currentTime=0;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

});
document.getElementById('backward').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex=songIndex-1;
    }
    audioElement.currentTime=0;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

});
   

   


