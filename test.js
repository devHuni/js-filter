const imageList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imageListItems = document.querySelectorAll('.image-list li');
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dNone = 'd-none';

// 버튼 활성화
for(const btn of btns) {
    btn.addEventListener('click', function() {
        const parent = this.parentElement;
        document.querySelector('.view-options .active').classList.remove(active);
        parent.classList.add(active);

        if(parent.classList.contains('show-list')) {
            parent.previousElementSibling.previousElementSibling.classList.add(dNone);
            imageList.classList.remove(gridView);
            imageList.classList.add(listView);
        }else {
            parent.previousElementSibling.classList.add(dNone);
            imageList.classList.remove(listView);
            imageList.classList.add(gridView);
        }
    });
}

// 리스트 너비 조절 Range 스크립트
const rangeInput = document.querySelector('input[type="range"]');

rangeInput.addEventListener('input', function() {
    document.documentElement.style.setProperty('--minRangeValue', `${this.value}px`);
});

// 검색 키워드로 필터 적용
const captions = document.querySelectorAll('.image-list figcaption p:first-child');
const myArray = [];
let counter = 1;

for(const caption of captions) {
    myArray.Push ({
        id:counter++,
        text:caption.textContent
    });
}
console.log(myArray);

const searchInput = document.querySelector('input[type="search"]');
const photosCounter = document.querySelector('.toolbar .counter span');

searchInput.addEventListener('keyup', keyupHandler);
// keydown, keypress

function keyupHandler() {
    for(const item of imageListItems) {
        item.classList.add(dNone);
    }
    const keywords = this.value;

    const filteredArray = myArray.filter(el => el.text.toLowerCase().includes(keywords.toLowerCase()));
    console.log(filteredArray);

    if(filteredArray.length > 0) {
        for(const el of filteredArray) {
            document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);
        }
    }
    photosCounter.textContent = filteredArray.length;
}



// filter
/*
var arr = [3, 15, 9, 20, 25];
var arr2 = arr.filter(function(n) {
    return n % 5 == 0;
});
console.log(arr2);
*/

/* 
var arr = [3, 15, 9, 20, 25];
var arr2 = arr.filter(n => {return n % 5 == 0;});
console.log(arr2);
*/

/*
var arr = [3, 15, 9, 20, 25];
var arr2 = arr.filter(n => n % 5 == 0);
console.log(arr2);
*/