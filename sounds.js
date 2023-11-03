/* Create a function that makes a sound when I press a key or click a button 
   Like, create a div container and make that generate a sound.*/


let boom = new Audio('./sounds/kick.wav')
let clap = new Audio('./sounds/clap.wav')
let hihat = new Audio('./sounds/hihat.wav')
let kick = new Audio('./sounds/openhat.wav')
let ride = new Audio('./sounds/ride.wav')
let tom = new Audio('./sounds/tom.wav')


// if button is clicked, make sound

document.getElementById("button1").addEventListener("click", clickClap);

document.getElementById("button2").addEventListener("click", clickBoom);

document.getElementById("button3").addEventListener("click", clickHat);

document.getElementById("button4").addEventListener("click", clickKick);

document.getElementById("button5").addEventListener("click", clickRide);

document.getElementById("button6").addEventListener("click", clickTom);

// if key is pressed, make sound

document.getElementById("button1").addEventListener("keydown", keyClap);

// document.getElementById("clap1").addEventListener("keydown", keyClap1);

document.getElementById("button2").addEventListener("keydown", keyBoom);

document.getElementById("button3").addEventListener("keydown", keyHat);

document.getElementById("button4").addEventListener("keydown", keyKick);

document.getElementById("button5").addEventListener("keydown", keyRide);

document.getElementById("button6").addEventListener("keydown", keyTom);


// click button functions

function clickClap() {
   document.getElementById("button1").addEventListener("click", () => {
      clap.play()
   })
}

function clickBoom() {
   document.getElementById("button2").addEventListener("click", () => {
      boom.play()
   })
}
function clickHat() {
   document.getElementById("button3").addEventListener("click", () => {
      hihat.play()
   })
}

function clickKick() {
   document.getElementById("button4").addEventListener("click", () => {
      kick.play()
   })
}

function clickRide() {
   document.getElementById("button5").addEventListener("click", () => {
      ride.play()
      // if clicked again, restart sound
   })
}

function clickTom() {
   document.getElementById("button6").addEventListener("click", () => {
      tom.play()
   })
}


// key pressing functions

// function keyClap1() {
//    window.addEventListener("keydown", function(){
//       document.getElementById("clap1").addEventListener("keydown", () => {
//       if(e.key == "q"){
//             clap.play();
//          } else if (e.key == "w"){
//             clap.play();
//          } else if (e.key == "e"){
//             clap.play();
//          } else if (e.key == "r"){
//             clap.play();
//          } else if (e.key == "t"){
//             clap.play();
//          } else if (e.key == "y"){
//             clap.play();
//          } else {
//          // nothing
//       }
//       })
//    })
// }

function keyClap() {
   window.addEventListener("keydown", onKeyDown);
   document.getElementsById("button1").addEventListener("keydown", () => {
      clap.play()
   });
   function onKeyDown(e){
   if(e.key == "q"){
      clap.play();
   } else if (e.key == "w"){
      clap.play();
   } else if (e.key == "e"){
      clap.play();
   } else if (e.key == "r"){
      clap.play();
   } else if (e.key == "t"){
      clap.play();
   } else if (e.key == "y"){
      clap.play();
   } else {
      // nothing
   }
   }
}

function keyBoom() {
   window.addEventListener("keydown", onKeyDown);
   document.getElementById("button2").addEventListener("keydown", () => {
      boom.play()
   });
   function onKeyDown(e){
   if(e.key === "u"){
      boom.play();
   } else if (e.key === "i"){
      boom.play();
   } else if (e.key === "o"){
      boom.play();
   } else if (e.key === "p"){
      boom.play();
   } else if (e.key == "a"){
      boom.play();
   } else if (e.key === "s"){
      boom.play();
   } else {
      // nothing
   }
   }
}

function keyHat() {
   window.addEventListener("keydown", onKeyDown);
   document.getElementById("button3").addEventListener("keydown", () => {
      hihat.play()
   });
   function onKeyDown(e){
   if(e.key === "d"){
      hihat.play();
   } else if (e.key === "f"){
      hihat.play();
   } else if (e.key === "g"){
      hihat.play();
   } else if (e.key === "h"){
      hihat.play();
   } else if (e.key === "j"){
      hihat.play();
   } else if (e.key === "k"){
      hihat.play();
   } else {
      // nothing
   }
   }
}

function keyKick() {
   window.addEventListener("keydown", onKeyDown);
   document.getElementById("button4").addEventListener("keydown", () => {
      kick.play()
   });
   function onKeyDown(e){
   if(e.key === "l"){
      kick.play();
   } else if (e.key === "z"){
      kick.play();
   } else if (e.key === "x"){
      kick.play();
   } else if (e.key === "c"){
      kick.play();
   } else if (e.key === "v"){
      kick.play();
   } else if (e.key === "b"){
      kick.play();
   } else {
      // nothing
   }
   }
}

function keyRide() {
   window.addEventListener("keydown", onKeyDown);
   document.getElementById("button5").addEventListener("keydown", () => {
      ride.play()
   });
   function onKeyDown(e){
   if(e.key === "n"){
      ride.play();
   } else if (e.key === "m"){
      ride.play();
   } else if (e.key === "1"){
      ride.play();
   } else if (e.key === "2"){
      ride.play();
   } else if (e.key === "3"){
      ride.play();
   } else if (e.key === "4"){
      ride.play();
   } else {
      // nothing
   }
   }
}

function keyTom() {
   window.addEventListener("keydown", onKeyDown);
   document.getElementById("button6").addEventListener("keydown", () => {
      tom.play()
   });
   function onKeyDown(e){
   if(e.key === "5"){
      tom.play();
   } else if (e.key === "6"){
      tom.play();
   } else if (e.key === "7"){
      tom.play();
   } else if (e.key === "8"){
      tom.play();
   } else if (e.key === "9"){
      tom.play();
   } else if (e.key === "0"){
      tom.play();
   } else {
      // nothing
   }
   }
}
