'use strict';
var newImages = [];
var theOldImages = [];
var allImages = ['one.jpg', 'two.jpg', 'three.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg', 'eight.jpg', 'nine.jpg', 'ten.jpg', 'eleven.jpg', 'twelve.jpg', 'thirteen.jpg', 'fourteen.jpg', 'fifteen.jpg', 'sixteen.jpg', 'seventeen.jpg', 'eighteen.jpg', 'nineteen.jpg', 'twenty.jpg'];

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
  var random1 = Math.floor(Math.random() * allImages[i]);
  var random2 = Math.floor(Math.random() * allImages[i]);
  while(random1 === random2){
    var random = Math.floor(Math.random() * allImages[i]);
  }
  var random3 = Math.floor(Math.random() * allImages[i]);
  while(random1 === random3 || random2 ===random3){
    alert(woops!);
    var random = Math.floor(Math.random() * allImages[i]);
  }
}
