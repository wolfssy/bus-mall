'use strict';
var newImages = [];
var theOldImages = [];
var allImages = ['one.jpg', 'two.jpg', 'three.jpg'];

function image(name, source, timesClicked, timesShown){
  this.name = name;
  this.source = source;
  this.timesClicked = 0;
  this.timesShown = 0;
  var random = Math.floor(Math.random() * allImages[i]);
  newImages.push(this);
}
  this.render = function(){
    var trEl = document.creatElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textcontent = this.nametrEl.appendChild(tdEl);
    while (var i = 0; i < allImages.length; i++){
      tdEl=document.createElemnt('td');
      tdEl.textContent = this.newImages[i];
      trEl.appendChild(tdEl);
      image-container.appendChild(trEl);
    };
    if(image() === this.render())
    theOldImages.push(this);
  }


document.getElementById('image-container').addEventListener('click', image)

function randomImage(){
  var random = Math.floor(Math.random() * allImages[i]);
  var trEl=
}
