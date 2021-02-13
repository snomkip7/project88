canvas = new fabric.Canvas('myCanvas');
ctx = canvas.getContext("2d");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "";

//super hero
var superhero_select = "not_chose";

function player_update(){
    fabric.Image.fromURL("spiderman.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //height and width
    if (e.shiftKey == true && keyPressed == '38'){
        console.log("shift and up pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keyPressed == '40'){
        console.log("shift and down pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    //base figure
    if(keyPressed == '72'){
        console.log("hand_left");
        if(superhero_select == "spiderman"){
            new_image('spiderman_left_hand.png');
        }
        if(superhero_select == "hulk"){
            new_image('hulk_left_hand.png');
        }
        if(superhero_select == "ironman"){
            new_image('ironman_left_hand.png');
        }
        if(superhero_select == "thor"){
            new_image('thor_left_hand.png');
        }
        
    }
    if(keyPressed == '70'  && e.shiftKey == false){
        console.log("face" );
        if(superhero_select == "spiderman"){
            new_image('spiderman_face.png');
        }
        if(superhero_select == "hulk"){
            new_image('hulk_face.png');
        }
        if(superhero_select == "ironman"){
            new_image('ironman_face.png');
        }
        if(superhero_select == "thor"){
            new_image('thor_face.png');
        }
        
    }
    if(keyPressed == '76'  && e.shiftKey == false){
        console.log("legs");
        if(superhero_select == "spiderman"){
            new_image('spiderman_legs.png');
        }
        if(superhero_select == "hulk"){
            new_image('hulk_legs.png');
        }
        if(superhero_select == "ironman"){
            new_image('ironman_legs.png');
        }
        if(superhero_select == "thor"){
            new_image('hulk_legs.png');
        }
        
    }
    if(keyPressed == '82' && e.shiftKey == false){
        console.log("right_hand");
        if(superhero_select == "spiderman"){
            new_image('spiderman_right_hand.png');
        }
        if(superhero_select == "hulk"){
            new_image('hulk_right_hand.png');
        }
        if(superhero_select == "ironman"){
            new_image('ironman_right_hand.png');
        }
        if(superhero_select == "thor"){
            new_image('thor_right_hand.png');
        }
        
    }
    if(keyPressed == '66' && e.shiftKey == false){
        console.log("b");
        if(superhero_select == "spiderman"){
            new_image('spiderman_body.png');
        }
        if(superhero_select == "hulk"){
            new_image('hulkd_body.png');
        }
        if(superhero_select == "ironman"){
            new_image('ironman_body.png');
        }
        if(superhero_select == "thor"){
            new_image('spiderman_body.png');
        }
    }

    //up donw left right
    if(keyPressed == '38' && e.shiftKey == false){
        console.log("up");
        up();
    }
    if(keyPressed == '40' && e.shiftKey == false){
        console.log("down");
        down();
    }
    if(keyPressed == '37' && e.shiftKey == false){
        console.log("left");
        left();
    }
    if(keyPressed == '39' && e.shiftKey == false){
        console.log("right");
        right();
    }
    
}


//up down left right
function up(){
    if (player_y >= 0){
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
   if (player_y <= 450){
       player_y = player_y + block_image_height;
       canvas.remove(player_object);
       player_update();
   }
}
function left(){
   if (player_x >= 0){
       player_x = player_x - block_image_height;
       canvas.remove(player_object);
       player_update();
   }
}
function right(){
   if (player_x <= 860){
       player_x = player_x + block_image_height;
       canvas.remove(player_object);
       player_update();
   }
}

function cleararea(){
    canvas.remove(block_image_object);
    console.log("cleared");
}
//picking superhero
function spiderman(){
    superhero_select = "spiderman";
}
function hulk(){
    superhero_select = "hulk";
}
function ironman(){
    superhero_select = "ironman";
}
function thor(){
    superhero_select = "thor";
}