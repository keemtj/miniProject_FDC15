// miniProject

var menuItems = $('.main__menuItem');
var menuDetails = $('.main__menuDetail');
var btnClosed = $('.menuDetail__btnClosed');



menuItems.click(function(){
    menuDetails.show();
});

btnClosed.click(function(){
    menuDetails.hide();
});

