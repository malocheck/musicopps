import {message, danger, fail} from "danger"

//Name of target branch 
const targetBranch = danger.github.pr.base.ref
message("TARGET" + targetBranch)

//Name of base branch
const baseBranch = danger.github.pr.head.ref
message("BASE" + baseBranch)

//Allowed branch name
const allowedBranchName = /^(feature|hotfix|fix)\/.*/

if(allowedBranchName.test(danger.git.branch)) {
    fail("Branch name doesn't match the required format. It should start with 'feature/', 'hotfix/', or 'fix/'.")
}

//Rules for merging to develop branch
if (targetBranch === "develop" && !(baseBranch.includes("feature/") || baseBranch.includes("hotfix/") || baseBranch.includes("fix/"))) {
    fail("The base branch name" + " " + baseBranch + "is not suitable for develop branch")
}

//Rules for merging to main branch
if (targetBranch === "main" && !(baseBranch.includes("develop/") || baseBranch.includes("hotfix/"))) {
    fail("The base branch name" + " " + baseBranch + "is not suitable for main branch")
}


