/* 
* @Author: liyu
* @Date:   2016-02-18 09:54:47
* @Last Modified by:   liyu
* @Last Modified time: 2016-02-19 00:02:15
*/

'use strict';
window.onload = function() {
  var elements = document.querySelectorAll(".skill-level");
  // console.log(elements[0]);
  // levelAnimate(elements[0]);
  for (var i = 0; i< elements.length; i++) {
    levelAnimate(elements[i]);
  }
}
function levelAnimate(element) {
  var value = element.getAttribute("data-level");
  var children = element.querySelector("div");
  function animate(x) {
    children.style.width = x + "%";
    if (x < value) {
      setTimeout(function(){
        animate(x+2);
      },16)
    }
  }
  animate(0);
}