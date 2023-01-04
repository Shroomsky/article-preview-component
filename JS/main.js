const shareBtn = document.querySelector(".share_btn");
const shareList = document.querySelector(".card_detail--share");
const shareIcon = document.querySelector(".fa-share");

function shareActive() {
	shareList.classList.toggle("not-active");
	shareList.classList.toggle("active");
	shareIcon.classList.toggle("share_color");
	shareIcon.classList.toggle("share_color_std");
}

shareBtn.addEventListener("click", shareActive);
