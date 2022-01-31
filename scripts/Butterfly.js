import Fish from './Fish.js'

class Butterfly extends Fish {
  constructor(x = 500, y = 40, width = 150, height = 120) {
    super(x, y, width, height, 3, 2, "./images/butterfly.png");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

}
export default Butterfly