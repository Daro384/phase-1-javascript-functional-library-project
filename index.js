const myEach = (collection, callbackFunction) => {
    for (const key in collection){
        callbackFunction(collection[key])
    }
    return collection
}

const myMap = (collection, callbackFunction) => {
    const newArray = []
    for (const key in collection){
        newArray.push(callbackFunction(collection[key]))
    }
    return newArray
}

const myReduce = (collection, callback, current = 0) => {
    for (const key in collection) {
        current = callback(current, collection[key], collection)
    }
    return current
}



object = {a:1, b:2, c:3, d:4}
array = [1,2,3,4]

const sum = (total, current) => total + current * 3

console.log(myReduce(object, sum))