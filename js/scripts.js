const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg"
];

const numberRan = Math.floor(Math.random() * images.length);
document.getElementById("main_image").src = images[numberRan]

// document.getElementsByClassName("main_image_class").src = images[numberRan]
