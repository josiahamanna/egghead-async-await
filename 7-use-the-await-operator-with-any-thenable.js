const chalk = require("chalk");
const Bluebird = require("bluebird");
async function delayed() {
  // you can either use try catch or only catch it from caller
  // your choice
  const xValue = await Promise.reject(24);
  console.log(xValue);
}

async function bluebirdDelayed() {
  console.log(chalk.bgWhite.blue.bold("Working ..."));
  const xValue = await Bluebird.delay(2000);
  console.log(chalk.bgBlue.bold("Done."), xValue);
}

delayed().catch((err) => console.log(err));
bluebirdDelayed();
