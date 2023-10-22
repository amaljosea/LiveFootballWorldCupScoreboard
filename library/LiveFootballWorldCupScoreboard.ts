import { v4 as uuidv4 } from "uuid";

class Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  awayScore: number;
  homeScore: number;
  constructor(homeTeam: string, awayTeam: string) {
    this.id = uuidv4();
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
  }

  updateScore(homeScore: number, awayScore: number) {
    this.homeScore = homeScore;
    this.awayScore = awayScore;
  }
}

type MyMapLikeType = Match;

class LiveFootballWorldCupScoreboard {
  matches: Map<string, MyMapLikeType>;
  constructor() {
    this.matches = new Map<string, MyMapLikeType>();
  }

  startMatch(homeTeam: string, awayTeam: string) {
    const match = new Match(homeTeam, awayTeam);
    this.matches.set(match.id, match);
    return match;
  }
}

module.exports = { LiveFootballWorldCupScoreboard };
