function keyDuplicates(arr) {
    arr.sort();
    let results = {};
    let current = null;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== current) {
            if (count > 1) {
                if(results[count]) {
                    results[count].push(current)
                } else {
                    results[count] = [current]
                }
            }
            current = arr[i];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 1) {
        results[count].push(current)
    }
    return results;
}

