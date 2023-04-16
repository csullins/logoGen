const inquirer = require("inquirer");
const fs = require("fs");

const { SQUARE, CIRCLE, TRIANGLE } = require("./shapes");

class CLI {
  constructor() {
    this.title = "";

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "shape",
          message:
            "Welcome to Logo Creator! What shape would you like your logo to be?",
          choices: ["circle", "triangle", "square"],
        },
        {
          type: "input",
          name: "color",
          message: `Awesome! What color would you like that to be?`,
        },
        {
          type: "input",
          name: "text",
          message: `Excellent choices. What text do you want inside the logo? Enter up to 3 letters.`,
        },
        {
          type: "input",
          name: "textColor",
          message: `One last thing, what color should the text display in.`,
        },
      ])
      .then((data) => {
        console.log(data);
        var shape
        switch (data.shape) {
          case "triangle":
            shape = new TRIANGLE();
            break;
          case "square":
            shape = new SQUARE();
            break;
          case "circle":
            shape = new CIRCLE();
            break;
          default:
            shape = SQUARE();
        };

        shape.setColor(data.color);
        shape.setText(data.text);
        shape.setTextColor(data.textColor);

        fs.writeFile("logo.svg", shape.formatFile(), (err) =>
          err ? console.log(err) : console.log("Generated logo.svg")
        );
      });
  }
}

module.exports = CLI;
