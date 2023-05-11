class Calculator{
    add(a,b){
        return a+b;
    }
    subtract(a,b){
        return a-b;
    }
    divide(a,b){
        return a/b;
    }
    multiply(a,b){
        return a*b;
    }
}
module.exports ={      add: (a,b) => new Calculator().add(a,b),
    subtract: (a,b) => new Calculator().subtract(a,b),
    divide: (a,b) => new Calculator().divide(a,b),
    multiply: (a,b) => new Calculator().multiply(a,b)
};