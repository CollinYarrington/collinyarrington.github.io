window.addEventListener('load', function () {  
try{
    var type_count = 0;
    var backspace_count = 0;
    var txt = ['I am creative.', 'I am self motivated.', 'I don\'t get much sleep', 'I am a Developer ;)']; /* The text */
    var speed = 0; /* The speed/duration of the effect in milliseconds */
    var index = 0;

     function type() {
        if (type_count < txt[index].length) {
            document.getElementById("typeWriter").innerHTML += txt[index].charAt(type_count);
            type_count++;

            speed = Math.floor(Math.random()*(200-50+1)+50)
            setTimeout(type, speed);
        }else if(txt[index] == txt[3]){
            return;
        }else if(type_count == txt[index].length){
            setTimeout(function () {
                backspace();
            }, 3000);
        }
    }

    function backspace() {
        if (backspace_count < txt[index].length) {
            
            document.getElementById("typeWriter").innerHTML = txt[index].substring(0, txt[index].length - backspace_count - 1);
            backspace_count++;

            speed = 50; /* The speed/duration of the effect in milliseconds */
            setTimeout(backspace, speed);
        }else if(backspace_count == txt[index].length){
            index++;
            type_count = 0;
            backspace_count = 0;
           
            type();
        }
    }
    
}catch(err){
    console.log(err)
}finally{
    type();
}

})