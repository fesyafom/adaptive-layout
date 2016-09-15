var toggleSearchForm = document.getElementById("toggleSearchForm");

toggleSearchForm.onclick = function(event) {
    var searchTours = document.getElementById("searchTours");
    searchTours.hidden = !searchTours.hidden;
    return false;
};
