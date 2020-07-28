const fetch = require("node-fetch");
const chalk = require("chalk");

const showGitHubUserUsingAsyncAndAwait = async (handle, color) => {
  console.log(
    chalk[color](` Inside showGithubUserUsingAsyncAndAwait (${handle}) `)
  );
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
  const color = "bgBlue";
  console.time("sequential");
  const user = await showGitHubUserUsingAsyncAndAwait("mojombo", color);
  const repos = await showGitHubUserUsingAsyncAndAwait("mojombo/repos", color);
  console.timeEnd("sequential");

  console.log(chalk.yellow.bold(`Name: ${user.name}`));
  console.log(chalk.yellow.bold(`Location: ${user.followers}`));
  console.log(chalk.yellowBright(`${repos.length} repos!`));
})();

// Parallel
(async () => {
  const color = "bgGreen";
  console.time("parallel");
  const userPromise = showGitHubUserUsingAsyncAndAwait("defunkt", color);
  const reposPromise = showGitHubUserUsingAsyncAndAwait("defunkt/repos", color);
  console.timeEnd("parallel");

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(chalk.yellow.bold(`Name: ${user.name}`));
  console.log(chalk.yellow.bold(`Location: ${user.bio}`));
  console.log(chalk.yellowBright(`${repos.length} repos!`));
})();
