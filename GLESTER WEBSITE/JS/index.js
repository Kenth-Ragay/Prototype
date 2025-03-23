// Background images for section 1
const images = [
    'pexels-expect-best-79873-323705.jpg',
    'pexels-pixabay-269077.jpg',
    'pexels-pixabay-302769.jpg'
];

const section = document.querySelector(".section1");

function changeBackgroundImage() {
  let randomImage = images[Math.floor(Math.random() * images.length)];
  section.classList.remove("fade");
  void section.offsetWidth; // Trick to restart animation

    section.style.backgroundImage = `url('${"../picture/" + randomImage}')`;
    section.classList.add("fade");
}

// Change background every 10 seconds
setInterval(changeBackgroundImage, 10000);

changeBackgroundImage();





let sections = document.querySelectorAll("section");
let currentIndex = 0; // Track the current section

function scrollToSection(index) {
  if (index >= 0 && index < sections.length) {
    currentIndex = index;
    sections.forEach((section, i) => {
      section.style.transform = `translateY(-${index * 100}vh)`;
    });
  }
}

// Detect scroll direction
document.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    scrollToSection(currentIndex + 1); // Scroll down
  } else {
    scrollToSection(currentIndex - 1); // Scroll up
  }
});
