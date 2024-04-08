import {message, danger, fail} from "danger"

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

//Check the length of description
if (danger.github.pr.body.length < 10) {
    fail("This pull request needs a description")
}

//Name of target branch 
const targetBranch = danger.github.pr.base.ref
message("TARGET" + targetBranch)

//Name of base branch
const baseBranch = danger.github.pr.head.ref
message("BASE" + baseBranch)

//Rules for merging to develop branch
if (targetBranch === "develop" && !(baseBranch.includes("feature/") || baseBranch.includes("hotfix/") || baseBranch.includes("fix/"))) {
    fail("The base branch name" + " " + baseBranch + "is not suitable for develop branch")
}

//Rules for merging to main branch
if (targetBranch === "main" && !(baseBranch.includes("develop/") || baseBranch.includes("hotfix/"))) {
    fail("The base branch name" + " " + baseBranch + "is not suitable for main branch")
}
