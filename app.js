const modalWrap = document.querySelector("model-wrap");
const modalContent = document.querySelector(".modal-content");
const modalBtn = document.querySelector(".modal-btn");


modalBtn.addEventListener("click", () => {
    modalContent.classList.remove("slide-out");
    modalWrap.classList.toggle("display-none");
});


cancel.addEventListener("click", () => {
    modalContent.classList.add("slide-out");
    setTimeout(() => {
        modalWrap.classList.toggle("display-none");
    }, 650)
});

