import axios from 'axios'

const baseUrl = 'https://api.github.com'

const getRepos = (userName) => {
  const request = axios.get(`${baseUrl}/users/${userName}/repos`)
  return request.then((response) => response.data)
}

const getCommits = (userName, repoName) => {
  const request = axios.get(`${baseUrl}/repos/${userName}/${repoName}/commits`)
  return request.then((response) => response.data)
}

const getUser = (userName) => {
  const request = axios.get(`${baseUrl}/users/${userName}`)
  return request.then((response) => response.data)
}

export default {getRepos, getCommits, getUser}
