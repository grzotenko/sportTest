export const seasonTempData = () => {
    return [
        {
          year: 2008,
          start: "2008-06-07",
          end: "2008-06-29",
          current: false,
          coverage: {
            fixtures: {
            events: true,
            lineups: true,
            statistics_fixtures: false,
            statistics_players: false,
            },
            standings: false,
            players: true,
            top_scorers: true,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2012,
          start: "2012-06-08",
          end: "2012-07-01",
          current: false,
          coverage: {
            fixtures: {
            events: true,
            lineups: true,
            statistics_fixtures: false,
            statistics_players: false,
            },
            standings: false,
            players: true,
            top_scorers: true,
            predictions: true,
            odds: false,
          }
        },
        {
          year: 2016,
          start: "2016-06-10",
          end: "2016-07-10",
          current: false,
          coverage: {
            fixtures: {
            events: true,
            lineups: true,
            statistics_fixtures: true,
            statistics_players: true,
            },
            standings: true,
            players: true,
            top_scorers: true,
            predictions: true,
            odds: false,
          }
        },
        {
          year: 2020,
          start: "2019-03-21",
          end: "2020-06-03",
          current: true,
          coverage: {
            fixtures: {
            events: true,
            lineups: true,
            statistics_fixtures: true,
            statistics_players: true,
            },
            standings: true,
            players: true,
            top_scorers: true,
            predictions: true,
            odds: false,
          }  
        }
    ] 
} 

export const fixtureTempData = () => {
    return (
    [
        {
            fixture: {
                id: 152569,
                referee: "Mark Clattenburg, England",
                timezone: "UTC",
                date: "2016-06-25T13:00:00+00:00",
                timestamp: 1466859600,
                periods: {
                first: 1466859600,
                second: 1466863200,
                },
                venue: {
                id: null,
                name: "Stade Geoffroy-Guichard",
                city: "Saint Etienne",
                },
                status: {
                long: "Match Finished",
                short: "PEN",
                elapsed: 120,
                }
            },
            league: {
                id: 4,
                name: "Euro Championship",
                country: "World",
                logo: "https://media.api-sports.io/football/leagues/4.png",
                flag: null,
                season: 2016,
                round: "8th Finals",
            },
            teams: {
                home: {
                id: 15,
                name: "Switzerland",
                logo: "https://media.api-sports.io/football/teams/15.png",
                },
                away: {
                id: 24,
                name: "Poland",
                logo: "https://media.api-sports.io/football/teams/24.png",
                },
            },
            goals: {
                home: 1,
                away: 1,
            },
            score: {
                halftime: {
                    home: 0,
                    away: 1,
                },
                fulltime: {
                    home: 1,
                    away: 1,
                },
                extratime: {
                home: 1,
                away: 1,
                },
                penalty: {
                home: 4,
                away: 5,
                },
            }
        }
    ]
    )
}

export const lineupTempData = () => {
    return ({
        response:[
            {
                startXI: [
                    {player:{name: "asasd",pos: "G"}},
                    {player:{name: "asasd",pos: "D"}},
                    {player:{name: "asasd",pos: "D"}},
                    {player:{name: "asasd",pos: "D"}},
                    {player:{name: "asasd",pos: "D"}},
                    {player:{name: "asasd",pos: "M"}},
                    {player:{name: "asasd",pos: "M"}},
                    {player:{name: "asasd",pos: "M"}},
                    {player:{name: "asasd",pos: "M"}},
                    {player:{name: "asasd",pos: "F"}},
                    {player:{name: "asasd",pos: "F"}},
                ]
            },
            {
                startXI: [
                    {player:{name: "asasd",pos: "G"}},
                    {player:{name: "asasd",pos: "D"}},
                    {player:{name: "asasd",pos: "D"}},
                    {player:{name: "asasd",pos: "D"}},
                    {player:{name: "asasd",pos: "D"}},
                    {player:{name: "asasd",pos: "M"}},
                    {player:{name: "asasd",pos: "M"}},
                    {player:{name: "asasd",pos: "M"}},
                    {player:{name: "asasd",pos: "M"}},
                    {player:{name: "asasd",pos: "F"}},
                    {player:{name: "asasd",pos: "F"}},    
                ]
            }
        ]
    })
}