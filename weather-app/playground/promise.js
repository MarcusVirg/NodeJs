var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500)
    })
}

asyncAdd(5, '10').then((res) => {
    console.log(`Result: ${res}`)
    return asyncAdd(res, 25)
}).then((res) => {
    console.log(`Result: ${res}`)
}).catch((errorMessage) => {
    console.log(`Failed: ${errorMessage}`)
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('It worked!')
//         reject('Unable to fulfill promise')
//     }, 2500)
// })

// somePromise.then((message) => {
//     console.log(`Success: ${message}`)
// }, (errorMessage) => {
//     console.log(`Failed: ${errorMessage}`)
// })