import Fish from './Fish.js'

class BlueTang extends Fish {
  constructor(x = 0, y = 200, width = 150, height = 90) {
    super(x, y, width, height, 2, .2, "./images/tang.png");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

}
export default BlueTang