class animationImage {
    
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.currentAnimation;
        this.createAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        this.direction = "";


    }

    get() {
        return this.x;
        }

        setX(x) {
            this.x = x;
        }

        setCurrentFrameCount(currentFrameCount) {
            
            this.currentFrameCount = currentFrameCount;
        }

        createAnimation(){
            this.currentAnimation = createSprite(300,250);
        }
        loadAnimation(animationType, fileNames) {
            this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length-1])
        }

        drawAnimation(animationType)
        {
            this.currentAnimation.frameDelay = 5;
            this.createAnimation.changeAnimation(animationType);
        }
    

}