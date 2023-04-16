const { SQUARE, CIRCLE, TRIANGLE } = require("./shapes");

test("sets color and shape", () => {
    const shape = new TRIANGLE();

    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
  });
