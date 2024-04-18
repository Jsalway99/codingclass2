class myImage 
{

  constructor(myFilePath, x, y, w, h ) 
  {
    this.myFilePath = myFilePath;
    this.myImageObject = loadImage(this.myFilePath);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

  }
updateX(x)
{
    this.x = x;
}
  draw()
  {
    image(this.myImageObject, this.x, this.y);
  }
}