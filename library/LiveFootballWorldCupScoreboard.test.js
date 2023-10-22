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

  it("should give match summary", () => {
    const match1 = scoreboard.startMatch("Mexico", "Canada");
    const match2 = scoreboard.startMatch("Spain", "Brazil");
    const match3 = scoreboard.startMatch("Germany", "France");
    const match4 = scoreboard.startMatch("Uruguay", "Italy");
    const match5 = scoreboard.startMatch("Argentina", "Australia");

    match1.updateScore(0, 5);
    match2.updateScore(10, 2);
    match3.updateScore(2, 2);
    match4.updateScore(6, 6);
    match5.updateScore(3, 1);

    const summary = scoreboard.getSummary();

    expect(summary).toStrictEqual([
      "Uruguay 6 - 6 Italy",
      "Spain 10 - 2 Brazil",
      "Mexico 0 - 5 Canada",
      "Argentina 3 - 1 Australia",
      "Germany 2 - 2 France",
    ]);
  });
});
