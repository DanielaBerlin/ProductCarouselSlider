const thumbnails = document.getElementsByClassName('thumbnail');
const slider = document.getElementById('slider');
const nextBtn = document.getElementById('slide-right');
const prevBtn = document.getElementById('slide-left');

nextBtn.addEventListener('click', () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft += 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

nextBtn.addEventListener('click', () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft -= 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

// slider width values
// function sw() {
//     alert(slider.scrollWidth);
// }

// function sl() {
//   alert(slider.scrollLeft);
// }

// function cw() {
//   alert(slider.scrollWidth);
// }

// function calc() {
//   alert(slider.clientWidth - slider.scrollWidth);
// }

// function calc() {
//   alert();
// }

//Auto Play Function

function autoPlay() {
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 10);

//Pause the slide on hover

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseover', () => {
    clearInterval(play);
  });
  thumbnails[i].addEventListener('mouseout', () => {
    return (play = setInterval(autoPlay, 10));
  });
}
