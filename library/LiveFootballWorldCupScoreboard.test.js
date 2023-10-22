import { LiveFootballWorldCupScoreboard } from "./LiveFootballWorldCupScoreboard";

describe("LiveFootballWorldCupScoreboard", () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = new LiveFootballWorldCupScoreboard();
  });

  it("should start a match", () => {
    const match1 = scoreboard.startMatch("Mexico", "Canada");
    expect(match1.homeTeam).toEqual("Mexico");
  });

  it("should update the score of a match", () => {
    const match1 = scoreboard.startMatch("Mexico", "Canada");
    match1.updateScore(2, 1);
    expect(match1.homeScore).toBe(2);
    expect(match1.awayScore).toBe(1);
  });
});
