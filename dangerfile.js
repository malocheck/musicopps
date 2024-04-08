import {message, danger} from "danger"

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)

if(!danger.github.pr.assignee) {
    const method = danger.github.pr.base.ref
    const head = danger.github.pr.head
    message("This is method: \n - " + method)
    message("This is head: \n - " + head)
}