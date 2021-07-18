import commitlintPluginIssueDrivenDev from "../index";

describe("commitlintPluginIssueDrivenDev", () => {
  it("should return a valid config", () => {
    expect(commitlintPluginIssueDrivenDev).toHaveProperty("rules");
    expect(
      Object.keys(commitlintPluginIssueDrivenDev.rules).length
    ).toBeGreaterThan(0);
  });
});
