const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
//variables

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

checkTextInferior.addEventListener("click", (event) => {
  if (checkTextInferior.checked) {
    inferiorText.style.display = "none";
  } else {
    inferiorText.style.display = "block";
  }
});

//fuentes

let selectText = $("#select-fonts");

//x defecto
topText.style.fontFamily = "Impact";
inferiorText.style.fontFamily = "Impact";

selectText.addEventListener("change", (event) => {
  let indexFont = event.target.selectedIndex;

  console.log(indexFont);
  switch (indexFont) {
    case 0:
      topText.style.fontFamily = "Impact";
      inferiorText.style.fontFamily = "Impact";
      break;
    case 1:
      topText.style.fontFamily = "Arial";
      inferiorText.style.fontFamily = "Arial";
      break;
    case 2:
      topText.style.fontFamily = "Arial Black";
      inferiorText.style.fontFamily = "Arial Black";
      break;
    case 3:
      topText.style.fontFamily = "American Typewriter";
      inferiorText.style.fontFamily = "American Typewriter";
      break;
    case 4:
      topText.style.fontFamily = "Andale Mono,AndaleMono,monospace";
      inferiorText.style.fontFamily = "Andale Mono,AndaleMono,monospace";
      break;
    case 5:
      topText.style.fontFamily = "Comic Sans MS";
      inferiorText.style.fontFamily = "Comic Sans MS";
      break;
    case 6:
      topText.style.fontFamily = "Helvetica";
      inferiorText.style.fontFamily = "Helvetica";
      break;
    case 7:
      topText.style.fontFamily = "Verdana";
      inferiorText.style.fontFamily = "Verdana";
      break;
    case 8:
      topText.style.fontFamily = "Times New Roman";
      inferiorText.style.fontFamily = "Times New Roman";
      break;
  }
});

//tamaño de fuente

let sizeInput = $("#number-fonts");

sizeInput.addEventListener("input", (event) => {
  sizeFonts = event.target.value;
  topText.style.fontSize = `${sizeFonts}px`;
  inferiorText.style.fontSize = `${sizeFonts}px`;
});

//posicion del texto

let btnLeft = $("#btn-left");
let btnCenter = $("#btn-center");
let btnRight = $("#btn-right");

btnLeft.addEventListener("click", (event) => {
  topText.style.textAlign = "left";
  inferiorText.style.textAlign = "left";
});

btnCenter.addEventListener("click", (event) => {
  topText.style.textAlign = "center";
  inferiorText.style.textAlign = "center";
});

btnRight.addEventListener("click", (event) => {
  topText.style.textAlign = "right";
  inferiorText.style.textAlign = "right";
});

//fondo y color texto

let backgroundTxt = $(".spacing-text-sup");
let backgroundTxtB = $(".spacing-text-inf");
let colorText = $("#input-color-text");
let colorBackText = $("#input-color-fondo");
let hexaColor = $(".hexa-color-text");
let hexaBack = $(".hexa-color-back");

let hexaValueColor = colorText.value;
hexaColor.innerHTML = `${hexaValueColor}`;

let hexaValueBack = colorBackText.value;
hexaBack.innerHTML = `${hexaValueBack}`;

const colorTextChange = (event) => {
  const colorTextMeme = event.target.value;
  topText.style.color = colorTextMeme;
  inferiorText.style.color = colorTextMeme;
  hexaValueColor = colorTextMeme;
  hexaColor.innerHTML = `${hexaValueColor}`;
};

const backgroundColorText = (event) => {
  const colorBackgroundMeme = event.target.value;
  backgroundTxt.style.backgroundColor = colorBackgroundMeme;
  backgroundTxtB.style.backgroundColor = colorBackgroundMeme;
  hexaValueBack = colorBackgroundMeme;
  hexaBack.innerHTML = `${hexaValueBack}`;
};

colorText.addEventListener("input", colorTextChange);
colorBackText.addEventListener("input", backgroundColorText);

//Fondo transparente

let transparentBackground = $("#check-transparent");

transparentBackground.addEventListener("click", (event) => {
  if (transparentBackground.checked) {
    console.log("marcado");
    backgroundTxt.style.backgroundColor = "transparent";
    backgroundTxtB.style.backgroundColor = "transparent";
  }
});

// contorno //top text inferioText

const outlineNone = $("#btn-outline-none");
const outlineLight = $("#btn-outline-light");
const outlineDark = $("#btn-outline-dark");

outlineDark.addEventListener("click", (event) => {
  topText.style.textShadow = "3px 3px";
  inferiorText.style.textShadow = "3px 3px";
});

outlineLight.addEventListener("click", (event) => {
  topText.style.textShadow = "2px 2px";
  inferiorText.style.textShadow = "2px 2px";
});

outlineNone.addEventListener("click", (event) => {
  topText.style.textShadow = "0px 0px";
  inferiorText.style.textShadow = "0px 0px";
});

//Espaciado

let paddingTextSup = $(".spacing-text-sup");
let paddingTextInf = $(".spacing-text-inf");
const spacingInput = $("#spacing-input");

spacingInput.addEventListener("input", (event) => {
  let valueInput = spacingInput.value;
  paddingTextSup.style.padding = `${valueInput}px`;
});

spacingInput.addEventListener("input", (event) => {
  let valueInput = spacingInput.value;
  paddingTextInf.style.padding = `${valueInput}px`;
});

//Interlineado

const lineSpacingInput = $("#line-spacing");

const lineSpacing = () => {
  topText.style.lineHeight = lineSpacingInput.value;
  inferiorText.style.lineHeight = lineSpacingInput.value;
};

lineSpacingInput.addEventListener("change", lineSpacing);

// aside cambio

const btnAsideImg = $("#btn-aside-img");
const btnAsideTxt = $("#btn-aside-txt");
let asideImg = $(".section-filters-url");
let asideTxt = $(".aside-text");

const changeAsideImg = () => {
  asideTxt.classList.add("change-aside");
  asideImg.classList.remove("change-aside");
};

const changeAsideTxt = () => {
  asideImg.classList.add("change-aside");
  asideTxt.classList.remove("change-aside");
};

btnAsideImg.addEventListener("click", changeAsideImg);
btnAsideTxt.addEventListener("click", changeAsideTxt);
// modo claro modo oscuro

/*
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
});*/
