import type { Rule } from "@commitlint/types";

const subjectIssueNumberEmpty: Rule = (parsed) => {
  const { raw } = parsed;
  const regex = /.*#[0-9]+.*/;

  const isValid = regex.test(raw);
  const errorMessage = isValid
    ? "passed"
    : "Your commit message should include issue number, please check the your commit message.";

  return [isValid, errorMessage];
};

export default subjectIssueNumberEmpty;
