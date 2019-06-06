var container = document.getElementById("planetContainer");
var description = document.getElementById("description");
var title = document.getElementById("title");
var usedAreas = [];
var images = [];
var pCount = -1;
var xStart = 200;
var data = [
    {
        title: "Spiel 1",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        title: "Spiel 2",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        title: "Spiel 3",
        description: "Jo dat sind mock daten"
    },
    {
        title: "Spiel 4",
        description: "Kuhle beschreibung"
    },
    {
        title: "Spiel 5",
        description: "Jo jo mir gehen die ideen langsam aus"
    },
    {
        title: "Spiel 6",
        description: "Beschreibung für Spiel 6 ihr ficker"
    },
    {
        title: "Spiel 7",
        description: "VS Code is zum code editieren schon echt cool"
    },
    {
        title: "Spiel 8",
        description: "spiel acht ist das schlechteste, deswegen ist es ganz hinten"
    }
]

window.addEventListener('resize', function () {
    xStart = 200;
    container.innerHTML = "";
    loadPlanets(data);
});

function loadPlanets (list) {

    list.forEach(function (p, i) {
        var planet = document.createElement("div");
        var img = gimmePlanet();
        img.id = i;
        img.title = p.title;
        planet.appendChild(img);
        var pos = randomPos();
        planet.style.position = "absolute";
        planet.style.marginTop = pos.y;
        planet.style.marginLeft = pos.x;
        container.appendChild(planet);
    });

}

function gimmePlanet () {
    pCount++; 
    if (pCount > (images.length - 1)) {
        pCount = 0;
    }
    return loadImage(images[pCount]);
}

function loadImage (src) {
    var img = new Image();
    img.src = src;
    img.addEventListener("click", displayPlanetInformation);
    img.addEventListener("focus", displayPlanetInformation);
    img.className = "planetImage";
    img.tabIndex = "0";
    return img;
}

function displayPlanetInformation (ev) {
    var el = data[ev.path[0].id];
    description.innerHTML = el.description;
    title.innerHTML = el.title;
}

function randomPos () {

    l = {
        x: xStart,
        y: Math.floor((Math.random() * (window.innerHeight / 3)) + 1) + 100
    };

    xStart += 200;

    l.x += "px";
    l.y += "px";

    return l;

}

images = [
    "src/planet.png",
    "src/planet2.png",
    "src/planet3.png",
    "src/planet4.png",
    "src/planet5.png",
    "src/planet6.png",
    "src/planet7.png",
    "src/planet8.png"
]

loadPlanets(data);