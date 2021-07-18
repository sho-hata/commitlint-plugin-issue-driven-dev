import type { Commit, RuleConfigCondition } from "@commitlint/types";
import subjectIssueNumberEmpty from "../rules/subjectIssueNumberEmpty";

const when: RuleConfigCondition = "always";
const errorMessage =
  "Your commit message should include issue number, please check the your commit message.";

describe("commit start without issue number", () => {
  it("should failed if commit start without issue number", () => {
    const value = subjectIssueNumberEmpty(
      { raw: "chore(scope) test" } as Commit,
      when
    );

    expect(value).toEqual([false, errorMessage]);
  });

  it("should failed if commit start without issue number with #", () => {
    const value = subjectIssueNumberEmpty(
      { raw: "chore(scope) 25 test" } as Commit,
      when
    );

    expect(value).toEqual([false, errorMessage]);
  });

  it("should pass if commit start with issue number", () => {
    const value = subjectIssueNumberEmpty(
      { raw: "chore(scope) #25 test" } as Commit,
      when
    );

    expect(value).toEqual([true, "passed"]);
  });

  it("should pass if commit start with issue number", () => {
    const value = subjectIssueNumberEmpty(
      { raw: "chore(scope) test #25" } as Commit,
      when
    );

    expect(value).toEqual([true, "passed"]);
  });
});
