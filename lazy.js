class Lazy {
    fnargs = [];

    constructor() {}

    /**
     * Add function and arguments to a list
     *
     * @param {function} fn Function to add
     * @param {array} args Array of arguments to use when function called
     * @return {Lazy} Returns this object to chain function
     */
    add(fn, ...args) {
        this.fnargs.push({fn, args});
        return this;
    }

    /**
     * 
     * @param {Array} arr Array of parameteres. All added functions will be called for each parameter
     * @returns {Array} Array of calculated values
     */
    evaluate(arr) {
        let curentArr = arr;
        let nextArr;
        this.fnargs.forEach(fa => {
            nextArr = [];

            curentArr.forEach(a => {    
                let ags = fa.args.slice(); //make a copy of the array with no references
                ags.push(a); // the value always at the end
                nextArr.push(fa.fn(...ags)); //reseting the next iteration array
            });
            curentArr = nextArr;
        });
        return curentArr;
    }
}

module.exports = Lazy;
