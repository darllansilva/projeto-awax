function toggle(menu-opener) {
    var display = document.getElementsByClassName(menu-opener).style.display = 'block';
    if(display == "none"){
        document.getElementsByClassName(menu-opener).style.display = 'block';
    }
    else{
        document.getElementsByClassName(menu-opener).style.display = 'none';
    }
}