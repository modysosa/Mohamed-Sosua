const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const  registerLink= document.querySelector('.register-link');
const  btnpopup= document.querySelector('.btnLogin-popup');
const  iconClose= document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
});
btnpopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
});

// $(document).ready(function() {
//     $('.register-link').click(function() {
//         $('.wrapper').addClass('active');
//     });

//     $('.login-link').click(function() {
//         $('.wrapper').removeClass('active');
//     });

//     $('.btnLogin-popup').click(function() {
//         $('.wrapper').addClass('active-popup');
//     });

//     $('.icon-close').click(function() {
//         $('.wrapper').removeClass('active-popup');
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');
//     const inputs = document.querySelectorAll('.input-box input');
//     const labels = document.querySelectorAll('.input-box label');

//     // Form submission handling
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Simple form validation
//         let valid = true;
//         inputs.forEach(input => {
//             if (input.value.trim() === '') {
//                 valid = false;
//                 alert('Please fill out all fields.');
//                 return;
//             }
//         });

//         if (valid) {
//             alert('Form submitted successfully!');
//             // You can add additional form submission logic here
//         }
//     });

//     // Input focus and blur handling
//     inputs.forEach(input => {
//         input.addEventListener('focus', function() {
//             const label = this.nextElementSibling;
//             label.classList.add('active');
//         });

//         input.addEventListener('blur', function() {
//             if (this.value.trim() === '') {
//                 const label = this.nextElementSibling;
//                 label.classList.remove('active');
//             }
//         });

//         // Ensure labels stay in the correct position if inputs are pre-filled
//         if (input.value.trim() !== '') {
//             const label = input.nextElementSibling;
//             label.classList.add('active');
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');
//     const inputs = document.querySelectorAll('.input-box input');
//     const labels = document.querySelectorAll('.lap');

//     // Form submission handling
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Simple form validation
//         let valid = true;
//         inputs.forEach(input => {
//             if (input.value.trim() === '') {
//                 valid = false;
//                 alert('Please fill out all fields.');
//                 return;
//             }
//         });

//         if (valid) {
//             alert('Form submitted successfully!');
//             // You can add additional form submission logic here
//         }
//     });

//     // Input focus and blur handling
//     inputs.forEach(input => {
//         input.addEventListener('focus', function() {
//             const label = this.nextElementSibling;
//             label.classList.add('active');
//         });

//         input.addEventListener('blur', function() {
//             if (this.value.trim() === '') {
//                 const label = this.nextElementSibling;
//                 label.classList.remove('active');
//             }
//         });

//         // Ensure labels stay in the correct position if inputs are pre-filled
//         if (input.value.trim() !== '') {
//             const label = input.nextElementSibling;
//             label.classList.add('active');
//         }
//     });
// });
