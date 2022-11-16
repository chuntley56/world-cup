export type FixturesData = {
  get: string
  parameters: {
    league: string
    season: string
  }
  errors: []
  results: number
  paging: {
    current: number
    total: number
  }
  response: {
    fixture: {
      id: number
      referee: string
      timezone: string
      date: string
      timestamp: number
      periods: {
        first: number | string
        second: number | string
      }
      venue: {
        id: number | string
        name: string
        city: string
      }
      status: {
        long: string
        short: string
        elapsed: number | string
      }
    }
    league: {
      id: number
      name: string
      country: string
      logo: string
      flag: string
      season: number
      round: string
    }
    teams: {
      home: {
        id: number
        name: string
        logo: string
        winner: string
      }
      away: {
        id: number
        name: string
        logo: string
        winner: string
      }
    }
    goals: {
      home: number | string
      away: number | string
    }
    score: {
      halftime: {
        home: number | string
        away: number | string
      }
      fulltime: {
        home: number | string
        away: number | string
      }
      extratime: {
        home: number | string
        away: number | string
      }
      penalty: {
        home: number | string
        away: number | string
      }
    }
  }[]
}
