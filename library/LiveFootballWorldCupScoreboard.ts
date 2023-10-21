type Match = {
  homeTeam: string;
  awayTeam: string;
  awayScore: number;
};

class LiveFootballWorldCupScoreboard {
  matches: Match[];
  constructor() {
    this.matches = [];
  }

  startMatch(homeTeam: string, awayTeam: string) {
    const match = {
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
    };
    this.matches.push(match);
  }
}

module.exports = { LiveFootballWorldCupScoreboard };
