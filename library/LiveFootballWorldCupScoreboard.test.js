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
});
