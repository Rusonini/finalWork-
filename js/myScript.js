
//табы в блоке Enjoy Restaurants Specialties

window.addEventListener('DOMContentLoaded', () => {

    const firstMenuTabs = document.querySelectorAll('.tabs-menu li');
    const firstMenuContents = document.querySelectorAll('.tabs-container .tab-content');

    firstMenuTabs.forEach((el, index) => {
        el.addEventListener('click',(e) => {
            e.preventDefault();
            
            firstMenuContents.forEach((item) => {
                item.style.display = 'none';
            });
            firstMenuContents[index].style.display = 'block';

            if(!el.classList.contains('current')){
                firstMenuTabs.forEach((e) => {
                    e.classList.remove('current');
                });
                el.classList.add('current');
            }
        });
    });

    const TIME_END = '2023-04-18';

    function getTimeRemaining(endtime) {

        const total = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(total / (1000 * 60 * 60 *24));
        const hours = Math.floor(total / (1000 * 60 * 60) % 24);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const seconds = Math.floor((total / 1000) % 60);
        
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    }
    function setClock(endtime) { 
        const Days = document.getElementsByClassName('days')[0];
        const Hours = document.getElementsByClassName('hours')[0];
        const Minutes = document.getElementsByClassName('minutes')[0];
        const Seconds = document.getElementsByClassName('seconds')[0];
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            //console.log(t.total);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            } else {
                Days.innerHTML = t.days;
                Hours.innerHTML = t.hours;
                Minutes .innerHTML = t.minutes;
                Seconds.innerHTML = t.seconds;
            }
        }
    }
    if (window.location.pathname === '/coming-soon.html') {
        setClock(TIME_END);
    }
    
    //section slider 'Book a table'
    const slides = document.querySelectorAll(".events-carousel .swiper-slide");
    const prev = document.querySelector('.ec-button-prev');
    const next = document.querySelector('.ec-button-next');
    let slideIndex = 1;

    function plusEventCarousel(n) {
        plusEventSlides(slideIndex += n);
    }

    function plusEventSlides(n){
        if (n > slides.length){
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach( (item) => {
            item.style.display = 'none'
        });
        slides[slideIndex - 1].style.display = 'block';
    }


    //section slider 'What said about us'
    const slide = document.querySelectorAll('.testimonilas-carousel .swiper-slide');
    const previous = document.querySelector('.tc-button-prev');
    const following = document.querySelector('.tc-button-next');

    let slideI = 1;

    function plusSlides(n){
        showSlides(slideI += n);
    }

    function showSlides(n){
        if (n > slide.length) {
            slideI = 1;
        }

        if (n < 1) {
            slideI = slide.length;
        }

        slide.forEach( (item) => {
            item.style.display = 'none'
        });
        slide[slideI - 1].style.display = 'block';
    }

    if (window.location.pathname === '/index.html') {
        prev.addEventListener('click', () => {
            plusEventCarousel(-1);
        });
        next.addEventListener('click', () => {
            plusEventCarousel(1);
        });
        previous.addEventListener('click', () => {
            plusSlides(-1);
        });
        following.addEventListener('click', () => {
            plusSlides(1);
        });
    }
});
