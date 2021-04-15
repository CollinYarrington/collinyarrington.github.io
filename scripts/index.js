// alert("Note this page is still in development");

window.addEventListener('load', function () { 
  
    window.nav_toggle = function(){
        document.getElementById('nav').classList.toggle("show"); 
    }

    window.copyEmail = function(){
        const el = document.createElement('textarea');
        el.value = "collinyarrington.za@gmail.com";
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    
        alert("Email Address has been copied to your clipboard");
    }
    
    

const faders = document.querySelectorAll('.fade-in');
const skills = document.querySelectorAll('.skills');


// console.log(skills);
const appearOptions = {
    // threshold: 1,
};

const appearOnScroll = new IntersectionObserver
    (function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                if(entry.target.classList.contains("fade-in")){
                    entry.target.classList.add('appear');
                }else if(entry.target.classList.contains("skills")){
                    entry.target.classList.add('load');
                }
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    skills.forEach(skill => {
        appearOnScroll.observe(skill);
    });



    
    
});


// var profile_state = true;
// window.addEventListener('scroll', () => {
//     var myElement = document.getElementById('pic');
//     var bounding = myElement.getBoundingClientRect();
    
//     if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight && profile_state == true) {
//        null;
//     } else {
//         var elem = document.getElementById("show_social_links");
//         var links = document.getElementById("ul_social_links");

//         profile_state = false;
//         document.getElementById("pic").classList.add("move_pic");
        
//         // elem.classList.remove("hide_social_links");
//         elem.classList.add("show_social_links");
//         links.classList.add("show");
//     }

//     var myElement = document.getElementById('track_one');
//     var track_one_bounding = myElement.getBoundingClientRect();

//     if (track_one_bounding.top >= 0 && track_one_bounding.left >= 0 && track_one_bounding.right <= window.innerWidth && track_one_bounding.bottom <= window.innerHeight && profile_state == false) {
//         profile_state = true;
//         document.getElementById("pic").classList.remove("move_pic");
//         var elem = document.getElementById("show_social_links");

//         elem.classList.remove("show_social_links");
//         // elem.classList.add("hide_social_links");
//         links.classList.remove("show");
//     }
    
// }, false);


var image_status = true;
setInterval(function(){ 
    if(image_status){
        image_status = false;
        document.getElementById("img1").classList.remove("img1");
        document.getElementById("img2").classList.add("img2");
        
    }else{
        image_status = true;
        document.getElementById("img2").classList.remove("img2");
        document.getElementById("img1").classList.add("img1");
    }
}, 10000);


