function hasProjectChanged(currentProject, lastDeployedCommit, latestCommit) {
  const execSync = require('child_process').execSync;
  const getAffected = `npm run nx print-affected --base=${lastDeployedCommit} --head=${latestCommit}`;
  const output = execSync(getAffected).toString();
  //get the list of changed projects from the output
  const sanitizedOutput = output
  .replace(/\r?\n|\r/g, '')
  .replace('> frontends@0.0.0 nx> nx print-affected', '')
  const changedProjects = JSON.parse(sanitizedOutput).projects;
  
  if (changedProjects.find(project => project === currentProject)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  onPreBuild: ({ utils }) => {
    const currentProject = process.env.PROJECT_NAME;
    const lastDeployedCommit = process.env.CACHED_COMMIT_REF;
    const latestCommit = 'HEAD';
    const projectHasChanged = hasProjectChanged(
      currentProject,
      lastDeployedCommit,
      latestCommit
    );
    if (!projectHasChanged) {
      utils.build.cancelBuild(
        `Build was cancelled because ${currentProject} was not affected by the latest changes`
      );
    }
  }
};