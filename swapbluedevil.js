function swapBlueDevil(simpleImage){
    
    for (var pixel of simpleImage.values()) {
        if ((pixel.getRed() != 255) && (pixel.getGreen() != 255) && (pixel.getBlue() != 255)) {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
        
        
    }
    
    return picture;
}   

var picture = new SimpleImage("duke_blue_devil.png");
var result = swapBlueDevil(picture)
print(result)