import axios from 'axios'

const getRepos = (userName) => {
  const request = axios.get(`https://api.github.com/users/${userName}/repos`)
  return request.then((response) => response.data);
}

const getCommits = (userName, repoName) => {
  const request = axios.get(`https://api.github.com/${userName}/${repoName}/commits`)
  return request.then((response) => response.data);
}

export default {getRepos}
