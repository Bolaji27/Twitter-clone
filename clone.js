//DOM Elements

const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector(".login-page");
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const feedsPage = document.querySelector ('.feeds-page');
const loginModal = document.querySelector ('.login-modal');
const modalX =document.querySelector ('.login-modal i')
const loginFormBtn =document.querySelector (".login-form-btn");
const postBtn = document.querySelector('.post-btn');
const modalWrapper =document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');





/*******************************/
/******************************/

//MainPage


const goToLoginPage = ()=> {
    mainPage.style.display='none';
loginPage.style.display = "grid";
feedsPage.style.display = 'none';
};


middleContent.addEventListener('click', e => {
    if(e.target.classList[1]=== "main-btn") {
        goToLoginPage()
    }
});


btnTop.addEventListener ('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
const inputPassword = document.querySelector('.password');

if (inputUserInfo.value !== "" && inputPassword.value !== "") {
    loginPage.style.display = 'none';
    feedsPage.style.display ='block';
    mainPage.style.display = 'none';
} else {
    goToLoginPage();
    loginModal.style.display = 'block';
    
};

});

//Loginpage
modalX.addEventListener('click', () => {
    loginModal.style.display ='none';
})

loginFormBtn.addEventListener('click', ()=> {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== "" && loginPassword.value !== "") {
        loginPage.style.display = 'none';
        feedsPage.style.display ='block';
      
    } else {
        loginModal.style.display = 'block';
        }
     
    });

    //NewsFeed page
    //Post Modal

    postBtn.addEventListener('click', () => {
        modal.style.display= "block"
        modalWrapper.classList.add('modal-wrapper-display');
    });
const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity= x;

};

modalInput.addEventListener('keypress', e => {
    if (e.target.value !=='') {
        changeOpacity(1);
    }

});

modalInput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
    changeOpacity(0.5);
    }


});

postModalX.addEventListener('click', () => {
    modal.style.display='none';
    modalWrapper.classList.remove('modal-wrapper-display');
    if (modalInput.value !== '') {
        modalInput.value = '';
        changeOpacity(0.5);
    }

});

//sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');


})

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});

//dark mode

 const darkElement1 =document.querySelectorAll('.dark-mode-1');
 const darkElement2 = document.querySelectorAll('.dark-mode-2');
 const lighTexts = document.querySelectorAll('.light-text');
 const border = document.querySelectorAll('.border');

 
toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElement1).map((darkEli1) => darkEli1.classList.toggle('dark-1') )
    Array.from(darkElement2).map((darkEli2) => darkEli2.classList.toggle('dark-2') )
    Array.from(lighTexts).map(lighTexts => lighTexts.classList.toggle('light'));
    Array.from(border).map(border => border.classList.toggle("border-color"));
  

});
