type FetchDataType = <T>(method: string, path: string) => Promise<any>

export const fetchData: FetchDataType = (method, path) => {
  const options: {
    headers: {
      'X-RapidAPI-Key': string
      'X-RapidAPI-Host': string
    }
    method: string
  } = {
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY ?? '',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
    method: method,
  }

  return fetch(
    `https://api-football-v1.p.rapidapi.com/v3/${path}?league=1&season=2022`,
    options
  ).then((res) => res.json())
}
