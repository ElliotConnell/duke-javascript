// write your code here
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    

    for (var pixel of someImage.values()) {
        if ((pixel.getY() <= (cornerHeight)) && (pixel.getX() >= (someImage.getWidth() - cornerWidth))){
            pixel.setRed(red);
            pixel.setGreen(green);
            pixel.setBlue(blue);}
        }
        
        return(someImage)
}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);

