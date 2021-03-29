let img;

function setup(){
  createCanvas(669,446);
  img = loadImage("Paris.jpg");
  img.resize(669,446);
}

function draw(){
  background(255);
  
  fill(0);               
  noStroke();
  
  let tiles = mouseX/10;
  let tileSize = width/tiles;
  
  translate(tileSize/2,tileSize/2);
  
  for(let x = 0; x< tiles; x++){
    for(let y = 0; y< tiles; y++){
     
      let c = img.get(int(x*tileSize), int(y*tileSize));
      let d = red(c);
      let e = green(c);
      let f = blue(c);
      let g = map(brightness(c),0,255,255,0);
      let size = map(brightness(c),0,255,10,0);
      fill(d,e,f,g)
      ellipse(x*tileSize, y*tileSize ,size,size);
    }
  }
}