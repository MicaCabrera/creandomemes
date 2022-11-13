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



let selectText= $("#select-fonts");

//x defecto
topText.style.fontFamily = 'Impact';
inferiorText.style.fontFamily = 'Impact';

selectText.addEventListener("change", (event)=> {
let indexFont = event.target.selectedIndex;

console.log(indexFont);
switch(indexFont) {
  case 0: 
  topText.style.fontFamily = 'Impact';
  inferiorText.style.fontFamily = 'Impact';
  break;
  case 1: 
  topText.style.fontFamily = 'Arial';
  inferiorText.style.fontFamily = 'Arial';
  break;
  case 2: 
  topText.style.fontFamily = 'Arial Black';
  inferiorText.style.fontFamily = 'Arial Black';
  break;
  case 3: 
  topText.style.fontFamily = 'American Typewriter';
  inferiorText.style.fontFamily = 'American Typewriter';
  break;
  case 4: 
  topText.style.fontFamily = 'Andale Mono,AndaleMono,monospace';
  inferiorText.style.fontFamily = 'Andale Mono,AndaleMono,monospace';
  break;
  case 5: 
  topText.style.fontFamily = 'Comic Sans MS';
  inferiorText.style.fontFamily = 'Comic Sans MS';
  break;
  case 6: 
  topText.style.fontFamily = 'Helvetica';
  inferiorText.style.fontFamily = 'Helvetica';
  break;
  case 7: 
  topText.style.fontFamily = 'Verdana';
  inferiorText.style.fontFamily = 'Verdana';
  break;
  case 8: 
  topText.style.fontFamily = 'Times New Roman';
  inferiorText.style.fontFamily = 'Times New Roman';
  break;
}
})

//tamaño de fuente

let sizeInput = $("#number-fonts");

sizeInput.addEventListener("input", (event)=> {
sizeFonts = event.target.value; 
topText.style.fontSize  = `${sizeFonts}px`;
inferiorText.style.fontSize = `${sizeFonts}px`;
})

//posicion del texto