// write your code here
function setBlack(pixel){
    pixel.setBlue(0);
    pixel.setGreen(0);
    pixel.setRed(0);
    return pixel;
}
function pixelOnEdge(pixel,image,borderWidth){
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < borderWidth) return true;
    if (y < borderWidth) return true;
    if (x >= image.getWidth() - borderWidth) return true;
    if (y >= image.getHeight() - borderWidth) return true;
    return false;
}
var image = new SimpleImage ("lion.jpg");

for ( var pixel of image.values()){
    if (pixelOnEdge(pixel,image,10)){
        pixel = setBlack(pixel);
    }
}
print (image);