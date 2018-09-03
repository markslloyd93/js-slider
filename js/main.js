//Cache the DOM....DOM constants
const imgban1 = document.querySelector("#imgban1");
const imgban2 = document.querySelector("#imgban2");
const imgban3 = document.querySelector("#imgban3");
const mainBanner = document.querySelector("#main-banner");
const prevBtn = document.querySelector("#imgbanbtn-prev");
const nextBtn = document.querySelector("#imgbanbtn-next");


let bannerStatus = 1;
let bannerTimer = 5000;

//Run the bannerLoop function once when the page loads
window.onload = function(){
  bannerLoop();
}

let startBannerLoop = setInterval(function(){
  bannerLoop();
}, bannerTimer);

//Previous btn
prevBtn.onclick = function(){
  if(bannerStatus === 1){
    bannerStatus = 2;
  } else if(bannerStatus === 2){
    bannerStatus = 3;
  } else if(bannerStatus === 3){
    bannerStatus = 1;
  }
  bannerReverse();
}
//Next btn
nextBtn.onclick = function(){
  bannerLoop();
}

//Stop the slider when the mouse enters the main container
mainBanner.onmouseenter = function(){
  clearInterval(startBannerLoop);
}

//start the slider when the mouse leaves the main container
mainBanner.onmouseleave = function(){
  startBannerLoop = setInterval(function(){
    bannerLoop();
  }, bannerTimer);
}

/*Function to loop through the images*/
function bannerLoop(){
  if(bannerStatus === 1){
    imgban2.style.opacity = "0";
    setTimeout(function(){
      imgban1.style.right = "0px";
      imgban1.style.zIndex = "1000";
      imgban2.style.right = "-100%";
      imgban2.style.zIndex = "1001";
      imgban3.style.right = "100%";
      imgban3.style.zIndex = "999";
    }, 500);
    setTimeout(function(){
      imgban2.style.opacity = "1";
    }, 1000);
    bannerStatus = 2;
  } else if(bannerStatus === 2){
    imgban3.style.opacity = "0";
    setTimeout(function(){
      imgban2.style.right = "0px";
      imgban2.style.zIndex = "1000";
      imgban3.style.right = "-100%";
      imgban3.style.zIndex = "1001";
      imgban1.style.right = "100%";
      imgban1.style.zIndex = "999";
    }, 500);
    setTimeout(function(){
      imgban3.style.opacity = "1";
    }, 1000);
    bannerStatus = 3;
  } else if(bannerStatus === 3){
    imgban1.style.opacity = "0";
    setTimeout(function(){
      imgban3.style.right = "0px";
      imgban3.style.zIndex = "1000";
      imgban1.style.right = "-100%";
      imgban1.style.zIndex = "1001";
      imgban2.style.right = "100%";
      imgban2.style.zIndex = "999";
    }, 500);
    setTimeout(function(){
      imgban1.style.opacity = "1";
    }, 1000);
    bannerStatus = 1;
  }
}

/*Function to reverse the image order*/
function bannerReverse(){
  if(bannerStatus === 1){
    imgban3.style.opacity = "0";
    setTimeout(function(){
      imgban1.style.right = "0px";
      imgban1.style.zIndex = "999";
      imgban2.style.right = "-100%";
      imgban2.style.zIndex = "1000";
      imgban3.style.right = "100%";
      imgban3.style.zIndex = "1001";
    }, 500);
    setTimeout(function(){
      imgban3.style.opacity = "1";
    }, 1000);
    bannerStatus = 2;
  } else if(bannerStatus === 2){
    imgban1.style.opacity = "0";
    setTimeout(function(){
      imgban2.style.right = "0px";
      imgban2.style.zIndex = "999";
      imgban3.style.right = "-100%";
      imgban3.style.zIndex = "100";
      imgban1.style.right = "100%";
      imgban1.style.zIndex = "1001";
    }, 500);
    setTimeout(function(){
      imgban1.style.opacity = "1";
    }, 1000);
    bannerStatus = 3;
  } else if(bannerStatus === 3){
    imgban2.style.opacity = "0";
    setTimeout(function(){
      imgban3.style.right = "0px";
      imgban3.style.zIndex = "999";
      imgban1.style.right = "-100%";
      imgban1.style.zIndex = "1000";
      imgban2.style.right = "100%";
      imgban2.style.zIndex = "1001";
    }, 500);
    setTimeout(function(){
      imgban2.style.opacity = "1";
    }, 1000);
    bannerStatus = 1;
  }
}
