let leftMost;
let currentVertex;
let index=0;
let startt=0;
let nextVertex;
let nextIndex=-1;
const points=[];
const hull=[];
function mouseClicked(){
  if(mouseX<=400 && mouseY<=400)
  {
  stroke(255)
    point(mouseX, mouseY);
    let p=createVector(mouseX,mouseY);
   points.push(p);}
 // console.log(mouseX,mouseY);
}
function setup() {
createCanvas(400, 400);
    background(0);
  strokeWeight(5);
 button = createButton('run');
  button.position(410,410, 100);
  button.mousePressed(runn);
}
function runn() {
  // console.log(points[1],points[2],points[3]);
  //points.pop();
    points.sort((a,b) => a.x-b.x);
    leftMost=points[0]; 
  currentVertex=leftMost;
  hull.push(currentVertex);
   nextVertex=points[1];
  index=2;
   startt=1
}

function draw() {
  if(startt==1)
  {   background(0);  
   stroke(255)
   strokeWeight(5)
   for(let p of points)
   { point(p.x,p.y);
   }
   
   stroke(0,0,255)
   fill(0,0,255,50);
   beginShape();
   for(let p of hull)
   { vertex(p.x,p.y);
   }
   endShape(CLOSE);
   
    stroke(0,255,0);
     strokeWeight(12);
    point(leftMost.x,leftMost.y);
  stroke(200,2,255);
     strokeWeight(12);
    point(currentVertex.x,currentVertex.y);
     strokeWeight(2);
    stroke(0,255,0);
  line(currentVertex.x,currentVertex.y,nextVertex.x,nextVertex.y);
  
  let checking =points[index];
  stroke(255);
  line(currentVertex.x,currentVertex.y,checking.x,checking.y);
  const a= p5.Vector.sub(nextVertex,currentVertex);
  const b= p5.Vector.sub(checking,currentVertex);
  const cross=a.cross(b);
  if(cross.z<0){
    nextVertex=checking;
    nextIndex=index;
  }
  index=index+1;
   if(index == points.length){
     if(nextVertex == leftMost)
     {
       console.log("done");
  background(0);  
   stroke(255)
   strokeWeight(5)
   for(let p of points)
   { point(p.x,p.y);
   }
   
   stroke(0,0,255)
   fill(0,0,255,50);
       beginShape();
   for(let p of hull)
   { vertex(p.x,p.y);
   }
   endShape(CLOSE);
   
       noLoop();
     }else
     {
     hull.push(nextVertex);
     currentVertex=nextVertex;
     index=0;
     //points.splice(nextIndex,1);
     nextVertex=leftMost;
     //noLoop();
     }
   }
  }
}