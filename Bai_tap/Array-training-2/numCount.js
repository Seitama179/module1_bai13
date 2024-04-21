function numCount(a) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(a[i])) {
            counter++;
        }
    }
    return counter;

    // let count = {}; code tren mang, dang tim hieu
    // a.forEach(function (item) {
    //     if(isNaN(item)) {
    //         let str = item.toString();
    //         str.split('').forEach(char) {
    //             if(!isNaN(parseInt(char))) {
    //                 if(count[char] === undefined) {
    //                     count[char] = 1;
    //                 } else {
    //                     count[char]++;
    //                 }
    //             }
    //         }
    //
    //     }
    // })
    //return count
}

