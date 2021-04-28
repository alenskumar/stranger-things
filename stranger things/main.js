var canvas = new fabric.Canvas('myCanvas');

aura_image_width = 30;
aura_image_height = 30;


eleven_x = 10;
eleven_y = 10;

function eleven_update()
{
    fabric.Image.fromURL("eleven.png", function(Img){
        eleven_object = Img;

        eleven_object.scaleToWidth(150);
        eleven_object.scaleToHeight(140);
        eleven_object.set({
            top:eleven_y,
            left:eleven_x
        });
        canvas.add(player_object);
    });

}



