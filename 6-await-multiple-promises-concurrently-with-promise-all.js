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

(async () => {
  // try is for error catching
  try {
    //	await should be there, because we get a unsettled promise
    const [user, repos] = await Promise.all([
      showGitHubUserUsingAsyncAndAwait("mojombo", "bgCyan"),
      showGitHubUserUsingAsyncAndAwait("mojombo/repos", "bgGreen"),
    ]);
    console.log(chalk.yellow.bold(`Name: ${user.name}`));
    console.log(chalk.yellowBright(`${repos.length} repos!`));
  } catch (err) {
    console.log(chalk.red.bold(err));
  }
})();
