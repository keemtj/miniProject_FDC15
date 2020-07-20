// 메인
const menuItem = document.querySelector('.main__menuItem');
const menuDetail = document.querySelector('.main__menuDetail');

const menuItems= document.querySelectorAll('.main__menuItem');
const menuDetails = document.querySelectorAll('.main__menuDetail');
const closeBtns = document.querySelectorAll('.menuDetail__btnClosed')


for(let i = 0; i < menuItems.length; i++){
    let items = menuItems[i];
    items.addEventListener('click', detailUp);    
}

function detailUp(e) {
    let _this = e.target;
    let _parent = _this.closest('li');
    let _one = _parent.querySelector('.main__menuDetail');
    _one.classList.add('main__menuDetail--active');
}

for(let i = 0; i < closeBtns.length; i++){
    let btns = closeBtns[i];
    // console.log(menuDetails[i]);
    btns.addEventListener('click', function() {menuDetails[i].classList.remove('main__menuDetail--active')});
}