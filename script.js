var map = L.map('map', { 
    minZoom: 2,
    maxZoom: 5,
    zoomControl: false
}).setView([0, 0], 2)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    maxZoom: 19
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
    { country: "Italy", dish: "Pizza", desc: "一种在面饼上铺有番茄、奶酪等配料的美食。", lat: 41.8719, lng: 12.5674 },
    { country: "Japan", dish: "Sushi", desc: "用醋调味的米饭搭配海鲜或蔬菜。", lat: 36.2048, lng: 138.2529 },
    { country: "Mexico", dish: "Tacos", desc: "玉米饼或面饼中包裹各种咸味馅料。", lat: 23.6345, lng: -102.5528 },
    { country: "France", dish: "Croissant", desc: "松软酥脆的牛角面包。", lat: 46.2276, lng: 2.2137 },
    { country: "India", dish: "Biryani", desc: "用香料烹制的米饭配肉类或蔬菜。", lat: 20.5937, lng: 78.9629 },
    { country: "China", dish: "Peking Duck", desc: "皮脆肉嫩的烤鸭，通常搭配薄饼食用。", lat: 35.8617, lng: 104.1954 },
    { country: "USA", dish: "Burger", desc: "夹有烤肉饼和各种配料的汉堡包。", lat: 37.0902, lng: -95.7129 },
    { country: "Spain", dish: "Paella", desc: "用藏红花、海鲜和肉类制作的西班牙炒饭。", lat: 40.4637, lng: -3.7492 },
    { country: "Thailand", dish: "Pad Thai", desc: "泰式炒米粉，搭配虾、豆芽和花生。", lat: 15.8700, lng: 100.9925 },
    { country: "Greece", dish: "Moussaka", desc: "用茄子、肉末和白酱分层烤制的菜肴。", lat: 39.0742, lng: 21.8243 },
    { country: "Brazil", dish: "Feijoada", desc: "由豆类与猪肉或牛肉炖制而成的炖菜。", lat: -14.2350, lng: -51.9253 },
    { country: "Turkey", dish: "Kebab", desc: "烤制或串烧的肉类菜肴。", lat: 38.9637, lng: 35.2433 },
    { country: "Morocco", dish: "Tagine", desc: "用陶锅慢炖的肉类与蔬菜炖菜。", lat: 31.7917, lng: -7.0926 },
    { country: "Vietnam", dish: "Pho", desc: "加入香草与肉类的越南米粉汤。", lat: 14.0583, lng: 108.2772 },
    { country: "Germany", dish: "Bratwurst", desc: "用猪肉、牛肉或小牛肉制成的德国香肠。", lat: 51.1657, lng: 10.4515 },
    { country: "Ethiopia", dish: "Injera", desc: "酸面团发酵制成的薄饼，通常配炖菜食用。", lat: 9.145, lng: 40.4897 },
    { country: "Korea", dish: "Kimchi", desc: "用香料腌制发酵的蔬菜。", lat: 35.9078, lng: 127.7669 },
    { country: "Lebanon", dish: "Hummus", desc: "用鹰嘴豆、芝麻酱、柠檬和大蒜制成的蘸酱。", lat: 33.8547, lng: 35.8623 },
    { country: "Russia", dish: "Borscht", desc: "用甜菜制作的汤，可热食或冷食。", lat: 61.5240, lng: 105.3188 },
    { country: "Australia", dish: "Meat Pie", desc: "内馅为碎肉与肉汁的咸味派。", lat: -25.2744, lng: 133.7751 },
    { country: "Malaysia", dish: "Nasi Lemak", desc: "用椰浆煮成的米饭，传统搭配江鱼仔、黄瓜、花生和煮鸡蛋。", lat: 4.2105, lng: 101.9758 }
];


foods.forEach((food) => {
    var foodIcon = L.divIcon({
        html: `<div class="food-icon" style="background-image: url('assets/${food.dish.toLowerCase().replace(/\s+/g, '-')}.jpg')"></div>`,
        className: "food-icon", 
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -25]
    })
    L.marker([food.lat, food.lng], { icon: foodIcon })
        .bindPopup(`<h3>${food.dish}</h3>
                    <p>${food.desc}</p>`)
        .addTo(map);
});

document.getElementById('randFood').addEventListener('click', () => {
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    map.setView([randomFood.lat, randomFood.lng], 5);
});