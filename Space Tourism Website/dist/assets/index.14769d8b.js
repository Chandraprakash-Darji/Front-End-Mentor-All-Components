const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function h(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=h(s);fetch(s.href,a)}};b();const u=[{bodyClasses:"bg-[url(./assets/home/background-home-mobile.jpg)] sm:bg-[url(./assets/home/background-home-tablet.jpg)] lg:bg-[url(./assets/home/background-home-desktop.jpg)] bg-no-repeat bg-cover min-h-screen text-fmAcent font-fmBarlow overflow-x-hidden flex flex-col".split(" "),mainClasses:"max-w-[95rem] lg:m-auto flex-1 h-full text-center px-6 sm:mx-20 md:mx-32 lg:px-8 p-12 pb-[8.68rem] flex flex-col lg:flex-row lg:text-left lg:items-end gap-20 justify-between border-r-slate-900".split(" "),htmlContent:`<section class="lg:w-2/5">
    <h1 class="font-fmBarlowCondensed tracking-widest text-2xl sm:text-3xl uppercase grid ">
      So, you want to travel to
      <span
        class="text-8xl sm:text-[9.35rem] sm:mt-16 my-5 font-fmBellefair text-fmWhite"> space </span>
    </h1>
    <p class="mb-auto text-lg text-fmAcent">
      Let\u2019s face it; if you want to go to space, you might as well genuinely
      go to outer space and not hover kind of on the edge of it. Well sit
      back, and relax because we\u2019ll give you a truly out of this world
      experience!
    </p>
    </section>
    <button class="exploreBtn">Explore</button>`},{bodyClasses:"min-h-screen bg-[url(./assets/destination/background-destination-mobile.jpg)] sm:bg-[url(./assets/destination/background-destination-tablet.jpg)] lg:bg-[url(./assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover text-fmWhite overflow-x-hidden font-fmBarlow flex flex-col".split(" "),mainClasses:"max-w-[95rem] m-auto text-center p-6 sm:px-16 md:px-20 flex flex-col items-center lg:flex-row lg:justify-between lg:px-5 lg:text-left lg:gap-16 lg:items-start lg:mt-32 xl:gap-56".split(" "),htmlContent:` <section class="flex flex-col sm:items-start w-full lg:mx-0 relative">
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
      See our planet as you\u2019ve never seen it before. A perfect relaxing trip
      away to help regain perspective and come back refreshed. While you\u2019re
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
  </div>`},{bodyClasses:"min-h-screen bg-[url(./assets/crew/background-crew-mobile.jpg)] sm:bg-[url(./assets/crew/background-crew-tablet.jpg)] lg:bg-[url(./assets/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover text-fmWhite overflow-x-hidden font-fmBarlow flex flex-col".split(" "),mainClasses:"max-w-[95rem] mx-auto text-center p-6 sm:pb-0 sm:px-16 md:px-20 flex flex-col lg:flex-row lg:justify-between lg:px-5 lg:text-left lg:gap-16 items-start lg:mt-32 xl:gap-56".split(" "),htmlContent:` <section
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
  />`},{bodyClasses:"vdf".split(" "),mainClasses:"vdf".split(" "),htmlContent:"Tech"}],l=[{name:"Moon",images:{png:"./assets/destination/image-moon.png",webp:"./assets/destination/image-moon.webp"},description:"See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"384,400 km",travel:"3 days"},{name:"Mars",images:{png:"./assets/destination/image-mars.png",webp:"./assets/destination/image-mars.webp"},description:"Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!",distance:"225 mil. km",travel:"9 months"},{name:"Europa",images:{png:"./assets/destination/image-europa.png",webp:"./assets/destination/image-europa.webp"},description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",distance:"628 mil. km",travel:"3 years"},{name:"Titan",images:{png:"./assets/destination/image-titan.png",webp:"./assets/destination/image-titan.webp"},description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",distance:"1.6 bil. km",travel:"7 years"}],c=[{name:"Douglas Hurley",images:{png:"./assets/crew/image-douglas-hurley.png",webp:"./assets/crew/image-douglas-hurley.webp"},role:"Commander",bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{name:"Mark Shuttleworth",images:{png:"./assets/crew/image-mark-shuttleworth.png",webp:"./assets/crew/image-mark-shuttleworth.webp"},role:"Mission Specialist",bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{name:"Victor Glover",images:{png:"./assets/crew/image-victor-glover.png",webp:"./assets/crew/image-victor-glover.webp"},role:"Pilot",bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{name:"Anousheh Ansari",images:{png:"./assets/crew/image-anousheh-ansari.png",webp:"./assets/crew/image-anousheh-ansari.webp"},role:"Flight Engineer",bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],d=document.querySelectorAll(".navDesk"),g=document.querySelectorAll(".navMob");function x(e){e!==i&&(d[i].classList.remove("activeNav"),g[i].classList.remove("activeNav"),i=e,m.classList.remove("openMenu"),d[i].classList.add("activeNav"),g[i].classList.add("activeNav"),document.querySelector("body").classList.remove("overflow-hidden"))}let i=0;d.forEach((e,t)=>{e.addEventListener("click",()=>x(t))});g.forEach((e,t)=>{e.addEventListener("click",()=>x(t))});const m=document.querySelector(".menuMobile"),y=document.querySelector(".hamburger"),C=document.querySelector(".closeNav");y.addEventListener("click",()=>{m.classList.add("openMenu"),document.querySelector("body").classList.add("overflow-hidden")});C.addEventListener("click",()=>{m.classList.remove("openMenu"),document.querySelector("body").classList.remove("overflow-hidden")});document.addEventListener("keyup",e=>{e.key==="Escape"&&m.classList.contains("openMenu")&&(m.classList.remove("openMenu"),document.querySelector("body").classList.remove("overflow-hidden"))});const w=e=>{document.querySelector("body").removeAttribute("class"),u[e].bodyClasses.forEach(r=>{document.querySelector("body").classList.add(r)}),document.querySelector("main").removeAttribute("class"),u[e].mainClasses.forEach(r=>{document.querySelector("main").classList.add(r)}),document.querySelector("main").innerHTML=u[e].htmlContent};g.forEach((e,t)=>{e.addEventListener("click",()=>{w(t)})});d.forEach((e,t)=>{e.addEventListener("click",()=>{w(t)})});let n=0;const f=document.querySelectorAll(".navDesti"),E=document.getElementById("planetImg"),A=document.getElementById("title"),k=document.getElementById("description"),L=document.getElementById("avgDistance"),S=document.getElementById("avgTime");function M(e){e!==n&&(f[n].classList.remove("activeNav"),n=e,f[n].classList.add("activeNav"),E.setAttribute("src",l[n].images.png),A.textContent=l[n].name,k.textContent=l[n].description,L.textContent=l[n].distance,S.textContent=l[n].travel)}f.forEach((e,t)=>{e.addEventListener("click",()=>{M(t)})});let o=0;const v=document.querySelectorAll(".navCrew"),B=document.getElementById("crewImg"),D=document.querySelector(".crewImg"),I=document.getElementById("CrewName"),N=document.getElementById("CrewRole"),q=document.getElementById("crewBio");function j(e){e!==o&&(v[o].classList.remove("activeNavCrew"),o=e,v[o].classList.add("activeNavCrew"),D.setAttribute("src",c[o].images.png),B.setAttribute("src",c[o].images.png),I.textContent=c[o].name,N.textContent=c[o].role,q.textContent=c[o].bio)}v.forEach((e,t)=>{e.addEventListener("click",()=>{j(t)})});
