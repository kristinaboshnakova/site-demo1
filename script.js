let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
/*let thumbnail = document.getSelectorAll('thumbnail .item')*/
let thumbnail = document.querySelectorAll('.thumbnail .item');



let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive +1;
    if(itemActive >= countItem){
        itemActive = 0;
    }

    showSlider();
}
/*prev click event*/

prev.onclick = function(){
    itemActive = itemActive -1;
    if (itemActive < 0){
        itemActive = countItem -1;
    }

    showSlider();
}


//auto run slider //

let refreshInterval = setInterval(() => {
    next.click();
}, 3000);



function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');



    items[itemActive].classList.add('active');
    thumbnail[itemActive].classList.add('active');

    // clear auto time//

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
    
}

// click thumbail//

thumbnail.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});
