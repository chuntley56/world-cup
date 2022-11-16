import { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
import data from '../../data/mock/response.json'
import styles from './styles.module.css'
import fetch, { RequestInit } from 'node-fetch'
import { FixturesData } from '../../types'

const Fixtures: FunctionComponent = () => {
  const [fixtureData, setFixtureData] = useState<FixturesData>()
  const [loaded, setLoaded] = useState(false)

  const options: RequestInit = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY ?? '',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
  }

  useEffect(() => {
    fetch(
      'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2022',
      options
    )
      .then((res) => res.json())
      .then((data: any) => {
        setLoaded(true)
        setFixtureData(data)
      })
      .catch((err) => console.error(err))
  }, [])
  // const fixtureData = data

  //const dates = fixtureList.response.map((match) => match.fixture.date.slice(0, match.fixture.date.indexOf('T')))

  return !loaded ? (
    <p>loading...</p>
  ) : (
    // return (
    <div className={styles.fixtureContainer}>
      <h1>Fixtures</h1>
      {fixtureData &&
        fixtureData.response.map((item, index) => {
          const {
            fixture,
            teams: { home, away },
          } = item
          const time = fixture.date.slice(
            fixture.date.indexOf('T') + 1,
            fixture.date.indexOf('+') - 3
          )
          return (
            <div key={index} className={styles.fixtureRow}>
              <div className={`${styles.fixtureTeam} ${styles.flexEnd}`}>
                <div>{away.name}</div>
                <Image
                  alt={away.name}
                  src={away.logo}
                  width="50"
                  height="29"
                  className={styles.fixtureLogo}
                />
              </div>
              <div className={styles.fixtureTime}>{time}</div>
              <div className={`${styles.fixtureTeam} ${styles.flexStart}`}>
                <Image
                  alt={home.name}
                  src={home.logo}
                  width="50"
                  height="29"
                  className={styles.fixtureLogo}
                />
                <div>{home.name}</div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Fixtures
