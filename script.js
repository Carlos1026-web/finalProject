//Derek Carlos - Final Project

var imgDraw = document.getElementById("drawingImage");
var imgGame = document.getElementById("gameImage");
var imgNumDraw = 1;
var imgNumGame = 1;

//Buttons to go back and forth drawings
let frwdBtnDraw = document.getElementById("forwardButtonDraw");
let backBtnDraw = document.getElementById("backButtonDraw");

//Buttons to go back and forth games
let frwdBtnGame = document.getElementById("forwardButtonGame");
let backBtnGame = document.getElementById("backButtonGame");

backBtnDraw.onclick = getPreviousDrawing;
frwdBtnDraw.onclick = getNextDrawing;

frwdBtnGame.onclick = getNextGame;
backBtnGame.onclick = getPreviousGame;

//go to next image, if at final image, set image to first image
function getNextDrawing() {
    imgNumDraw++;
    imgDraw.src="draw"+ imgNumDraw +".jpg"
    if(imgNumDraw == 4) {
        imgNumDraw = 0;
    }
}

//go to previous image, if at first image, set image to final image
function getPreviousDrawing() {
    if(imgNumDraw <= 1) {
        imgNumDraw = 4;
    }
    else {
        imgNumDraw--;
    }
    imgDraw.src="draw"+ imgNumDraw +".jpg"
}

//go to next image, if at final image, set image to first image
function getNextGame() {
    imgNumGame++;
    imgGame.src="game"+ imgNumGame +".png"
    if(imgNumGame == 3) {
        imgNumGame = 0;
    }
}

//go to previous image, if at first image, set image to final image
function getPreviousGame() {
    if(imgNumGame <= 1) {
        imgNumGame = 3;
    }
    else {
        imgNumGame--;
    }
    imgGame.src="game"+ imgNumGame +".png"
}