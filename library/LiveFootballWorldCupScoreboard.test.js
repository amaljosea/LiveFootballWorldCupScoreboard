import { LiveFootballWorldCupScoreboard } from "./LiveFootballWorldCupScoreboard";

describe("LiveFootballWorldCupScoreboard", () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = new LiveFootballWorldCupScoreboard();
  });

  it("should start a match", () => {
    const match1 = scoreboard.startMatch("Mexico", "Canada");
    expect(match1.homeTeam).toEqual("Mexico");
    expect(match1.awayTeam).toEqual("Canada");
    expect(match1.homeScore).toEqual(0);
    expect(match1.awayScore).toEqual(0);
  });

  it("should update the score of a match", () => {
    const match1 = scoreboard.startMatch("Mexico", "Canada");
    match1.updateScore(2, 1);
    expect(match1.homeScore).toBe(2);
    expect(match1.awayScore).toBe(1);
  });

  it("should finish a match", () => {
    const match1 = scoreboard.startMatch("Mexico", "Canada");
    scoreboard.startMatch("Spain", "Portugal");
    expect(scoreboard.matches.size).toBe(2);
    scoreboard.finishMatch(match1);
    expect(scoreboard.matches.size).toBe(1);
  });
});
