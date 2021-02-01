const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback(under,[1,4,7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log(error)
    }
    console.log(result)
})