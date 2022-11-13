const $ = (selector) => document.querySelector(selector);

//variables

let btnMode = $("#btn");
let header = $("header");
let backgroundSection = $(".section-edition");
let body = $("body");
let aside = $("aside");
let btnDown = $(".download");
let btnReset = $(".btn-aside-uno");

//eventos
btnMode.addEventListener("click", function () {
  header.classList.toggle("colorHeader");
  backgroundSection.classList.toggle("colorBack");
  body.classList.toggle("colorBack");
  aside.classList.toggle("colorAside");
  btnReset.classList.toggle("colorButtons");
  btnDown.classList.toggle("colorButtons");

  const nodeList = document.querySelectorAll("h1, h2, h3, p, button, i");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.toggle("colorDark");
  }
});

//-----

let linkUrl = $("#url");
let putImage = $("#img-meme");
//console.log(putImage.src);

linkUrl.addEventListener("input", (event) => {
  let imageSrc = event.target.value;
  putImage.src = imageSrc;
});

//fondo imagen

let inputColor = $("#color");
let backgroundMeme = $("#contain-img");

inputColor.addEventListener("change", (event) => {
  let color = event.target.value;
  backgroundMeme.style.backgroundColor = color;
});

// filtros
let containImgMeme = $("#img-meme");
let inputBrigthness = $("#brigthness");
let inputOpacity = $("#opacityInput");
let inputContrast = $("#contraste");
let inputBlur = $("#blur");
let inputGrayScale = $("#gray-scale");
let inputSepia = $("#sepia");
let inputHue = $("#hue");
let inputSaturate = $("#saturate");
let inputNegative = $("#negative");

//cambiar filtros
let changeFilters = () => {
  containImgMeme.style.filter = `brightness(${inputBrigthness.value}) contrast(${inputContrast.value}%) grayscale(${inputGrayScale.value}%)
  sepia(${inputSepia.value}%) hue-rotate(${inputHue.value}deg) saturate(${inputSaturate.value}%) invert(${inputNegative.value}%) opacity(${inputOpacity.value}%)
  blur(${inputBlur.value}px)`;
};

inputBrigthness.addEventListener("change", changeFilters);
inputContrast.addEventListener("change", changeFilters);
inputGrayScale.addEventListener("change", changeFilters);
inputSepia.addEventListener("change", changeFilters);
inputHue.addEventListener("change", changeFilters);
inputSaturate.addEventListener("change", changeFilters);
inputNegative.addEventListener("change", changeFilters);
inputOpacity.addEventListener("change", changeFilters);
inputBlur.addEventListener("change", changeFilters);

//reiniciar filtros

let restartFilters = (event) => {
  inputBrigthness.value = 1;
  inputContrast.value = 100;
  inputGrayScale.value = 0;
  inputSepia.value = 0;
  inputHue.value = 0;
  inputSaturate.value = 100;
  inputNegative.value = 0;
  inputOpacity.value = 100;
  inputBlur.value = 0;

  changeFilters();
};

let btnRestart = $("#restart");
btnRestart.addEventListener("click", restartFilters);

// descargar meme

let memardo = $("#memeId");
let btnDownload = $("#btn-download");

const nameQuestion = () => prompt("Ponele un nombre a tu memaso:");

const downloadMemardo = () => {
  domtoimage.toBlob(memardo).then(function (blob) {
    saveAs(blob, nameQuestion());
  });
};

btnDownload.addEventListener("click", downloadMemardo);

//Aside dos

let superiorText = $("#superior-text"); //input
let bottomText = $("#inferior-text"); //input
let topText = $("#top-text"); //p
let inferiorText = $("#bottom-text");

superiorText.addEventListener("input", (event) => {
  topText.innerText = event.target.value;
});

bottomText.addEventListener("input", (event) => {
  inferiorText.innerText = event.target.value;
});

//Checkbox

let checkTextSuperior = $("#check-top");
let checkTextInferior = $("#check-bottom");

checkTextSuperior.addEventListener("click", (event) => {
  if (checkTextSuperior.checked) {
    topText.style.display = "none";
  } else {
    topText.style.display = "block";
  }
});

checkTextInferior.addEventListener("click", (event)=> {
  if(checkTextInferior.checked) {
    inferiorText.style.display ="none";
  } else {
    inferiorText.style.display="block";
  }main.js
})
 //fuentes
//let texto de arriba --> topText


let selectText= $("#select-fonts");





let styleFonts = () => {
let helveticaFont = topText.style.fontFamily = 'Helvetica';
};

//styleFonts();



//selecciona cada option
let selectFont = () => {
selectText.addEventListener("change", (event)=> {
let optionFont= selectText.value;
console.log(optionFont);
})
}

//selectFont();