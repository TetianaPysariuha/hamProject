const btnsCollection = document.querySelectorAll('.btns');
const typeServiceCollection =document.querySelectorAll('.type-item');
const serviseType = document.querySelector('.service-type');
const serviceTypeInformation = document.querySelector('.type-information');
const workType = document.querySelector('.work-type');
const workBlocks = document.querySelector('#work-blocks');
const imgWorkCollection = [{ path:'./img/graphic_design/graphic-design1.jpg', category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design2.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design3.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design4.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design5.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design6.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design7.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design8.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design9.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design10.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design11.jpg',category: 'graphic design'},
                            { path:'./img/graphic_design/graphic-design12.jpg',category: 'graphic design'},
                            { path:'./img/landing_page/landing-page1.jpg',category: 'landing page'},
                            { path:'./img/landing_page/landing-page2.jpg',category: 'landing page'},
                            { path:'./img/landing_page/landing-page3.jpg',category: 'landing page'},
                            { path:'./img/landing_page/landing-page4.jpg',category: 'landing page'},
                            { path:'./img/landing_page/landing-page5.jpg',category: 'landing page'},
                            { path:'./img/landing_page/landing-page6.jpg',category: 'landing page'},
                            { path:'./img/landing_page/landing-page7.jpg',category: 'landing page'},
                            { path:'./img/web_design/web-design1.jpg',category: "web design"},
                            { path:'./img/web_design/web-design2.jpg',category: "web design"},
                            { path:'./img/web_design/web-design3.jpg',category: 'web design'},
                            { path:'./img/web_design/web-design4.jpg',category: 'web design'},
                            { path:'./img/web_design/web-design5.jpg',category: 'web design'},
                            { path:'./img/web_design/web-design6.jpg',category: 'web design'},
                            { path:'./img/web_design/web-design7.jpg',category: 'web design'},
                            { path:'./img/wordpress/wordpress1.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress2.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress3.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress4.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress5.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress6.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress7.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress8.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress9.jpg',category: 'wordpress'},
                            { path:'./img/wordpress/wordpress10.jpg',category: 'wordpress'}];
let imgWorkDrownAmount = 12;
const imgWorkAddAmount = 12;
const btnWorkAddMore = document.querySelector('#work-load-more');
const spinerWorkAddMore = document.querySelector('#fountainG');
const spinerGalleryAddMore = document.querySelector('#fountainG-gallery');
const caruselPeople = [{path: './img/people/BrownAmmi.png', name: 'Ammi Brown', position: 'full stack'},
                        {path: './img/people/MiltonSam.png', name: 'Sam Milton', position: 'front developer'},
                        {path: './img/people/HasanAli.png', name: 'Ali Hasan', position: 'UX Designer'},
                        {path: './img/people/SmithAnn.png', name: 'Ann Smith', position: 'UX Designer'}];
let currentElementCaruselPeople = 0;
const caruselContent = document.querySelector('.carusel-content');
const peopleCarusel = document.querySelector('.people-carusel');
const galleryImgCollection = ["./img/Gallery/img1.png" ,
                                "./img/Gallery/img2.png" ,
                                "./img/Gallery/img3.png" ,
                                "./img/Gallery/img4.png" ,
                                "./img/Gallery/img5.png" ,
                                "./img/Gallery/img6.png" ,
                                "./img/Gallery/img7.png" ,
                                "./img/Gallery/img8.png" ,
                                "./img/Gallery/img9.png" ,
                                "./img/Gallery/img10.png",
                                "./img/Gallery/img11.png",
                                "./img/Gallery/img12.png",
                                "./img/Gallery/img13.png",
                                "./img/Gallery/img14.png",
                                "./img/Gallery/img15.png",
                                "./img/Gallery/img16.png",
                                "./img/Gallery/img17.png"];
let alreadyDrawAmountGallary = 0;
const drawAmountGallaryStep = 8;
const btnAddMoreGallery = document.querySelector('#gallery-load-more');

//effect of clicked button

btnsCollection.forEach(elem => {
    elem.addEventListener('mousedown', (event) =>{
        event.target.classList.add('btns-clicked');
    });
});

btnsCollection.forEach(elem => {
    elem.addEventListener('mouseup', (event) =>{
        event.target.classList.remove('btns-clicked');
    });
});

//Tabs in Our services changed by mouse click and service information changes.

serviseType.addEventListener('click', (event) => {
    serviseType.querySelector('.type-item-chosen').classList.remove('type-item-chosen');
    serviceTypeInformation.querySelector('.active').classList.remove('active');
    event.target.classList.add('type-item-chosen');
    serviceTypeInformation.querySelector(`[data-type = '${event.target.dataset.type}']`).classList.add('active');
});

//Create exact HTML blocks in given parrent node.

function createBlocks(someArray, drowAmount, parentElement) {
    const imgListLenght =  someArray.length;   
    for(let i = 0; i < (drowAmount > imgListLenght? imgListLenght : drowAmount); ++i){
        parentElement.insertAdjacentHTML('beforeend',
        `<div class="card-wraper">
            <div data-category = ${someArray[i].category} class="work-cards">
                <div class="card-front">
                    <img src= ${someArray[i].path} alt="" class="work-item">
                </div>
                <div class="card-back">
                    <img src="./img/icon.png" alt="icon" class="icon">
                    <p class="card-name font-bold">creative design</p>
                    <p class="card-category font">${someArray[i].category}</p>
                </div>
            </div>
        </div>`)
    };
};

//checks if any more image exist in array, except already have drawn, and hides the button "Load more" if no more img.

function checkBtnLoadMore(someArray) {
    if(someArray.length <= imgWorkDrownAmount) {
        btnWorkAddMore.classList.add('display-none');
    } else {
        btnWorkAddMore.classList.remove('display-none');
    };
};

//draws block with img in section "Our Amazing Work" with given category.

function drawFilteredList(category) {
    workBlocks.innerHTML = '';
    switch (category) {
        case 'All':
            const shuffledArray =  imgWorkCollection.sort(() => Math.random() - 0.5);
            createBlocks(shuffledArray, imgWorkDrownAmount, workBlocks);
            checkBtnLoadMore(shuffledArray);
            break;
        case 'Graphic Design':
            const newArrayGraficDesight = imgWorkCollection.filter(elem => elem.category ===  'graphic design');
            createBlocks(newArrayGraficDesight, imgWorkDrownAmount, workBlocks);
            checkBtnLoadMore(newArrayGraficDesight);
            break;
        case 'Web Design':
            const newArrayWebDesign = imgWorkCollection.filter(elem => elem.category === 'web design');
            createBlocks(newArrayWebDesign, imgWorkDrownAmount, workBlocks);
            checkBtnLoadMore(newArrayWebDesign);
            break;
        case 'Landing Pages':
            const newArrayLandingPage = imgWorkCollection.filter(elem => elem.category === 'landing page');
            createBlocks(newArrayLandingPage, imgWorkDrownAmount, workBlocks);
            checkBtnLoadMore(newArrayLandingPage);
            break;
        case 'Wordpress':
            const newArrayWordpress = imgWorkCollection.filter(elem => elem.category === 'wordpress');
            createBlocks(newArrayWordpress, imgWorkDrownAmount, workBlocks);
            checkBtnLoadMore(newArrayWordpress);
            break; 
}};

workType.addEventListener('click', (event) => {
    if(event.target === event.currentTarget){
        return;
    }
    drawFilteredList(event.target.dataset.category);
    document.querySelector('.chosen-item-work').classList.remove('chosen-item-work');
    event.target.classList.add('chosen-item-work');
});

//AddMore Button in Our Amazing Work block
btnWorkAddMore.addEventListener('click', () => {
    btnWorkAddMore.classList.add('display-none');
    spinerWorkAddMore.classList.remove('display-none');
    setTimeout(() => {
        btnWorkAddMore.classList.remove('display-none');
        spinerWorkAddMore.classList.add('display-none');
        imgWorkDrownAmount += imgWorkAddAmount;
        drawFilteredList(document.querySelector('.chosen-item-work').dataset.category);
    }, 2000);
});

//Carusel
function drawCarusel() {
    const caruselImg = caruselContent.querySelectorAll('img');
    for (let i = 0; i < caruselPeople.length; i++) {
        const elemNumber = (currentElementCaruselPeople + i - 3 + caruselPeople.length)%caruselPeople.length;
        caruselImg[i].src = caruselPeople[elemNumber].path;
        caruselImg[i].alt = caruselPeople[elemNumber].name;
        caruselImg[i].dataset.elemindex = elemNumber;
    };
};

function drawPerson (indexOfElement) {
    document.querySelector('.person .person-name').textContent = caruselPeople[indexOfElement].name;
    document.querySelector('.person .person-profession').textContent = caruselPeople[indexOfElement].position;
    document.querySelector('.person .person-foto img').src = caruselPeople[indexOfElement].path;
    document.querySelector('.person .person-foto img').alt = caruselPeople[indexOfElement].name;
}

peopleCarusel.addEventListener('click', (event) => {
    if(event.target.attributes.id.value === 'preview') {
        currentElementCaruselPeople = (currentElementCaruselPeople - 1 + caruselPeople.length) % caruselPeople.length;
        drawCarusel();
        drawPerson(caruselContent.querySelector('.active-carusel img').dataset.elemindex);
    };
    if (event.target.attributes.id.value === 'nextview') {
        currentElementCaruselPeople = (currentElementCaruselPeople + 1 + caruselPeople.length) % caruselPeople.length;
        drawCarusel();
        drawPerson(caruselContent.querySelector('.active-carusel img').dataset.elemindex);
    };
});

caruselContent.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
        return;
    };
    caruselContent.querySelector('.active-carusel').classList.remove('active-carusel');
    event.target.parentNode.classList.add('active-carusel');
    drawPerson (+event.target.dataset.elemindex);
});

//Masonry
 const gridMasonry = document.querySelector('.grid-masonry');
 const masonry = new Masonry(gridMasonry, {
    columns:3, 
    itemSelector:'.massonry-item',
    fitWidth: true,
    gutter: 5
 });
 
 //AddMore Gallary of img
 function addNewImgToGallery() {
    const imgListLenght =  galleryImgCollection.length;
    for(let i = 0; i < (alreadyDrawAmountGallary + drawAmountGallaryStep > imgListLenght? imgListLenght - alreadyDrawAmountGallary: drawAmountGallaryStep); ++i){
        const newElement = document.createElement('div');
        newElement.className = 'grid-item massonry-item';
        const newImg = document.createElement('img');
        newImg.src = galleryImgCollection[i];
        newElement.appendChild(newImg);
        gridMasonry.insertAdjacentElement('beforeend',newElement);
        masonry.appended(newElement);
 }};

 document.querySelector('#gallery-load-more').addEventListener('click', (event) => {
    btnAddMoreGallery.classList.add('display-none');
    spinerGalleryAddMore.classList.remove('display-none');
    setTimeout(() => {
        spinerGalleryAddMore.classList.add('display-none');
        addNewImgToGallery();
        if(alreadyDrawAmountGallary + drawAmountGallaryStep <= galleryImgCollection.length) {
            alreadyDrawAmountGallary  += drawAmountGallaryStep;
            btnAddMoreGallery.classList.remove('display-none');
        };
    }, 2000);    
    masonry.reloadItems();
});