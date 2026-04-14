  
const boxEl = document.querySelector('a-box');

const interactive1 = document.querySelector("#interactive1");
const interactive2 = document.querySelector("#interactive2");
const interactive3 = document.querySelector("#interactive3");

const toggle1 = document.querySelector("#toggle1");
const toggle2 = document.querySelector("#toggle2");
const toggle3 = document.querySelector("#toggle3");

  interactive1.addEventListener('mouseenter', function () {

    interactive1.setAttribute('scale', {x: 1.25, y: 1.25, z: 1.25});
    toggle1.setAttribute('visible', true);
    
  })

  interactive1.addEventListener('mouseleave', function () {

    interactive1.setAttribute('scale', {x: 1, y: 1, z: 1});
    toggle1.setAttribute('visible', false);

  })



    interactive2.addEventListener('mouseenter', function () {

    interactive2.setAttribute('scale', {x: 1.25, y: 1.25, z: 1.25});
    toggle2.setAttribute('visible', true);
    
  })

  interactive2.addEventListener('mouseleave', function () {

    interactive2.setAttribute('scale', {x: 1, y: 1, z: 1});
    toggle2.setAttribute('visible', false);

  })

      interactive3.addEventListener('mouseenter', function () {

    interactive3.setAttribute('scale', {x: 1.25, y: 1.25, z: 1.25});
    toggle3.setAttribute('visible', true);
    
  })

  interactive3.addEventListener('mouseleave', function () {

    interactive3.setAttribute('scale', {x: 1, y: 1, z: 1});
    toggle3.setAttribute('visible', false);

  })

