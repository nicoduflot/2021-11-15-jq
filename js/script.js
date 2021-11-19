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
    })
    .finally(function(){
        console.log('nav chargée');
    });
}

// fonctions de gestions des cookies
function setCookie(name, value ='', day=-1){
    let dateNow = new Date();
    dateNow.setTime( dateNow.getTime() + ( day * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};  expires=${dateNow}; path=/; SameSite=Strict`;
}

// récupérer un cookie

function getCookie(name){
    /*
    unCookie=23; autrecookie=12;     
    */
   let tabCookie = document.cookie.split('; ');
   for(cookie of tabCookie){
       let tabValue = cookie.split('=');
       if(name === tabValue[0]){
           return tabValue[1];
       }
   }
   return false;
}