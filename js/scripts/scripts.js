var toggleSearchForm = document.getElementById("toggleSearchForm");
var toggleMenu = document.getElementById("toggleMenu");
var sliderPrev = document.getElementById("sliderPrev");
var sliderNext = document.getElementById("sliderNext");

toggleSearchForm.onclick = function(event) {
    var searchTours = document.getElementById("searchTours");
    searchTours.hidden = !searchTours.hidden;
    return false;
};

toggleMenu.onclick = function(event) {
    var navigation = document.getElementById("navigation");
    if(navigation.style.display === "none" || navigation.style.display === "") {
        navigation.style.display = "block";
        return false;
    }
    navigation.style.display = "none";
    return false;
};

sliderPrev.onclick = function(event) {
    var slider = document.getElementById("slider");
    slider.style.marginLeft -= 373;
    console.log(slider.style.marginLeft);
    return false;
};