


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    // options.forEach(option => {
    //     option.addEventListener('click', () =>  {
    //         selected.innerText = option.innerText;
    //         select.classList.remove('selected-clicked');
    //         caret.classList.remove('caret-rotate');
    //         menu.classList.remove('menu-open');

    //         options.forEach(option => {
    //             option.classList.remove('active');
    //         });
    //         option.classList.add('active')
    //     });
    // });
});


const swiperTop = new Swiper('.catalog-swiper__top', {
    breakpoints: {
      425: {
          
          slidesPerView: '1',
          spaceBetween: 20,
          freeMode: true,
        },

      768: {
        
        slidesPerView: '2',
        spaceBetween: 20,
        freeMode: true,
      },

      1024: {
        
        slidesPerView: '3',
        spaceBetween: 20,
        freeMode: true,
      },

      1440: {
        
        slidesPerView: '3',
        spaceBetween: 20,
        freeMode: true,
      },

      1600: {
        slidesPerView: '3',
        spaceBetween: 20,
        freeMode: true,
      }
    },
    
    navigation: {
      nextEl: '.arrow-next__top',
      prevEl: '.arrow-prev__top',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const swiperHow = new Swiper('.how-swiper', {
    breakpoints: {
      425: {
        
        slidesPerView: '1',
        spaceBetween: 20,
        freeMode: true,
      },

      768: {
        
        slidesPerView: '2',
        spaceBetween: 20,
        freeMode: true,
      },

      1024: {
        
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
      },

      1440: {
        
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
      },

      1600: {
        slidesPerView: '3',
        spaceBetween: 20,
        freeMode: true,
      }
    },

    navigation: {
      nextEl: '.arrow-next__how',
      prevEl: '.arrow-prev__how',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

});

const swiperBottom = new Swiper('.catalog-swiper__bottom', {
    breakpoints: {
      425: {
          
        slidesPerView: '1',
        spaceBetween: 20,
        freeMode: true,
      },

      768: {
        
        slidesPerView: '2',
        spaceBetween: 20,
        freeMode: true,
      },

      1024: {
        
        slidesPerView: '3',
        spaceBetween: 20,
        freeMode: true,
      },

      1440: {
        
        slidesPerView: '3',
        spaceBetween: 20,
        freeMode: true,
      },

      1600: {
        slidesPerView: '3',
        spaceBetween: 20,
        freeMode: true,
      }
    },
  
  navigation: {
    nextEl: '.arrow-next__bottom',
    prevEl: '.arrow-prev__bottom',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});