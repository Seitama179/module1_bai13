
function  checkV(v,n,arr) {
    for (let i = 0; i < n; i++) {
        if (v === arr[i]) {
            return true;
            break;
        }
    }
    return false;
}

