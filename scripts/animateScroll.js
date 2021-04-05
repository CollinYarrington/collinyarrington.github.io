window.addEventListener('load', function () { 
const faders = document.querySelectorAll('.fade-in');
const profile = document.querySelectorAll('#pic');


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
            }else{
                entry.target.classList.add('test');
            }
            
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
});

var profile_state = true;
window.addEventListener('scroll', () => {
    var myElement = document.getElementById('pic');
    var bounding = myElement.getBoundingClientRect();
    
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight && profile_state == true) {
       null;
    } else {
        console.log('Element is NOT in the viewport!');
        profile_state = false;
        document.getElementById("pic").classList.add("move_pic");
    }

    var myElement = document.getElementById('track_one');
    var track_one_bounding = myElement.getBoundingClientRect();

    if (track_one_bounding.top >= 0 && track_one_bounding.left >= 0 && track_one_bounding.right <= window.innerWidth && track_one_bounding.bottom <= window.innerHeight && profile_state == false) {
        profile_state = true;
        document.getElementById("pic").classList.remove("move_pic");
    }
    
}, false);
