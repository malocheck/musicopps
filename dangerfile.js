import {message, danger, fail} from "danger"

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
