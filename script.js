
function openCity(event,cityName){
    var i,semcon,tab;
    semcon=document.getElementsByClassName("semcon");
    for(i=0;i<semcon.length;i++){
        semcon[i].style.display="none";
    }

    tab=document.getElementsByClassName("tab");
    for(i=0;i<tab.length;i++){
        tab[i].className.replace("active");

    }
    document.getElementById(cityName).style.display="block";
    event.currentTarget.className ="active";

}


