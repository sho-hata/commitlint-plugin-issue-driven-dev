import { Plugin } from "@commitlint/types";
import subjectIssueNumberEmpty from "./rules/subjectIssueNumberEmpty";

const commitlintPluginIssueDrivenDev: Plugin = {
  rules: {
    "subject-issue-number-empty-rule": subjectIssueNumberEmpty,
  },
};

export = commitlintPluginIssueDrivenDev;
