var game = document.getElementById('game');
var hole = document.getElementById('hole');
var result = document.getElementById('result');
var text = document.getElementById('text')
var jump = 0;
var score = 0; 

hole.addEventListener('animationiteration', holePosition)

function holePosition()
{
  var random = -((Math.random()*350)+150)
  hole.style.top = random + 'px';
  score++;
}

var fall = setInterval(function()
{
  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));

  if(jump == 0)
  {
    bird.style.top = ( birdTop + 2)+'px';
  }

  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

  var holeTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

  var hTop = (500 + holeTop);

  if((birdTop >450) || ((blockLeft < -  50) && ((birdTop < hTop) || birdTop > hTop + 100 )))
  {
    result.style.display = 'block';

    text.innerText = `Your final score is : ${score}`;

    game.style.display = 'none';
  }
}, 10)

window.addEventListener('keydown', hop)
function hop()
{
  jump = 1;
  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'));
  if(birdTop > 6)
  {
    bird.style.top = (birdTop - 60) + 'px';
  }

  setTimeout(function()
 {
  jump = 0;
 }, 100 )
}