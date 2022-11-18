import React, { useEffect, useState } from 'react'
import Fixtures from '../components/Fixtures'
import { FixturesData } from '../types'
import { fetchData } from '../utils/data'

const Home = () => {
  const [fixtureData, setFixtureData] = useState<FixturesData>()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchData('GET', 'fixtures')
      .then((data: any) => {
        setLoaded(true)
        setFixtureData(data.response)
      })
      .catch((err) => console.error(err))
  }, [])

  return <Fixtures loaded={loaded} fixtures={fixtureData} />
}

export default Home
