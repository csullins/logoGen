class SHAPE {
  constructor(renderString) {
    this.shapeColor = 'black';
    this.text = 'txt';
    this.textColor = 'white';
    this.renderString = renderString

    this.setColor = function (shapeColor) {
      this.shapeColor = shapeColor;
    };
    this.setText = function (text) {
      this.text = text;
    };
    this.setTextColor = function (textColor) {
      this.textColor = textColor;
    };
  }
  render() {
    const logo = 
        `${this.renderString} fill="${this.shapeColor}"/>`;
    return logo;
  }
  
  formatFile() {
    const logo = this.render();
    var generatedLogo = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
   
     ${logo}
     
     <text x="155" y="135" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`

     return(generatedLogo);
  }
};

class SQUARE extends SHAPE {
  constructor() {
    super('<rect x="95" y="55" width="120" height="120"');
  }
}
class CIRCLE extends SHAPE {
  constructor() {
    super('<circle cx="150" cy="115" r="70"');
  }
}
class TRIANGLE extends SHAPE {
  constructor() {
    super('<polygon points="150, 18 244, 182 56, 182"');
  }
}

module.exports = {SQUARE, CIRCLE, TRIANGLE};
