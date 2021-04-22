// write your code here
// start with forground image one
var fgImage = new SimpleImage("drewRobert.png");
// and with the background image you want
var bgImage = new SimpleImage("dinos.png");
// make a blank image of the same size (output)
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight())
// for each pixel (currentPixel) fgImage
for (var pixel of fgImage.values()) {
//  look at currentPixel and if green, 
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        // look at same position inbgImage
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        // and set outputs corresponding pixel to bgImages pixel
        output.setPixel(x, y, bgPixel);
    }
//  otherwise: set outputs corresponding pixel
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }

}

print(output);