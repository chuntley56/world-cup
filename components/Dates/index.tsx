import React, { FunctionComponent } from 'react'
import styles from './styles.module.css'

type DatesType = {
  dates?: string[]
}

const Dates: FunctionComponent<DatesType> = ({ dates }) => {
  const uniqDates = [...new Set(dates)]
  const sorted = [...uniqDates].sort((a: any, b: any) => a - b)
  console.log({ dates, uniqDates, sorted })

  return (
    <div className={styles.dateContainer}>
      {sorted.map((date, i) => {
        const matchDate = new Date(date)
        const dayOfWeek = new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
        }).format(matchDate)
        const month = matchDate.getMonth() + 1
        const day = matchDate.getDate()

        // console.log({ date, matchDate, dayOfWeek, month })
        return (
          <div key={i} className={styles.dateCard}>
            <p>
              {month} / {day} <br />
              {dayOfWeek}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Dates
