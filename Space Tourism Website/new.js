"use strict";
//////////////////////////////////////////////
// Data S

// Html Data of Particular Section
const classesBody = [
  "min-h-screen bg-[url(./assets/home/background-home-mobile.jpg)] sm:bg-[url(./assets/home/background-home-tablet.jpg)] lg:bg-[url(./assets/home/background-home-desktop.jpg)] bg-no-repeat bg-cover text-fmAcent font-fmBarlow overflow-x-hidden flex flex-col".split(
    " "
  ),

  "min-h-screen bg-[url(./assets/destination/background-destination-mobile.jpg)] sm:bg-[url(./assets/destination/background-destination-tablet.jpg)] lg:bg-[url(./assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover text-fmWhite overflow-x-hidden font-fmBarlow flex flex-col".split(
    " "
  ),

  "min-h-screen bg-[url(./assets/crew/background-crew-mobile.jpg)] sm:bg-[url(./assets/crew/background-crew-tablet.jpg)] lg:bg-[url(./assets/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover text-fmWhite overflow-x-hidden font-fmBarlow flex flex-col".split(
    " "
  ),

  "vdf".split(" "),
];

// Data of Destination Section
const destinationData = [
  {
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "./assets/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

// Crew Data
const crewData = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
//////////////////////////////
// Active Menu Point
const navDesktopEl = document.querySelectorAll(".navDesk");
const navMobileEl = document.querySelectorAll(".navMob");

function activeNav(index) {
  if (index === activeNavNum) return;
  navDesktopEl[activeNavNum].classList.remove("activeNav");
  navMobileEl[activeNavNum].classList.remove("activeNav");
  activeNavNum = index;
  menuMobileMain.classList.remove("openMenu");
  navDesktopEl[activeNavNum].classList.add("activeNav");
  navMobileEl[activeNavNum].classList.add("activeNav");
  document.querySelector("body").classList.remove("overflow-hidden");
}

let activeNavNum = 0;
navDesktopEl.forEach((navLink, index) => {
  navLink.addEventListener("click", () => activeNav(index));
});
navMobileEl.forEach((navLink, index) => {
  navLink.addEventListener("click", () => activeNav(index));
});

//////////////////////////////////
// Hamburger
const menuMobileMain = document.querySelector(".menuMobile");
const hamburger = document.querySelector(".hamburger");
const closeNavBtn = document.querySelector(".closeNav");

hamburger.addEventListener("click", () => {
  menuMobileMain.classList.add("openMenu");
  document.querySelector("body").classList.add("overflow-hidden");
});
closeNavBtn.addEventListener("click", () => {
  menuMobileMain.classList.remove("openMenu");
  document.querySelector("body").classList.remove("overflow-hidden");
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && menuMobileMain.classList.contains("openMenu")) {
    menuMobileMain.classList.remove("openMenu");
    document.querySelector("body").classList.remove("overflow-hidden");
  }
});

////////////////////////////////
// Navigation Btns Setup
// Home

const setContent = (clickedOn) => {
  document.querySelector("body").removeAttribute("class");
  classesBody[clickedOn].forEach((element) => {
    document.querySelector("body").classList.add(element);
  });

  document.querySelectorAll("main").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll("main")[clickedOn].classList.remove("hide");
};

navMobileEl.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    setContent(index);
  });
});
navDesktopEl.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    setContent(index);
  });
});
// ///////////////////////////////////////
// Destination Section

let activePlanet = 0;
const navDestiEl = document.querySelectorAll(".navDesti");
const planetImgEl = document.getElementById("planetImg");
const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");
const avgDistanceEl = document.getElementById("avgDistance");
const avgTimeEl = document.getElementById("avgTime");
function activeDesti(index) {
  if (index === activePlanet) return;
  navDestiEl[activePlanet].classList.remove("activeNav");
  activePlanet = index;
  navDestiEl[activePlanet].classList.add("activeNav");
  planetImgEl.setAttribute("src", destinationData[activePlanet].images.png);
  titleEl.textContent = destinationData[activePlanet].name;
  descriptionEl.textContent = destinationData[activePlanet].description;
  avgDistanceEl.textContent = destinationData[activePlanet].distance;
  avgTimeEl.textContent = destinationData[activePlanet].travel;
}

navDestiEl.forEach((destiPoint, index) => {
  destiPoint.addEventListener("click", () => {
    activeDesti(index);
  });
});

//////////////////////////////////
// Crew Memeber

let activeMember = 0;
const navCrew = document.querySelectorAll(".navCrew");

const crewImgTopEl = document.getElementById("crewImg");
const crewImgBottomEl = document.querySelector(".crewImg");
const crewNameEl = document.getElementById("CrewName");
const crewRoleEl = document.getElementById("CrewRole");
const crewBioEl = document.getElementById("crewBio");

function activeCrewMember(index) {
  if (index === activeMember) return;
  navCrew[activeMember].classList.remove("activeNavCrew");
  activeMember = index;
  navCrew[activeMember].classList.add("activeNavCrew");
  crewImgBottomEl.setAttribute("src", crewData[activeMember].images.png);
  crewImgTopEl.setAttribute("src", crewData[activeMember].images.png);
  crewNameEl.textContent = crewData[activeMember].name;
  crewRoleEl.textContent = crewData[activeMember].role;
  crewBioEl.textContent = crewData[activeMember].bio;
}

navCrew.forEach((crewName, index) => {
  crewName.addEventListener("click", () => {
    activeCrewMember(index);
  });
});
