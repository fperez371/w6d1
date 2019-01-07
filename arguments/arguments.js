function sum() {
  const args =  Array.from(arguments);
  const total = args.reduce( (acc, el) => acc += el);
  return total
}

// console.log(sumRest(1, 2, 3, 4));
// console.log(sumRest(1, 2, 3, 4, 5));

function sumRest(...args) {
  const total = args.reduce((acc, el) => acc += el);
  return total;
}

Function.prototype.myBind = function (ctx) {
  const args = Array.from(arguments).slice(1);
  const that = this;

  return function () {
    const callArgs = Array.from(arguments);
    return that.apply(ctx, args.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

// console.log(markov.says("meow", "Ned"));
// Markov says meow to Ned!
// true

// // bind time args are "meow" and "Kush", no call time args
// console.log(markov.says.myBind2(pavlov, "meow", "Kush")());
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// console.log(markov.says.myBind2(pavlov)("meow", "a tree"));
// // Pavlov says meow to a tree!
// // true

// bind time arg is "meow", call time arg is "Markov"
// console.log(markov.says.myBind2(pavlov, "meow")(markov.name));
// Pavlov says meow to Markov!
// true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind2(pavlov);
console.log(notMarkovSays("meow", "me"));
// // Pavlov says meow to me!
// // true


function curriedSum(numArgs){
  const arr = [];
  const _curriedSum = function(oneNum){
    arr.push(oneNum);
    if (arr.length >= numArgs){
      return arr.reduce( (acc, el) => acc += el);
    }
    return _curriedSum;
  };
  return _curriedSum;
}

// const answer = curriedSum(4);
// console.log(answer(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs) {
  const arr = [];
  const that = this;
  return function _curried(oneNum) {
    arr.push(oneNum);
    if (arr.length >= numArgs) {
      return that(...arr);
    }
    return _curried;
  };
};


// const sayHi = function (word) {
//   return `Says ${word}`;
// };


// const answer = sayHi.curry(4);
// answer("whatever")("test")("20");
// const finalAnswer = sayHi.curry(answer, "last");

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 