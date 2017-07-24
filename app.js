'use strict';



// function Image(number) {
//   this.name = number;
//   this.source = 'img/' + this.name + '.jpg';
//   this.timesShown = 0;
//   Image.all.push(this);
// }

Image.all = [];
Image.allNames = ['one.jpg','two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg', 'eight.jpg', 'nine.jpg', 'ten.jpg', 'eleven.jpg', 'twelve.jpg', 'thirteen.jpg', 'fourteen.jpg', 'fifteen.jpg', 'sixteen.jpg', 'seventeen.jpg', 'eighteen.jpg', 'nineteen.jpg', 'twenty.jpg'];

for(var i = 0; i < Image.allNames.length; i++){
  new Image(Image.allNames[i]);
}
//
// Image.imgEl = document.getElementById('the_image');
//
function randomImage(){
  console.log('shit');
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl.src = Image.all[randomIndex].source;
  Image.imgEl.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  // console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
}
document.getElementById('the_image').addEventListener('click',randomImage);
//
// randomImage();
image();
