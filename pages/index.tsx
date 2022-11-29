import React, { useEffect, useState } from 'react'
import Fixtures from '../components/Fixtures'
import { FixturesData } from '../types'
import { fetchData } from '../utils/data'
import Dates from '../components/Dates'

const Home = () => {
  const [fixtureData, setFixtureData] = useState<FixturesData>()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchData('GET', 'fixtures')
      .then((data: any) => {
        setLoaded(true)
        setFixtureData(data.response)
        console.log('data fetched')
      })
      .catch((err) => console.error(err))
  }, [])

  const dates = fixtureData?.map((match) =>
    match.fixture.date.slice(0, match.fixture.date.indexOf('T'))
  )

  return (
    <>
      <Dates dates={dates} />
      <Fixtures loaded={loaded} fixtures={fixtureData} />
    </>
  )
}

export default Home
