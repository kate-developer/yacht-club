let themeDark = document.querySelector('.theme-button-dark');
let themeLight = document.querySelector('.theme-button-light');

themeDark.onclick = function () {
    document.body.classList.add('dark');
    themeDark.classList.add('active');
    themeLight.classList.remove('active');
};

themeLight.onclick = function () {
    document.body.classList.remove('dark');
    themeLight.classList.add('active');
    themeDark.classList.remove('active');
};

let sanSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

sanSerifButton.onclick = function () {
    document.body.classList.remove('serif');
    sanSerifButton.classList.add('active');
    serifButton.classList.remove('active');
}

serifButton.onclick = function () {
    document.body.classList.add('serif');
    sanSerifButton.classList.remove('active');
    serifButton.classList.add('active');
}


let articleSections = document.querySelectorAll('.blog-article');

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    };
};



let cardButtonGrid = document.querySelector('.card-view-button-grid');
let cardButtonList = document.querySelector('.card-view-button-list');

let cardList = document.querySelector('.cards');

cardButtonGrid.onclick = function () {
    cardList.classList.remove('list');
    cardButtonGrid.classList.add('active');
    cardButtonList.classList.remove('active')
}

cardButtonList.onclick = function () {
    cardList.classList.add('list');
    cardButtonList.classList.add('active');
    cardButtonGrid.classList.remove('active')
}



let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list li a')


for (let activeImage of previews) {

    activeImage.onclick = function (evt) {
        evt.preventDefault();
        mainImage.src = activeImage.href;

        let currentActive = document.querySelector('.preview-list li .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };
}
