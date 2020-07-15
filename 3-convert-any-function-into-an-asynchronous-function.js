const fetch = require("node-fetch");
const chalk = require("chalk");

class GitHubClient {
  fetchUser = async (handle) => {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  };
}

const github = new GitHubClient();

console.log(chalk.yellow("Before iife"));
(async () => {
  github.fetchUser("defunkt").then((user) => {
    console.log(
      chalk.bgYellowBright.black.bold(
        " Showing git hub user using async class "
      )
    );
    console.log(user);
  });
})();
console.log(chalk.yellow("After iife"));
