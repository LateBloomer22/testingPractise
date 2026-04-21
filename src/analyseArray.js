function analyseArray(arr){
    const length = arr.length;

    if(length === 0) return "Please provide a non-emppty array";
    else {
        const max = arr.reduce((maxTillNow, currentVal) => Math.max(maxTillNow, currentVal), -Infinity);
        const sum = arr.reduce((sumTillNow, currentVal) => sumTillNow + currentVal, 0);
        const min = arr.reduce((minTillNow, currentVal) => Math.min(minTillNow, currentVal), Infinity);
        const average = sum/length;
        
        return {average, min, max, length};
    }    
}

export { analyseArray }