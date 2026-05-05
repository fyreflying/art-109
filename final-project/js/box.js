  
const boxEl = document.querySelector('a-box');

const interactive1 = document.querySelector("#interactive1");
const interactive2 = document.querySelector("#interactive2");
const interactive3 = document.querySelector("#interactive3");
const interactive4 = document.querySelector("#interactive4");
const interactive5 = document.querySelector("#interactive5");

const key1 = document.querySelector("#key1");

const door1 = document.querySelector("#door1");

const toggle1 = document.querySelector("#toggle1");
const toggle2 = document.querySelector("#toggle2");
const toggle3 = document.querySelector("#toggle3");

var a = 0;

// const camEl = document.querySelector('data-aframe-default-camera');
const cam1 = document.querySelector("#cam1");



//initial cam stuff


//interactive1
  interactive1.addEventListener('mouseenter', function () {

    interactive1.setAttribute('scale', {x: 1, y: 1, z: 1});


    
  })

  interactive1.addEventListener('mouseleave', function () {

    interactive1.setAttribute('scale', {x: 1, y: 1, z: 1});

    // cam1.setAttribute('fov', 90);

  })
  
  //click to move
  interactive1.addEventListener('click', function () {

    cam1.setAttribute('position', {x: -2, y: 1.6, z: 3});
    cam1.setAttribute('wasd-controls-enabled', false);
    // interactive1.setAttribute('visible', false);

  })



//interactive2
    interactive2.addEventListener('mouseenter', function () {

    interactive2.setAttribute('scale', {x: 1, y: 1, z: 1});


  })

  interactive2.addEventListener('mouseleave', function () {

    interactive2.setAttribute('scale', {x: 1, y: 1, z: 1});

  })

  //click to move
    interactive2.addEventListener('click', function () {

    cam1.setAttribute('position', {x: -9, y: 1.6, z: 3});
    cam1.setAttribute('wasd-controls-enabled', false);
    // interactive2.setAttribute('visible', false);

  })



  //interactive3
    interactive3.addEventListener('mouseenter', function () {

    interactive3.setAttribute('scale', {x: 1, y: 1, z: 1});


  })

  interactive3.addEventListener('mouseleave', function () {

    interactive3.setAttribute('scale', {x: 1, y: 1, z: 1});

  })

  //click to move
    interactive3.addEventListener('click', function () {

    cam1.setAttribute('position', {x: -16.7, y: 1.8, z: 7.7});
    cam1.setAttribute('wasd-controls-enabled', false);
    // interactive3.setAttribute('visible', false);

  })

  //interactive4
    interactive4.addEventListener('mouseenter', function () {

    interactive4.setAttribute('scale', {x: 1, y: 1, z: 1});


  })

  interactive4.addEventListener('mouseleave', function () {

    interactive4.setAttribute('scale', {x: 1, y: 1, z: 1});

  })

  //click to move
    interactive4.addEventListener('click', function () {

    cam1.setAttribute('position', {x: -5.8, y: 1.6, z: 10});
    cam1.setAttribute('wasd-controls-enabled', false);
    // interactive3.setAttribute('visible', false);

  })
  

  //interactive5
    interactive5.addEventListener('mouseenter', function () {

    interactive5.setAttribute('scale', {x: 1, y: 1, z: 1});


  })

  interactive5.addEventListener('mouseleave', function () {

    interactive5.setAttribute('scale', {x: 1, y: 1, z: 1});

  })

  //click to move
    interactive5.addEventListener('click', function () {

    cam1.setAttribute('position', {x: 3, y: 1.6, z: -1.5});
    cam1.setAttribute('wasd-controls-enabled', false);
    // interactive3.setAttribute('visible', false);

  })  


  //door1
  door1.addEventListener('mouseenter', function keypass() {

    if (a > 0) {
    
    toggle2.setAttribute('visible', true);

    } else {
    
    toggle1.setAttribute('visible', true);

    }


  })

  door1.addEventListener('mouseleave', function keypass() {

    if (a > 0) {
    
    toggle2.setAttribute('visible', false);

    } else {
    
    toggle1.setAttribute('visible', false);

    }


  })

  //click 
  door1.addEventListener('click', function keypass() {

    if (a > 0) {

      cam1.setAttribute('position', {x: -1.5, y: 33.6, z: -3.5});
      cam1.setAttribute('wasd-controls-enabled', true);

    } else {

      return;

    }

  })  

    //key1
  key1.addEventListener('mouseenter', function () {

    toggle3.setAttribute('visible', true);


  })

  key1.addEventListener('mouseleave', function () {

    toggle3.setAttribute('visible', false);

  })

  //click 
  key1.addEventListener('click', function () {

    key1.setAttribute('visible', false);
    toggle3.setAttribute('visible', false);
    
    a = 1;

  })  

