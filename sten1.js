// write your code here
var image = new SimpleImage(1,1); //create an image of one balck pixel
var pix = image.getPixel(0,0); //gets the only pixel in the image
pix.setRed(170); //sets its red value at 170
print(image) //see that the pixel is now 1 red pixel
var r = pix.getRed();
print(r); //prints out the red value of pix, see that it is 170
r = Math.floor(r/16)*16 //divide and multiply by 16
print(r) //see that it is now 160