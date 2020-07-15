const fetch = require("node-fetch");
const chalk = require("chalk");

const showGitHubUserUsingAsyncAndAwait = async (handle) => {
  console.log(
    chalk.bgRedBright.white.bold(" Showing git hub user using async and await ")
  );
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  // return the resolved state of promise
  return await response.json();
};

showGitHubUserUsingAsyncAndAwait("defunkt").then((user) => {
  console.table(user);
});
