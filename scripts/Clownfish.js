import Fish from './Fish.js'

class ClownFish extends Fish {
  constructor(x = 100, y = 340, width = 150, height = 90) {
    super(x, y, width, height, 4, 2, "./images/clownfish.png");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

}
export default ClownFish