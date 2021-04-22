// write your code here
function clearbits(colorval){
    //compute the same color value with the low bits zeroed
    var x = Math.floor(colorval/16) * 16;
    return x;
}

function chop2hide(image){
    //for each pixel in the image
    for (var px of image.values()) {
        //clear the low bits of the red
        px.setRed(clearbits(px.getRed()));
        //clear the low bits of the green
        px.setGreen(clearbits(px.getGreen()));
        //clear theh low bits of the blue
        px.setBlue(clearbits(px.getBlue()));
    }
    //after doind each pixel return the image as the answer
    return image;
}

function shift(image) {
    //for each pixel in the image
    for (var px of image.values()) {
        //shift the red bits over
        px.setRed(px.getRed()/16);
        //shift the green bits over
        px.setGreen(px.getGreen()/16);
        //shift the green bits over
        px.setBlue(px.getBlue()/16);
    }
    // after doing each pixel return the image as the answer
    return image;
}

function crop(image, width, height) {
    // create new image
    var img = new SimpleImage(width, height);
    //for each pixel of image
    for (var px of image.values()){
        var x = px.getX();
        var y = px.getY();
        //if x of pixel is equal to or less than width, set pixel
        //if y of pixel is equal to or less than height, set pixel
        if ((x < width) && (y < height)){
            img.setPixel(x, y, px);
        }
    }
    return img;

}

function combine(imageA, imageB){
    // make a new image the same size as "show" (call it answer)
    var answer = new SimpleImage (imageA.getWidth(), imageA.getHeight());
    //for each pixel in answer
    for (var px of answer.values()) {
        // get the x and y of that pixel
        var x = px.getX();
        var y = px.getY();
        //get the pixel in the same place from imageA
        var aPixel = imageA.getPixel(x, y);
        //get the pixel in the same place from imageB
        var bPixel = imageB.getPixel(x, y);
        // set the red of the px to the sum of aPixels red and bPixels red
        px.setRed(aPixel.getRed() + bPixel.getRed());
        // set the green of the px to the sum aPixel green to bPixel green
        px.setGreen(aPixel.getGreen() + bPixel.getGreen());
        // set the blue of the px to the sum aPixel blue to bPixel blue
        px.setBlue(aPixel.getBlue() + bPixel.getBlue);
    }
    // after doin each pixel, return answer of the image we called answer;
    return answer;
}

var imageA = new SimpleImage("lion.jpg")
var imageB = new SimpleImage("nyc-skyline.jpg")


imageA = (crop(imageA, 600, 300));
imageB = (crop(imageB, 600, 300));
imageA = chop2hide(imageA);
imageB = shift(imageB);
var ans = combine(imageA, imageB);
print(ans);

