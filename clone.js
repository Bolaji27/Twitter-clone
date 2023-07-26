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
    goToLoginPage()
    loginModal.style.display = 'block';
    
}

})

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






