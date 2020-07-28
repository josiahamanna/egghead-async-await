const fetch = require("node-fetch");
const chalk = require("chalk");

const showGitHubUserUsingAsyncAndAwait = async (handle) => {
  console.log(chalk.bgRed(" Inside showGithubUserUsingAsyncAndAwait "));
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status != 200) {
    throw Error(body.message);
  } else {
    return body;
  }
};

// Sequential
(async () => {
  console.time("sequential");
  const user = await showGitHubUserUsingAsyncAndAwait("defunkt");
  const repos = await showGitHubUserUsingAsyncAndAwait("defunkt/repos");
  console.timeEnd("sequential");

  console.log(chalk.yellow.bold(`Name: ${user.name}`));
  console.log(chalk.yellow.bold(`Location: ${user.bio}`));
  console.log(chalk.yellowBright(`${repos.length} repos!`));
})();

// Parallel
(async () => {
  console.time("parallel");
  const userPromise = showGitHubUserUsingAsyncAndAwait("defunkt");
  const reposPromise = showGitHubUserUsingAsyncAndAwait("defunkt/repos");
  console.timeEnd("parallel");

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(chalk.yellow.bold(`Name: ${user.name}`));
  console.log(chalk.yellow.bold(`Location: ${user.bio}`));
  console.log(chalk.yellowBright(`${repos.length} repos!`));
})();
