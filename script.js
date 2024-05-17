// document.getElementById('nav-btn').addEventListener('click', function()  {
//     this.classList.toggle('active');
//     document.querySelector('.burger-menu__opened').classList.toggle('active');
// }
// )













  const swiper = new Swiper('.swiper', {
    // Set the slider direction to horizontal
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Place the scrollbar under the slides horizontally
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true, // Enable scrollbar dragging
      dragSize: 50, // Set the size of the scrollbar drag area
      snapOnRelease: false, // Disable snapping when releasing the scrollbar
    },
  });


// Function to close the burger menu
// function closeBurgerMenu() {
//     document.getElementById('nav-btn').classList.remove('active');
//     document.querySelector('.burger-menu__opened').classList.remove('active');
// }

// // Event listener for burger menu button click
// document.getElementById('nav-btn').addEventListener('click', function(event) {
//     this.classList.toggle('active');
//     document.querySelector('.burger-menu__opened').classList.toggle('active');
//     event.stopPropagation(); // Prevent click event from bubbling up
// });

// // Event listener for clicks on the document body
// document.body.addEventListener('click', function(event) {
//     const burgerMenu = document.querySelector('.burger-menu__opened');
//     if (burgerMenu.classList.contains('active')) {
//         const isClickInsideBurgerMenu = burgerMenu.contains(event.target);
//         if (!isClickInsideBurgerMenu) {
//             closeBurgerMenu();
//         }
//     }
// });





 //with overflow modified code


 // Function to open the burger menu
function openBurgerMenu() {
    document.getElementById('nav-btn').classList.add('active');
    document.querySelector('.burger-menu__opened').classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable scrolling
}

// Function to close the burger menu
function closeBurgerMenu() {
    document.getElementById('nav-btn').classList.remove('active');
    document.querySelector('.burger-menu__opened').classList.remove('active');
    document.body.style.overflow = ''; // Enable scrolling
}

// Event listener for burger menu button click
document.getElementById('nav-btn').addEventListener('click', function(event) {
    if (!this.classList.contains('active')) {
        openBurgerMenu();
    } else {
        closeBurgerMenu();
    }
    event.stopPropagation(); // Prevent click event from bubbling up
});

// Event listener for clicks on the document body
document.body.addEventListener('click', function(event) {
    const burgerMenu = document.querySelector('.burger-menu__opened');
    if (burgerMenu.classList.contains('active')) {
        const isClickInsideBurgerMenu = burgerMenu.contains(event.target);
        if (!isClickInsideBurgerMenu) {
            closeBurgerMenu();
        }
    }
});












