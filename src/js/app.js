import 'pixi.js';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif']
  },
  active: function() {
    init();
  }
});

let app = new PIXI.Application({transparent: true});
document.body.appendChild(app.view);

let container = new PIXI.Container();

app.stage.addChild(container);

function init() {
  let count = 0;

  let text1 = new PIXI.Text('This is a PixiJS text',{
    fontFamily : 'Droid Sans', 
    fontSize: 54, 
    fill : 0x000000, 
    align : 'center'
  });

  text1.position.set(0);
  container.addChild(text1);

  let text2 = new PIXI.Text('This is a PixiJS text',{
    fontFamily : 'Droid Sans', 
    fontSize: 54, 
    fill : 0xf9ed00, 
    align : 'center'
  });

  text2.position.set(10);
  container.addChild(text2);

  let text3 = new PIXI.Text('This is a PixiJS text',{
    fontFamily : 'Droid Sans', 
    fontSize: 54, 
    fill : 0x03aaea, 
    align : 'center'
  });

  text3.position.set(20);
  container.addChild(text3);

  app.ticker.add(function() {
    count++;
  });
}
