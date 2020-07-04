function mergeArraySet(destArr, sourceArr) {
        var arrSet = {};
        for (var i = 0; i < destArr.length; ++i) {
            arrSet[destArr[i]] = true;
        }
        for (var j = 0; j < sourceArr.length; ++j) {
            arrSet[sourceArr[j]] = true;
        }
        destArr.splice(0);
        for (var k in arrSet) {
            if (arrSet.hasOwnProperty(k)) {
                destArr.push(k);
            }
        }
        return destArr;
    }

document.write(mergeArraySet(['JIM','KELLY','ROBERT'],[7,3,4]))