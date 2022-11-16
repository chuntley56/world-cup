import { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
//import data from '../data/mock/response.json'
import styles from '../styles/Fixtures.module.css'

const Fixtures: FunctionComponent<> = () => {
    const [fixtureList, setFixtureList] = useState()
    const [loaded, setLoaded] = useState(false)

    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    }

  useEffect(() => {
    fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=1&season=2022', options)
      .then((res) => res.json())
      .then((data) => {
        setLoaded(true)
        setFixtureList(data)
      })
    .catch(err => console.error(err))
  }, [])
  
//const dates = fixtureList.response.map((match) => match.fixture.date.slice(0, match.fixture.date.indexOf('T'))) 

  return !loaded ? (
    <p>loading...</p>
  ) : (
 <div className={styles.fixtureContainer}>
  <h1>Fixtures</h1>
      {fixtureList.response.map((item, index) => {
        const {fixture, teams: {home, away} } = item
        const time = fixture.date.slice(fixture.date.indexOf('T') + 1, fixture.date.indexOf('+') - 3)
        return (
          <div key={index} className={styles.fixtureRow}>
            <div className={`${styles.fixtureTeam} ${styles.flexEnd}`}>
                <div>
                {away.name}
                </div>
                <Image alt={away.name} src={away.logo} width="50" height="29" className={styles.fixtureLogo}/>
            </div>
            <div className={styles.fixtureTime}>
                {time}
            </div>
            <div className={`${styles.fixtureTeam} ${styles.flexStart}`}>
                <Image alt={home.name} src={home.logo} width="50" height="29" className={styles.fixtureLogo}/>
                <div>
                {home.name}
                </div>
            </div>
          </div>
        )
      })}
      </div> 
)
}

export default Fixtures
