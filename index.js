const inquirer = require("inquirer");
const fs = require("fs");

const genLogo = ({ shape, color, text }) =>
  inquirer
    .prompt([
      {
        type: "list",
        name: "shape",
        message: "Welcome to Logo Creator! What shape would you like your logo to be?",
        choices: ['circle', 'rectangle', 'square']
      },
      {
        type: "list",
        name: "color",
        message: `Awesome! What color would you like that ${shape} to be?`,
        choices: ['black', 'yellow', 'blue', 'orange', 'magenta']
      },
      {
        type: "input",
        name: "text",
        message: `Excellent choices. One more thing, what text do you want inside the ${color} ${shape}?`,
      },
    ])
    .then((data) => {
      logoSpecs = genLogo(data);

      fs.writeFile("logo.svg", logoSpecs, (err) =>
        err
          ? console.log(err)
          : console.log(
              "Woohoo! Your logo is ready. Open up logo.svg to check it out."
            )
      );
    });
