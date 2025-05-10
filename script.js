const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 2400,
  textOutTimer = 2200;
function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer)

  setTimeout(function () {

    if (index == txtsLen - 1) {
      index = 0;
    }
    else {
      index++;
    }
    animateText();
  }, textInTimer);
}
window.onload = animateText;

document.getElementById('scrollButton').addEventListener('click', function (event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

window.addEventListener("scroll", function () {
  var after = document.getElementById("logo");
  after.classList.toggle("imag1", window.scrollY > 20);
});  