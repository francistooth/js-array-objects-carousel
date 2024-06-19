const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, 
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, 
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, 
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, 
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
];

const preview = document.getElementById('preview');
const thumbs = document.getElementById('thumbs');

images.forEach((element) => {
    // element creation

    const preDiv = document.createElement('div');

    if (element === 'img/01.webp') 
        preDiv.classList.add('active');

    preDiv.classList.add('item', 'position-relative');

    // img

    const img = document.createElement('img');

    img.src = element.image

    preDiv.appendChild(img);

    // text

    const textDiv = document.createElement('div');
    textDiv.classList.add('item-text');

    const title = document.createElement('h3');
    title.innerHTML = element.title;

    const para = document.createElement('p');
    para.innerHTML = element.text;

    textDiv.appendChild(title);
    textDiv.appendChild(para);

    preDiv.appendChild(textDiv);

    preview.appendChild(preDiv);

    // thumbs 

    const thumbDiv = document.createElement('div');

    thumbDiv.classList.add('th-item');

    // img

    const thumbImg = document.createElement('img');

    thumbImg.src = element.image;

    thumbDiv.appendChild(thumbImg);

    thumbs.appendChild(thumbDiv);
});

let slideIndex = 1;

showSlides(slideIndex);