var map = L.map('map', { 
    minZoom: 2,
    maxZoom: 4
}).setView([0, 0], 2)

L.tileLayer('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    maxZoom: 4
}).addTo(map);

const navbar = document.getElementById('navbar');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
    navbar.classList.add('open');
    openBtn.classList.add('hidden');
    closeBtn.classList.add('visible');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('open');
    closeBtn.classList.remove('visible');
    setTimeout(() => {
        openBtn.classList.remove('hidden');
    }, 400);
});

// I dont know better way to do this
const foods = [
    {
        
    }
]