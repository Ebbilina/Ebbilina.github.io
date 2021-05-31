//TODO 4 Gallerien erstellen in HTML und hier unterscheiden - Klassenaufteilung!

let modalIndex = 0, slideIndex = 1;
let allModal = document.querySelectorAll(".modal");
for(let i = 0; i<allModal.length; i++){
  allModal[i].addEventListener("click", closeM);
}

let boxE = document.querySelector("#BoxE");
boxE.addEventListener("click", () => openModal(0));

let boxF = document.querySelector("#BoxF");
boxF.addEventListener("click", () => openModal(1));

let boxG = document.querySelector("#BoxG");
boxG.addEventListener("click", () => openModal(2));

let boxH = document.querySelector("#BoxH");
boxH.addEventListener("click", () => openModal(3));

let closeButton = document.querySelectorAll(".close");
for(let i=0; i< closeButton.length; i++){
  closeButton[i].addEventListener("click", closeModal);
}

let nextButton = document.querySelectorAll(".next");
for(let i=0; i< nextButton.length; i++){
  nextButton[i].addEventListener("click", () => plusSlides(1));
}

let prevButton = document.querySelectorAll(".prev");
for(let i=0; i< prevButton.length; i++){
  prevButton[i].addEventListener("click", () => plusSlides(-1));
}

function openModal(index) {
    allModal[index].style.display = "block";
    modalIndex = index;
    showSlides(1);
  }
  
function closeM(ev){
  if(!ev.target.classList.contains("modal")) return;
  closeModal();
}

function closeModal() {
  allModal[modalIndex].style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i,
   captionText = allModal[modalIndex].querySelector("#caption"),
   slides = allModal[modalIndex].querySelectorAll(".mySlides");
  slideIndex = n;
  //begin slide show from beginning agein
  if (n > slides.length) {slideIndex = 1}
  //show last picture
  if (n < 1) {slideIndex = slides.length}
  //hide all other pictures
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = slides[slideIndex-1].querySelector("img").alt;
}