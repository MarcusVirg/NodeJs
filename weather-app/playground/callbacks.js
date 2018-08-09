var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Marcus'
    }

    setTimeout(() => {
        callback(user) // calling call back function after 3 seconds
    }, 3000)
}

getUser(10, (user) => {
    // Callback function
    console.log(user)
})