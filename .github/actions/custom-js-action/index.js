const core = require('@actions/core');

try {
  const name = core.getInput('name');
  console.log(`Whats up , ${name}!`);
} catch (error) {
  core.setFailed(error.message);
}