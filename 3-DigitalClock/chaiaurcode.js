const clock = document.getElementById('clock');

setInterval(function(){
    // console.log(date.toLocaleDateString());
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();   

}, 1000);
