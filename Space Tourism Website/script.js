"use strict";
//////////////////////////////////////////////
// Data S

// Html Data of Particular Section
const dataPerPage = [
  {
    bodyClasses:
      "bg-[url(./assets/home/background-home-mobile.jpg)] sm:bg-[url(./assets/home/background-home-tablet.jpg)] lg:bg-[url(./assets/home/background-home-desktop.jpg)] bg-no-repeat bg-cover min-h-screen text-fmAcent font-fmBarlow overflow-x-hidden flex flex-col".split(
        " "
      ),
    mainClasses:
      "max-w-[95rem] lg:m-auto flex-1 h-full text-center px-6 sm:mx-20 md:mx-32 lg:px-8 p-12 pb-[8.68rem] flex flex-col lg:flex-row lg:text-left lg:items-end gap-20 justify-between border-r-slate-900".split(
        " "
      ),
    htmlContent: `<section class="lg:w-2/5">
    <h1 class="font-fmBarlowCondensed tracking-widest text-2xl sm:text-3xl uppercase grid ">
      So, you want to travel to
      <span
        class="text-8xl sm:text-[9.35rem] sm:mt-16 my-5 font-fmBellefair text-fmWhite"> space </span>
    </h1>
    <p class="mb-auto text-lg text-fmAcent">
      Let’s face it; if you want to go to space, you might as well genuinely
      go to outer space and not hover kind of on the edge of it. Well sit
      back, and relax because we’ll give you a truly out of this world
      experience!
    </p>
    </section>
    <button class="exploreBtn">Explore</button>`,
  },
  {
    bodyClasses:
      "min-h-screen bg-[url(./assets/destination/background-destination-mobile.jpg)] sm:bg-[url(./assets/destination/background-destination-tablet.jpg)] lg:bg-[url(./assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover text-fmWhite overflow-x-hidden font-fmBarlow flex flex-col".split(
        " "
      ),
    mainClasses:
      "max-w-[95rem] m-auto text-center p-6 sm:px-16 md:px-20 flex flex-col items-center lg:flex-row lg:justify-between lg:px-5 lg:text-left lg:gap-16 lg:items-start lg:mt-32 xl:gap-56".split(
        " "
      ),
    htmlContent: ` <section class="flex flex-col sm:items-start w-full lg:mx-0 relative">
    <h2 class="h2-sectionTitle lg:absolute w-96 -top-14">
      <span class="opacity-50 mr-2"> 01</span> Pick your destination
    </h2>
    <img
      id="planetImg"
      src="./assets/destination/image-moon.png"
      alt="moon img"
      class="w-60 h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[29rem] xl:h-[29rem] my-5 md:my-10 mx-auto lg:mt-16"
    />
  </section>
  <div
    class="flex flex-col items-center justify-between lg:max-w-lg xl:max-w-xl"
  >
    <nav class="menu text-2xl mx-auto lg:mr-auto lg:ml-0 h-16 px-0">
      <div class="navDesti navA activeNav text-fmAcent">Moon</div>
      <div class="navDesti navA text-fmAcent">Mars</div>
      <div class="navDesti navA text-fmAcent">Europa</div>
      <div class="navDesti navA text-fmAcent">Titan</div>
    </nav>
    <h3 id="title" class="heading-3 pt-10 md:mt-13 w-full">Moon</h3>
    <p id="description" class="text-xl pb-8 lg:pb-16 text-fmAcent">
      See our planet as you’ve never seen it before. A perfect relaxing trip
      away to help regain perspective and come back refreshed. While you’re
      there, take in some history by visiting the Luna 2 and Apollo 11
      landing sites.
    </p>
    <div
      class="flex flex-col md:flex-row md:justify-between pt-8 border-t border-opacity-30 border-white gap-y-4 md:w-full px-32 lg:px-0 lg:pr-10 justify-between"
    >
      <p
        class="flex flex-col uppercase text-lg gap-y-2 font-fmBarlowCondensed"
      >
        <span class="text-fmAcent tracking-widest"> Avg. distance</span>
        <span id="avgDistance" class="text-3xl font-fmBellefair">
          384,400 km
        </span>
      </p>
      <p
        class="flex flex-col uppercase text-lg gap-y-2 font-fmBarlowCondensed"
      >
        <span class="text-fmAcent tracking-widest"> Est. travel time</span>
        <span id="avgTime" class="text-3xl font-fmBellefair"> 3 days </span>
      </p>
    </div>
  </div>`,
  },
  {
    bodyClasses:
      "min-h-screen bg-[url(./assets/crew/background-crew-mobile.jpg)] sm:bg-[url(./assets/crew/background-crew-tablet.jpg)] lg:bg-[url(./assets/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover text-fmWhite overflow-x-hidden font-fmBarlow flex flex-col".split(
        " "
      ),
    mainClasses:
      "max-w-[95rem] mx-auto text-center p-6 sm:pb-0 sm:px-16 md:px-20 flex flex-col lg:flex-row lg:justify-between lg:px-5 lg:text-left lg:gap-16 items-start lg:mt-32 xl:gap-56".split(
        " "
      ),
    htmlContent: ` <section
    class="flex flex-col mt-0 self-start sm:items-start w-full lg:mx-0 relative border-b sm:border-opacity-0 border-white border-opacity-30"
  >
    <h2 class="h2-sectionTitle lg:absolute my-10 w-96 -top-14">
      <span class="opacity-50 mr-2"> 02</span> Meet your crew
    </h2>
    <img
      src="./assets/crew/image-douglas-hurley.png"
      alt="Crew Member pic"
      class="m-auto w-auto h-72 mx-auto sm:hidden"
      id="crewImg"
    />
  </section>
  <div
    class="flex flex-col items-center justify-between sm:flex-col-reverse lg:max-w-lg xl:max-w-xl"
  >
    <navs
      class="menu items-center my-5 sm:my-0 text-2xl mx-auto lg:mr-auto lg:ml-0 h-8 px-0"
    >
      <div class="navCrew activeNavCrew text-fmAcent">&nbsp;</div>
      <div class="navCrew text-fmAcent">&nbsp;</div>
      <div class="navCrew text-fmAcent">&nbsp;</div>
      <div class="navCrew text-fmAcent">&nbsp;</div>
    </navs>
    <div>
      <h3 class="font-fmBellefair text-3xl flex flex-col uppercase">
        <span id="CrewRole" class="text-base sm:text-2xl text-fmAcent">
          Commander</span
        >
        <span id="CrewName" class="my-3 sm:text-5xl"> Douglas Hurley</span>
      </h3>
      <p id="crewBio" class="text-lg pb-8 lg:pb-16 text-fmAcent">
        Douglas Gerald Hurley is an American engineer, former Marine Corps
        pilot and former NASA astronaut. He launched into space for the
        third time as commander of Crew Dragon Demo-2.
      </p>
    </div>
  </div>
  <img
    src="./assets/crew/image-douglas-hurley.png"
    alt="crew img"
    class="crewImg"
  />`,
  },
  {
    bodyClasses: "vdf".split(" "),
    mainClasses: "vdf".split(" "),
    htmlContent: `Tech`,
  },
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
  let bodyClasses = dataPerPage[clickedOn].bodyClasses;
  bodyClasses.forEach((element) => {
    document.querySelector("body").classList.add(element);
  });

  document.querySelector("main").removeAttribute("class");
  let mainClasses = dataPerPage[clickedOn].mainClasses;
  mainClasses.forEach((element) => {
    document.querySelector("main").classList.add(element);
  });

  document.querySelector("main").innerHTML = dataPerPage[clickedOn].htmlContent;
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
