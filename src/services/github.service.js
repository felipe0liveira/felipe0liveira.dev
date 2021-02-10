const getRepositories = async () => {
  const response = await fetch(
    'https://api.github.com/users/felipe0liveira/repos'
  )
  let repositories = await response.json()

  repositories = repositories.map((item, index) => ({
    id: index,
    name: item.name,
    description: item.description,
    url: item.html_url,
    lastUpdate: item.updated_at,
    size: item.size,
  }))

  return repositories
}

export default { getRepositories }
