// Step1: What is promise?
/* Promise is javascript object represent the eventual completion (or failure) of an asynchronous operation
and its resulting value.

A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

function getName() {
    return new Promise((resolve) => {
        resolve(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("I'm promise")
                }, 2000)
            })
        })
    })
}

/* Handling with Promises
    If you want to handle this using standard Promises, here's how you can do it:
*/

getName().then((innerFunction) => {
    return innerFunction()
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log("Error", error)
})

// async function executeOperation() {
//     try {
//         await getName()
//     }
//     catch(error) {
//         console.log("Getting", error)
//     }
// }
// executeOperation()