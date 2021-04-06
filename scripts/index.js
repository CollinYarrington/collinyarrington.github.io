window.addEventListener('load', function () { 
    
    window.nav_toggle = function(){
        document.getElementById('nav').classList.toggle("show"); 
    }

    window.show_social_links = function(){
        var elem = document.getElementById("show_social_links");
        elem.classList.remove("hide_social_links");
        elem.classList.add("show_social_links");
    }

    window.hide_social_links = function(){
        var elem = document.getElementById("show_social_links");
        elem.classList.remove("show_social_links");
        elem.classList.add("hide_social_links");
    }

});