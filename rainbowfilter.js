// write your code here
function alterPicture(simpleImage){

    
    for (var pixel of simpleImage.values()) {
        var height = simpleImage.getHeight();
        var segment = height/7;
        var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
        var yValue = pixel.getY()
        
        // set top segment to red
        if (yValue < segment){
            if (avg < 128) {
                pixel.setRed(2*avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            }
            else {
                pixel.setRed(255);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(2*avg-255);
            }
        }
        // set second segment to orange
        if ((yValue >= segment) && (yValue < segment*2)) {
            if (avg < 128) {
                pixel.setRed(2*avg);
                pixel.setGreen(0.8*avg);
                pixel.setBlue(0);
            }
            else {
                pixel.setRed(255);
                pixel.setGreen(1.2*avg - 51);
                pixel.setBlue(2*avg-255);
            }
        }
        // set third segment to yellow
        if ((yValue >= segment*2) && (yValue < segment*3)) {
            if (avg < 128) {
                pixel.setRed(2*avg);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
            }
            else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2*avg-255);
            }
        }

        // set fourth segment to green
        if ((yValue >= segment*3) && (yValue < segment*4)) {
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(2*avg);
                pixel.setBlue(0);
            }
            else {
                pixel.setRed(2*avg-255);
                pixel.setGreen(255);
                pixel.setBlue(2*avg-255);
            }
        }
        // set fifth segment to blue
        if ((yValue >= segment*4) && (yValue < segment*5)) {
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
            }
            else {
                pixel.setRed(2*avg-255);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(255);
            }
        }
        // set sixth segment to indigo
        if ((yValue >= segment*5) && (yValue < segment*6)) {
            if (avg < 128) {
                pixel.setRed(0.8*avg);
                pixel.setGreen(0);
                pixel.setBlue(2*avg);
            }
            else {
                pixel.setRed(1.2*avg-51);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(255);
            }
        }
        // set seventh segment to violet
        if (yValue >= segment*6) {
            if (avg < 128) {
                pixel.setRed(1.6*avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6*avg);
            }
            else {
                pixel.setRed(0.4*avg+153);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(0.4*avg+153);
            }
        }
        
    }

    
    return picture;
}   

var picture = new SimpleImage("chapel.png");
var result = alterPicture(picture)
print(result)
var picture = new SimpleImage("palm-and-beach.png");
var result = alterPicture(picture)
print(result)
