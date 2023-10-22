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

  finishMatch(match: Match) {
    if (this.matches.has(match.id)) {
      this.matches.delete(match.id);
    } else {
      throw new Error("Match not found.");
    }
  }

  getSummary() {
    const sortedMatches = [...this.matches.entries()].reverse().sort((a, b) => {
      const totalScoreA = a[1].homeScore + a[1].awayScore;
      const totalScoreB = b[1].homeScore + b[1].awayScore;

      if (totalScoreA !== totalScoreB) {
        return totalScoreB - totalScoreA;
      }

      // Sort by the order of matches (the order they were started)
      return 0; // No need for a specific order here
    });

    const summary = sortedMatches.map(
      ([_matchId, match]) =>
        `${match.homeTeam} ${match.homeScore} - ${match.awayScore} ${match.awayTeam}`
    );

    return summary;
  }
}

module.exports = { LiveFootballWorldCupScoreboard };
