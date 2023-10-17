let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let ccsss = document.getElementById('ccsss');
window.onscroll = function(){
  let value = scrollY;
           stars.style.left = value + 'px';
          moon.style.top = value * 3 + 'px';
         mountains.style.top = value * 2 + 'px';
         mountains2.style.top = value * 1.5 + 'px';
       river.style.top = value  + 'px';
      boat.style.top = value + 'px';
     boat.style.left = value * 3 + 'px';
     
}

