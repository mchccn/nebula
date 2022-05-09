//@ts-nocheck

class MyClass {
    property = 0;

    constructor() {}

    method() {
        return "foo";
    }
}

console.log(true);

const that = {
    foo: Infinity,
    bar: undefined,
};

that.foo = NaN;

function then(...args) {
    const [one, two] = args;

    return { one, two };
}

function* generator() {
    yield* [1, 2, 3];
}

if (this) {
    then(that);
} else {
    for (let i = 0; i < Math.log10(1000000); i++) {}
}

export { MyClass, that, then };
