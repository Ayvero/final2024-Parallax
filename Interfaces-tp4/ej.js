const wrapper = document.getElementById("wrapper");
const paralx0 = document.getElementById("paralx0");
const paralx1 = document.getElementById("paralx1");
const paralx2 = document.getElementById("paralx2");

wrapper.onscroll = function () {
  let y = wrapper.scrollTop;
  paralx0.style.top = 1800 - y * 2.65 + "px";
  paralx1.style.top = 1200 - y * 0.75 + "px";
  paralx2.style.top = 800 + y * 0.5 + "px";
};


/*===========mouse moving=============*/

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


/*======================0sprintsheet================*/

if (parent==top)	
  document.getElementById('song').autoplay = true;