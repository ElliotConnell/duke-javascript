// write your code here
function swapRedGreen(simpleImage){
    
    for (var pixel of simpleImage.values()) {
        red = pixel.getRed();
        green = pixel.getGreen();
        
        pixel.setRed(green);
        pixel.setGreen(red);
        
        
    }
    
    return picture;
}   

var picture = new SimpleImage("chapel.png");
var result = swapRedGreen(picture)
print(result)
var picture = new SimpleImage("palm-and-beach.png");
var result = swapRedGreen(picture)
print(result)
var picture = new SimpleImage("drewRobert.png");
var result = swapRedGreen(picture)
print(result)