/* fonction raccourcis dom content loaded */
function loaded(callable){
    return window.addEventListener('DOMContentLoaded', callable);
}

/* fonction raccourcis de sélection d'un élément du DOM */
function s(selector){
    return document.querySelector(selector);
}

/* fonction raccourcis de sélection d'une nodelist d'élément(s) du DOM */
function sAll(selector){
    return document.querySelectorAll(selector);
}

/* fonction de chargement hors DOM de la navigation */
function loadNav(selector){
    let navElement = s(selector);
    //console.log(navElement);
    fetch('../includes/navigation.html')
    .then( function(response){
        return response.text();
    })
    .then( function(nav){
        navElement.innerHTML = nav;
    })
    .catch(function(error){
        console.log(error.message);
    });
}