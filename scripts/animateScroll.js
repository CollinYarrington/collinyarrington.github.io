window.addEventListener('load', function () { 
const faders = document.querySelectorAll('.fade-in');
const profile = document.querySelectorAll('#pic');
// const profile_image = document.getElementById('pic');

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

// const profileOptions = {
//     threshold: 1,
// };
// const profileMove = new IntersectionObserver
// (function(
//     entries,
//     profileMove
// ) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return;
//         } else {
//             entry.target.classList.add('test');
//             profileMove.unobserve(entry.target);
//         }
//     });
// },
// profileOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// profile.forEach(pro => {
//     appearOnScroll.observe(pro);
// });

});

// window.addEventListener('scroll', function () {
//     var elem = document.querySelector('#pic');
//     var bounding = elem.getBoundingClientRect();
//     var pic_move = false;

//     if (bounding["top"] < -150.5){
//         pic_move = true;
//     }else if (bounding["top"] > -150.5){
//         pic_move = false;
//     }

//     console.log(bounding["y"]);
//     if(bounding["y"] > window.innerHeight){
//         // document.getElementById("pic").classList.remove("return_pic");
        
//         document.getElementById("pic").classList.add("move_pic");
//     }else{
//         // document.getElementById("pic").
//         // document.getElementById("pic").classList.remove("move_pic");
//     }


    
// });



// window.onscroll = function(e) {
//     if (window.pageYOffset == 700){
//         console.log("hit");
//     }
//  }

  
var profile_state = true;
window.addEventListener('scroll', () => {
    var myElement = document.getElementById('pic');
    var bounding = myElement.getBoundingClientRect();
    console.log(document.documentElement.scrollTop);
    // var profile_state = false;
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight && profile_state == true) {
        // console.log('Element is in the viewport!');
        // profile_state = true;
        // document.getElementById("pic").classList.remove("move_pic");  
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
