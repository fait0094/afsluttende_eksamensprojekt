/*burgermenu*/
const menu = document.querySelector("#hammenu");
const menuItem = document.querySelector(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  console.log("not");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    console.log("yes");
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// cookieboks;
const cookieBox = document.getElementById("cookiebox");
const afvisBtn = document.getElementById("afvis");
const accepterBtn = document.getElementById("accepter");

afvisBtn.addEventListener("click", () => {
  cookieBox.style.display = "none";
});

accepterBtn.addEventListener("click", () => {
  cookieBox.style.display = "none";
});


//fade in animation//
const fadeInElements = document.querySelectorAll(".fade-in");

function fadeInOnScroll() {
  fadeInElements.forEach((el) => {
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;

    if (elTop < window.innerHeight && elBottom > 0) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);

// Timer

  // Funktion til at opdatere timeren
  function updateTimer() {
    // Datoen, hvor nedtællingen starter
    var startDate = new Date();
    startDate.setDate(startDate.getDate() + 3);

    // Funktion til at opdatere timer-elementet
    function update() {
      var now = new Date().getTime();
      var distance = startDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output resultatet i elementet med id="timer"
      document.getElementById("timer").innerHTML = days + "d " + hours + "t " + minutes + "m " + seconds + "s ";

      // Hvis nedtællingen er slut, starter vi forfra
      if (distance < 0) {
        startDate.setDate(startDate.getDate() + 3); // Start timeren igen om 3 dage
      }
    }

    // Initial opdatering af timeren
    update();

    // Opdater timeren hvert sekund
    var x = setInterval(update, 1000);
  }

  // Kald funktionen til at starte timeren
  updateTimer();
