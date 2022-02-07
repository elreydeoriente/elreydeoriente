const mobileMenu = document.querySelector('.mobile-menu');
const toggleButton = document.querySelector('.toggle-button');
// const clicked = document.querySelector('.introduction');
const headerTitle = document.querySelector('.header-title');

toggleButton.addEventListener('click', function(){
    
        mobileMenu.classList.add('open');
       
});

mobileMenu.addEventListener('click', function(){          
  
             mobileMenu.classList.remove('open');
      
});

// clicked.addEventListener('click', function(){
//         clicked.classList.add('active');

// });

window.addEventListener('load', function(){
        headerTitle.classList.add('open');
})