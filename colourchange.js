// write your code here
function alterPicture(simpleImage){
    var width = picture.getWidth();
    var segment1 = width / 3;
    var segment2 = segment1 * 2;
    
    for (var pixel of simpleImage.values()) {
        if (pixel.getX() <= segment1) {
            pixel.setRed(255)
        }
        if ((pixel.getX() > segment1) && (pixel.getX() < segment2)){
            pixel.setGreen(255)
        }
        if (pixel.getX() >= segment2) {
            pixel.setBlue(255)
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
