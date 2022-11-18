import { FunctionComponent, useEffect, useState } from 'react'
import Image from 'next/image'
import data from '../../data/mock/response.json'
import styles from './styles.module.css'
import { FixturesData } from '../../types'
import { fetchData } from '../../utils/data'

type FixturesType = {
  loaded: boolean
  fixtures: FixturesData
}

const Fixtures: FunctionComponent<FixturesType> = ({ loaded, fixtures }) => {
  // const fixtureData = data

  const dates = fixtures?.map((match) =>
    match.fixture.date.slice(0, match.fixture.date.indexOf('T'))
  )
  console.log({ dates })
  return !loaded ? (
    <p>loading...</p>
  ) : (
    <div className={styles.fixtureContainer}>
      <h1>Fixtures</h1>
      {fixtures?.map((item, index) => {
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
