function processUserInput(callback) {
    console.log("fetching data")
    setTimeout( () => {
        console.log("Api call")
        callback("Nasree", "Khan")
    }, 2000)
}

function getName(arg) {
    console.log('processing:',arg)

}
processUserInput((name,title) => {
    console.log("Hello this is call back", name + title)
})