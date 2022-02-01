class Fish {
  
  constructor(x, y, width, height, dx, dy, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;
    this.img = new Image();
    this.img.src = image;

  }

  swim(width) {
    if (this.x > width - this.width || this.x < 0) {
      this.dx = -this.dx
      // this.flip();
    } 
    this.x += this.dx;

    // let zoom = this.dx;
    // for(let i = 0; i < 3; i += 1) {
    //   this.x += zoom;
    // }
    // for(let i = 0; i < 2; i += 1) {
    //   this.x += zoom;
    //   zoom = .02;
    // }
  }

  // flip() {
  //   // this.moveTo(this.x-img.width, this.y);
  //   // flipHorizontally(img,150,30);
  //   if(right)
  //     img.src = imgL;
  //   else
  //     img.src = img;
      
  // }

  // moveTo(x, y) {
  //   this.x = x
  //   this.y = y
  // }

  render(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }


}

export default Fish
