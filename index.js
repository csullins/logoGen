const inquirer = require("inquirer");
const fs = require("fs");

const genLogo = ({ shape, color, text, textColor }) =>
  inquirer
    .prompt([
      {
        type: "list",
        name: "shape",
        message: "Welcome to Logo Creator! What shape would you like your logo to be?",
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: "input",
        name: "color",
        message: `Awesome! What color would you like that ${shape} to be?`,
      },
      {
        type: "input",
        name: "text",
        message: `Excellent choices. What text do you want inside the ${color} ${shape}? Enter up to 3 letters.`,
      },
      {
        type: 'input',
        name: 'textColor',
        message: `One last thing, what color should ${text} display in.`
      }
    ])
    .then((data) => {
      logoSpecs = genLogo(data);

      fs.writeFile("logo.svg", logoSpecs, (err) =>
        err
          ? console.log(err) : console.log(
              "Woohoo! Your logo is ready. Open up logo.svg in your browser to check it out."
            )
      );
    });