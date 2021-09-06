const slides = document.querySelectorAll(".banner-slider");
const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove("current");
    if(current.nextElementSibling){current.nextElementSibling.classList.add("current");
    } else {
        slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
}



// autoslide
if(auto){
    slideInterval = setInterval(nextSlide, intervalTime)
}