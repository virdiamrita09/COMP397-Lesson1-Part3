 
var stage: createjs.Stage;
var canvas= document.getElementById("canvas");

function init() {
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop);
    main();
}
function gameLoop() {
    stage.update();
}
function main() {
    console.log("Game is Running");
    var helloText: createjs.Text = new createjs.Text("Hello World", "40 px Consolas", "#000000");
    stage.addChild(helloText);
}
