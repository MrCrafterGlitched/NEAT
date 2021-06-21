var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
mars_array=["mars.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];
random_number=Math.floor(Math.random()*5)
background_image=mars_array[random_number];
rover_image="rover.png";
var rover_x=100;
var rover_y=100;
var rover_width=100;
var rover_height=80;
function Loader(){
bg_img=new Image();
bg_img.onload=upload_bg;
bg_img.src=background_image;
rover_img= new Image()
rover_img.onload= upload_rover;
rover_img.src= rover_image;
 }
 function upload_bg(){
     ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
 }
 function upload_rover() {
     ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height)
 }
 window.addEventListener("keydown",my_keydown)
 function my_keydown(events) {
     keypressed=events.keyCode;
     console.log(keypressed)
     if (keypressed=="37") {
         move_Left()
     }
     if (keypressed=="38") {
        move_Up()
    }
    if (keypressed=="39") {
        move_Right()
    }
    if (keypressed=="40") {
        move_Down()
    }
 }
function move_Left() {
    if (rover_x>=0) {
        rover_x=rover_x-10;
        upload_bg();
        upload_rover();
    }
}
function move_Right() {
    if (rover_x<=900) {
        rover_x=rover_x+10;
        upload_bg();
        upload_rover();
    }
}
function move_Up() {
    if (rover_y>=0) {
        rover_y=rover_y-10;
        upload_bg();
        upload_rover();
    }
}
function move_Down() {
    if (rover_y<=400) {
        rover_y=rover_y+10;
        upload_bg();
        upload_rover();
    }
}