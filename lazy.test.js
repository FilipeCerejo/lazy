const Lazy = require('./lazy');

const lazyNoFunctions = new Lazy();
 
test("Evaluate with no functions added", () => {
    expect(lazyNoFunctions.evaluate([1, 2, 3])).toEqual([1, 2, 3]);
});

test("Evaluate with empty array", () => {
    expect(lazyNoFunctions.evaluate([])).toEqual([]);
});

const lazyOneFunction = new Lazy();
lazyOneFunction.add(function timesTwo(a) { return a * 2; });

test("Evaluate one function", () => {
    expect(lazyOneFunction.evaluate([1, 2, 3])).toEqual([2, 4, 6]);
});

test("Evaluate one function, empty array", () => {
    expect(lazyOneFunction.evaluate([])).toEqual([]);
});

const lazyTwoFunctions = new Lazy();
lazyTwoFunctions.add(function timesTwo(a) { return a * 2; });
lazyTwoFunctions.add(function plus(a, b) { return a + b; }, 1);

test("Evaluate two functions", () => {
    expect(lazyTwoFunctions.evaluate([1, 2, 3])).toEqual([3, 5, 7]);
});

const lazyThreeFunctionsTwoArgs = new Lazy();
lazyThreeFunctionsTwoArgs.add(function timesTwo(a) { return a * 2; });
lazyThreeFunctionsTwoArgs.add(function plus(a, b) { return a + b; }, 1);
lazyThreeFunctionsTwoArgs.add(function plus(a, b, c) { return a - b + c; }, 3, 4);

test("Evaluate three functions, two arguments", () => {
    expect(lazyThreeFunctionsTwoArgs.evaluate([1, 2, 3])).toEqual([2, 4, 6]);
});