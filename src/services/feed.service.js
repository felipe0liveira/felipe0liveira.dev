const getFeed = async () => {
  const request = await fetch(
    'https://dev.to/api/articles?username=felipe0liveira'
  )
  const response = await request.json()

  const postsDevTo = response.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.url,
    category: item.tags,
    image: item.cover_image,
  }))

  return postsDevTo
}

export default { getFeed }
