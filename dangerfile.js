import {message, danger, fail} from "danger"

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

const baseBranch = danger.github.pr.base.ref
message("BASE" + baseBranch)

const targetBranch = danger.github.pr.head.ref
message("TARGET" + targetBranch)

if (danger.github.pr.body.length < 10) {
    fail("This pull request needs a description")
}

if (!baseBranch.includes("feature/")) {
    fail("The base branch is not eligible")
}

