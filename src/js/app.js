import 'pixi.js';
import WebFont from 'webfontloader';
import Ball from './ball';

WebFont.load({
  google: {
    families: ['Francois One']
  },
  active: function() {
    init();
  }
});

function drawletter(text, coords, color, balls, containers, power, layer, layers) {

  let temp = new PIXI.Container();

  let letter = new PIXI.Text(text, {
    fontFamily : 'Francois One', 
    fontSize: 54, 
    fill : color, 
    align : 'center'
  });
  
  letter.position.x = coords.x;
  letter.position.y = coords.y;
  temp.addChild(letter);
  layers[layer].addChild(temp);

  balls.push(
    new Ball(coords.x + coords.width/2, coords.y + coords.height/2)
  );

  containers.push(temp);
}

let app = new PIXI.Application({transparent: true});
document.body.appendChild(app.view);

let container = new PIXI.Container();

app.stage.addChild(container);

function init() {
  let count = 0;
  let elsArray = document.querySelectorAll('.letter');
  let balls = [];
  let letters = [];
  let layers = new Array(4).fill().map(x => new PIXI.Container());

  layers.forEach(l => {
    container.addChild(l);
  });
  layers[3].blendMode = 2;

  elsArray.forEach(l => {

    let coord = l.getBoundingClientRect();

    drawletter(l.innerText, coord, 0x03aaea, balls, letters, 0.1, 0, layers);
    drawletter(l.innerText, coord, 0xf9ed00, balls, letters, 0.1, 1, layers);
    drawletter(l.innerText, coord, 0xe80289, balls, letters, 0.1, 2, layers);
    drawletter(l.innerText, coord, 0x03aaea, balls, letters, 0.1, 3, layers);

  });

  app.ticker.add(function() {
    count++;

    let mousePosition = app.renderer.plugins.interaction.mouse.global;

    balls.forEach((ball, i) => {
      ball.think(mousePosition);

      letters[i].position.x = ball.diffX;
      letters[i].position.y = ball.diffY;
    });
  });
}
