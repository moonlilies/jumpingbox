var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(0,580,360,30);
    surface1.shapeColor = "red";

    surface2 = createSprite(295,580,200,30);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = "blue";

    surface4 = createSprite(740,580,220,30);
    surface3.shapeColor = "purple";

    //create box sprite and give velocity

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";

    ball.velocityX = 5;
    ball.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(ball) && ball.bounceOff(surface1))
    {
    ball.shapeColor = rgb(0,0,255);
    music.play();
    }
    
    if(surface2.isTouching(ball))
    {
    ball.shapeColor = rgb(255,128,0);
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
    }

    if(surface3.isTouching(ball) && ball.bounceOff(surface3))
    {
    ball.shapeColor = rgb(153,0,76);
    }

    if(surface4.isTouching(ball) && ball.bounceOff(surface4))
    {
        ball.shapeColor = rgb(0,100,0);
    }

    drawSprites();
    }