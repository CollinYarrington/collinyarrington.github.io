window.addEventListener('load', function () { 
    var nav = false; 
    window.nav_toggle = function(){
        if(nav){
        
            nav = false;
        }else{

            nav = true;
        }
    }
});