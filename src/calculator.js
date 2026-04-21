const calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        if (b === 0) return "Division by 0 not allowed";
        else return a/b;
    }
}

export {calculator}