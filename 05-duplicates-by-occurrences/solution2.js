function keyDuplicates(arr) {
    let testObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (testObj[arr[i]]) {
            testObj[arr[i]] += 1;
        } else {
            testObj[arr[i]] = 1;
        }
    }
    let results = {};
    for (let key in testObj) {
        if(testObj[key] > 1) {
            if (results[testObj[key]]) {
                results[testObj[key]].push(key)
            } else {
                results[testObj[key]] = [];
                results[testObj[key]].push(key)
            }
        }
    }
    return results
}

