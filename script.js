// data
const rockets = [
    {
        id: 1,
        rocket: "Atlas",
        years: "1960-1963",
        img: "./img/atlas.png",
        info: "Atlas is a family of US missiles and space launch vehicles that originated with the SM-65 Atlas. The Atlas intercontinental ballistic missile (ICBM) program was initiated in the late 1950s under the Convair Division of General Dynamics.",
    },
    {
        id: 2,
        rocket: "Saturn 1B",
        years: "1966-1975",
        img: "./img/saturn 1b.png",
        info: "The Saturn IB (pronounced Saturn 1 B, also known as the uprated Saturn I) was an American launch vehicle commissioned by the National Aeronautics and Space Administration (NASA) for the Apollo program.",
    },
    {
        id: 3,
        rocket: "Saturn V",
        years: "1967-1973",
        img: "./img/saturn v.png",
        info: "Saturn V was an American human-rated super heavy-lift launch vehicle used by NASA between 1967 and 1973. A three-stage, liquid-fueled rocket, the Saturn V was developed under the Apollo program for human exploration of the Moon and was later used to launch Skylab, the first American space station.",
    },
    {
        id: 4,
        rocket: "STS",
        years: "1981-2011",
        img: "./img/sts.png",
        info: "The Space Shuttle is a retired, partially reusable low Earth orbital spacecraft system operated from 1981 to 2011 by the U.S. National Aeronautics and Space Administration (NASA) as part of the Space Shuttle program. Its official program name was Space Transportation System (STS), taken from a 1969 plan for a system of reusable spacecraft where it was the only item funded for development.",
    },
    {
        id: 5,
        rocket: "Atlas V",
        years: "2002-present",
        img: "./img/atlas v.png",
        info: "Atlas V is an expendable launch system and the fifth major version in the Atlas launch vehicle family. It was originally designed by Lockheed Martin, now being operated by United Launch Alliance (ULA), a joint venture between Lockheed Martin and Boeing. Atlas V is also a major NASA launch vehicle. In August 2021, ULA announced that Atlas V would be retired, and all 29 remaining launches had been sold. As of 7 December 2021, 26 launches remain.",
    },
    {
        id: 6,
        rocket: "Falcon 9",
        years: "2013-present",
        img: "./img/falcon 9.png",
        info: "Falcon 9 is a partially reusable two-stage-to-orbit medium-lift launch vehicle designed and manufactured by SpaceX in the United States. The latest version of the first stage can return to Earth and be flown again multiple times. Both the first and second stages are powered by SpaceX Merlin engines, using cryogenic liquid oxygen and rocket-grade kerosene (RP-1) as propellants. Its name is derived from the fictional Star Wars spacecraft, the Millennium Falcon, and the nine Merlin engines of the rocket's first stage.",
    },
    {
        id: 7,
        rocket: "SLS",
        years: "est. 2020",
        img: "./img/sls.png",
        info: "The Space Launch System (abbreviated as SLS) is an American super heavy-lift expendable launch vehicle under development by NASA since 2011. It replaces the Ares I and Ares V launch vehicles, which were cancelled along with the rest of the Constellation program. The SLS is intended to become the successor to the retired Space Shuttle, and the primary launch vehicle of NASA's deep space exploration plans through the 2020s and beyond.",
    },
];

// select items
const img = document.getElementById('rocket-img');
const rocket = document.getElementById("rocket");
const years = document.getElementById('years');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set start
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = rockets[currentItem];
    img.src = item.img;
    rocket.textContent = item.rocket;
    years.textContent = item.years;
    info.textContent = item.info;
})

// show rocket
const showRocket = (arg) => {
    const item = rockets[arg];
    img.src = item.img;
    rocket.textContent = item.rocket;
    years.textContent = item.years;
    info.textContent = item.info;
}

// setup buttons

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > rockets.length - 1) {
        currentItem = 0;
    }
    showRocket(currentItem);
})

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = rockets.length - 1;
    }
    showRocket(currentItem);
})

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * rockets.length);
    showRocket(currentItem);
})
