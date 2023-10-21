import { LiveFootballWorldCupScoreboard } from "./LiveFootballWorldCupScoreboard";

describe("LiveFootballWorldCupScoreboard", () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = new LiveFootballWorldCupScoreboard();
  });

  it("should start a match", () => {
    scoreboard.startMatch("Team A", "Team B");
    expect(scoreboard.matches).toHaveLength(1);
  });

  it("should update the score of a match", () => {
    scoreboard.startMatch("Team A", "Team B");
    scoreboard.updateScore(0, 2, 1);
    expect(scoreboard.matches[0].homeScore).toBe(2);
    expect(scoreboard.matches[0].awayScore).toBe(1);
  });
});
