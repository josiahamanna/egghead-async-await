// Using promises
const chalk = require("chalk");
const fetch = require("node-fetch");

const showGitHubUserUsingPromise = (handle) => {
  console.log(
    chalk.bgRedBright.white.bold(" Showing git hub user using promise ")
  );
  const url = `https://api.github.com/users/${handle}`;
  fetch(url)
    .then((response) => response.json())
    .then((user) => {
      console.table(user);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(chalk.red("promise completed"));
};

// using async await
const showGitHubUserUsingAsyncAndAwait = async (handle) => {
  console.log(
    chalk.bgRedBright.white.bold(" Showing git hub user using async and await ")
  );
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.table(user);
  console.log(chalk.red("async await completed"));
};

showGitHubUserUsingPromise("mojombo");

showGitHubUserUsingAsyncAndAwait("defunkt");
