const fetch = require("node-fetch");
const chalk = require("chalk");

const showGitHubUserUsingAsyncAndAwait = async (handle) => {
  console.log(chalk.bgRed(" inside showGitHubUserUsingAsyncAndAwait "));
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status != 200) {
    throw Error(body.message);
  } else {
    return body;
  }
};

showGitHubUserUsingAsyncAndAwait("idonotexist")
  .then((user) => {
    console.log(chalk.bgCyan(" user "));
    console.log(user.name);
    console.log(user.location);
  })
  .catch((error) => console.error(`Error ${error}`));
