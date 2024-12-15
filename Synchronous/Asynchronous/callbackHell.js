// What is callback hell 
// If yiu have multiple callback asynchronous operations, it can lead to nested callback.

function firstOperation(callback) {
    setTimeout( () => {
        console.log("First operation complete");
        callback();
    }, 1000)
}

function secondOperation(callback) {
    setTimeout( () => {
        console.log("second operation complete");
        callback();
    }, 1000)
}

function thirdOperation(callback) {
    setTimeout( () => {
        console.log("Third operation complete");
        callback();
    }, 1000)
}

// firstOperation(() => {
//    secondOperation( () => {
//         thirdOperation( () => {
//             console.log("All operations complete")
//         })
//    } )
// })

// This is call calback hell if handle nested callback.

// Step1: Avoiding callback Hell with Promises
// To manage the nested callbacks, javascript introduce Promises.

function firstOperationUsingPromise() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log("First operation complete");
            resolve("I'm promise")
        },1000)
    } )
}

function secondOperationUsingPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second operation complete");
            resolve();
        }, 1000);
    });
}

function thirdOperationUsingPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third operation complete");
            resolve();
        }, 1000);
    });
}

// firstOperationUsingPromise()
//     .then(secondOperationUsingPromise)
//     .then(thirdOperationUsingPromise)
//     .then( () => {
//     console.log("All operations completed")
// })

// Step2: This promise chain can handle with the help of async/await for better code readability and cleaner structure.
// Here's how you can do it.

   const executeOperation = async () => {
    try {
        await firstOperationUsingPromise()
        await secondOperationUsingPromise()
        await thirdOperationUsingPromise()
        console.log("All operations completed")
    }
    catch(error) {
        console.log("Error occured during the operation", error)
    }
   }

//    executeOperation() // function call

   // This is the best approach keep in mind.

   // Why using async/ await use ?

//    Improved readability (looks like synchronous code).
//    Easier to debug with proper error handling using try...catch.
//    No deeply nested .then() calls.

// Step3: If the operations are independent (Run in Parallel)

// If the operations can run simultaneously (instead of sequentially), you can use Promise.all with async/await:

async function executeOperationParallel() {
    try {
        await Promise.all([
            firstOperationUsingPromise(),
            secondOperationUsingPromise(),
            thirdOperationUsingPromise()
        ])
        console.log("All operations completed")
    }
    catch(error) {
        console.log("Error occured during the operations", error)
    }
}

executeOperationParallel()