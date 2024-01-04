export interface QueryStringParams {
  [key: string]: string
}

export function getQueryString(url: string): QueryStringParams {
  if (!url) return {}
  const queryString = {} as QueryStringParams

  const query = url.split("?")[1]
  if (!query) {
    return queryString
  }

  // Remove fragment
  const fragmentStart = query.indexOf("#")
  let queryPart = query
  if (fragmentStart !== -1) {
    queryPart = query.slice(0, fragmentStart)
  }

  // Split into key-value pairs
  const pairs = queryPart.split("&")

  pairs.forEach((pair) => {
    const keyValue = pair.split("=")
    const key = decodeURIComponent(keyValue[0])
    let value = keyValue[1] && decodeURIComponent(keyValue[1])

    if (key) {
      queryString[key] = value
    }
  })

  return queryString
}
