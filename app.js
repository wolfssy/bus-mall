'use strict';
// minute 38 in part 2 of 3
function Pictures(number){
  this.name = number;
  this.source = 'img/' + this.name + '.jpg';
  this.amountOfShows = 0;
  this.timesClicked = 0;
  Pictures.all.push(this);
}

Pictures.totalClicks = 0;
Pictures.all = [];
Pictures.allNames = ['one', 'two', 'three', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen','twenty'];
var previouslyShown = [];

for(var i = 0; i < Pictures.allNames.length; i++){
  new Pictures(Pictures.allNames[i]);
}
Pictures.leftImg = document.getElementById('left');
Pictures.centerImg = document.getElementById('center');
Pictures.rightImg = document.getElementById('right');
Pictures.container = document.getElementById('imageContainer');

function makeRandomNumber(){
  return Math.floor(Math.random() * Pictures.all.length);
}



function displayImages(){
  //generate 3 random numbers
  //ensure that those numbers are unique
  console.log(previouslyShown, 'prevoiusly shown images');
  var numbers = [];
  numbers[0] = makeRandomNumber();
  numbers[1] = makeRandomNumber();
  while(numbers[0] === numbers[1]) {
    console.log('Dupe found');
    numbers[1] = makeRandomNumber();
  }
  numbers[2] = makeRandomNumber();
  while(numbers[2] === numbers[1] || numbers[2] === numbers[0]){
    console.log('Dupe found');
    numbers[2] = makeRandomNumber();
  }
  for(var i = 0; i < numbers.length; i++){
    while(previouslyShown.includes(numbers[i])){
      numbers[i] = makeRandomNumber();
    }
  }
  for(var j = 0; j < numbers.length; j++){
    while(Pictures.all.includes(numbers[j])){
      numbers[i] = makeRandomNumber();
    }
  }

  Pictures.leftImg.src = Pictures.all[numbers[0]].source;
  Pictures.centerImg.src = Pictures.all[numbers[1]].source;
  Pictures.rightImg.src = Pictures.all[numbers[2]].source;
  Pictures.leftImg.alt = Pictures.all[numbers[0]].name;
  Pictures.centerImg.alt = Pictures.all[numbers[1]].name;
  Pictures.rightImg.alt = Pictures.all[numbers[2]].name; Pictures.all[numbers[0]].amountOfShows += 1;
  Pictures.all[numbers[1]].amountOfShows += 1;
  Pictures.all[numbers[2]].amountOfShows += 1;
  console.log(numbers, 'showing');
  previouslyShown = numbers;
}


function showList(){
  var ulEl = document.getElementById('thelist');
  for(var i = 0; i < Pictures.all.length; i++){
  //1. create an element
    var liEl = document.createElement('li');
  //2. give it content
    liEl.textContent = Pictures.all[i].name + ' was shown ' + Pictures.all[i].amountOfShows + ' times and was clicked ' + Pictures.all[i].timesClicked + ' times';
  //3. append it to the DOM
    ulEl.appendChild(liEl);
  }
}
function handleClick(e){
  Pictures.totalClicks += 1;
  console.log(Pictures.totalClicks + ' total clicks');
  for(var i = 0; i < Pictures.all.length; i++){
    if(e.target.alt === Pictures.all[i].name){
      //tally a Click
      Pictures.all[i].timesClicked += 1;
    }
  }


  if(Pictures.totalClicks === 25){
    //removed the event listener
    Pictures.container.removeEventListener('click', handleClick);
    //display a list of products and shows/clicks
    showList();
  }

  displayImages();
}

displayImages();

Pictures.container.addEventListener('click', handleClick);

//+++++++++++++++++++++++++++++++++++
// THE Chart
//+++++++++++++++++++++++++++++++++++
var votes = [];
var titles = [];

function updateChartArrays(){
  for(var i = 0; i < Pictures.all.length; i++){
    titles[i] = Pictures.all[i].title;
    votes[i] = Pictures.all[i].votes;
  }
}
function showProducts(){
  var productList = document.getElementById('thelist');
  productList.innerHTML = '';
  productList.hidden = false;
  productList.textContent = 'Click to hide';
  for(var i = o; i < Pictures.all.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = Pictures.all[i].title + ', ' + Pictures.all[i].votes + ' votes';
    productList.appendChild(liEl);
  };
};
function tallyVote(thisPictures){
  for(var i = 0; i < Pictures.all.length; i++){
    if (thisPictures.all === Pictures.all[i].identifier){
      Pictures.all[i].votes++;
      updateChartArrays();
    }
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++
//32 minutes
