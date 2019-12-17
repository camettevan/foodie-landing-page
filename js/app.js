var joinBtn = document.getElementsByClassName('button')
var popupPage = document.getElementsByClassName('popup')
var clickedBtn = function() {
  popupPage[0].classList.toggle('active')
}

joinBtn[0].addEventListener('click', clickedBtn)

// console.log(joinBtn[0])




var joinBtn2 = document.getElementsByClassName('button-2nd')
var popupPage = document.getElementsByClassName('popup')
var clickedBtn = function() {
  popupPage[0].classList.toggle('active')
}

joinBtn2[0].addEventListener('click', clickedBtn)

// console.log(joinBtn[0])




var closeBtn = document.getElementsByClassName('close-button')
var popupPage = document.getElementsByClassName('popup')
var clickedBtn = function() {
  popupPage[0].classList.toggle('active')
}

closeBtn[0].addEventListener('click', clickedBtn)

// console.log(closeBtn[0])
