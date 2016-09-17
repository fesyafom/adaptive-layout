var sliderPrev = document.getElementById("sliderPrev");
var sliderNext = document.getElementById("sliderNext");
var lis = document.getElementsByClassName('deals_and_discounts-list-item');

var carousel = document.getElementById('slider');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');
var liStyle = getComputedStyle(listElems[0]);

var width = parseInt(liStyle.width) + 2*parseInt(liStyle.marginLeft);
var count = 1;

var position = 0;

sliderPrev.onclick = function() {
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
    return false;
};

sliderNext.onclick = function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    return false;
};
