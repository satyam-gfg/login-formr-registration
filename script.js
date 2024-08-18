const signInBtnLink= document.querySelector('.signinbtn-link');
const signUpBtnLink= document.querySelector('.signupbtn-link');
const wrapper= document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click',()=>{
   wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
 });