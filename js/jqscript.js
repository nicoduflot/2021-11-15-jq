function getXhr(){
    let xhr = false;
    // vérification du navigateur : supporte-t'il ajax
    if(window.XMLHttpRequest || window.ActiveXObject){
        //le navigateur supporte ajax
        if(window.ActiveXObject){
            //navigateur microsoft type ie
            try{
                xhr = new ActiveXobject('Msxml2.XMLHTTP');
            }catch(e){
                xhr = new ActiveXobject('Microsoft.XMLHTTP');
            }
        }else{
            //pas IE
            xhr = new XMLHttpRequest();
        }
    }else{
        //pas d'ajax
        console.log('votre navigateur ne supporte pas l\'objet XMLHttpRequest');
    }
    return xhr;
}