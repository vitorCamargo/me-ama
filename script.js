let count = 0;

const header = window.document.getElementById("header");
const content = window.document.getElementById("content");
const background = window.document.getElementById("background");

const noVideo = window.document.getElementById("noVideo");
const yesVideo = window.document.getElementById("yesVideo");

const text1 = window.document.getElementById("subtitle1");
const text2 = window.document.getElementById("subtitle2");
const text3 = window.document.getElementById("subtitle3");

const image1 = window.document.getElementById("image1");
const image2 = window.document.getElementById("image2");
const image3 = window.document.getElementById("image3");

const yes = window.document.getElementById("yes");
const no = window.document.getElementById("no");

no.addEventListener("click", clickNo);

function clickNo() {
  if (count == 0) {
    text1.style.display = "block";
    image1.style.display = "block";

    background.style.filter = "grayscale(50%)";
  }

  if (count == 1) {
    text1.style.display = "none";
    image1.style.display = "none";
    text2.style.display = "block";
    image2.style.display = "block";

    background.style.filter = "grayscale(80%)";
  }

  if (count == 2) {
    text2.style.display = "none";
    image2.style.display = "none";
    text3.style.display = "block";
    image3.style.display = "block";

    background.style.filter = "grayscale(100%)";
  }

  if (count == 3) {
    header.style.display = "none";
    content.style.display = "none";

    noVideo.style.display = "block";
    noVideo.play();

    background.style.filter = "grayscale(100%)";
  }

  count++;
}

yes.addEventListener("click", clickYes);

function clickYes() {
  header.style.display = "none";
  content.style.display = "none";

  background.style.filter = "grayscale(0%)";

  yesVideo.style.display = "block";
  yesVideo.play();
}
