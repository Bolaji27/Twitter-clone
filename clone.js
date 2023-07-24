//DOM Elements

const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector(".login-page");
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const feedsPage = document.querySelector ('.feeds-page');



/*******************************/
/******************************/

//MainPage

const goToLoginPage = ()=> {
    mainPage.style.display='none';
    loginPage.style.display = "grid";

}

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
}

})



   //if (inputUserInfo.value !== '' && inputPassword.value !== ' ') {
  //  mainPage.style.display = "none";
  //  newsFeedPage.style.display = 'block';
  // }






