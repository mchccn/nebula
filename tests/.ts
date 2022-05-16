//@ts-nocheck

const decorator: ClassDecorator = (target) => target;

@decorator
class MyClass {
    property = 0;

    constructor() {}

    method() {
        return "foo";
    }
}

console.log(true);

/**
 * @prop {}
 */
const that = {
    foo: Infinity,
    bar: undefined,
};

that.foo = NaN;

function then(...args: unknown[]) {
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

enum MyEnum {
    Constituent = 0,
}

interface MyInterface {
    (callSignature: never): void;
    prop: MyEnum;
}

type MyType<T> = T extends string ? "string" : 0;

namespace MyNS {
    export const member = 42;
}

console.log(MyNS.member);

export { MyClass, that, then, MyType, MyInterface };
