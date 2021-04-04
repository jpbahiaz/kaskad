import { fun } from "./functions/fun"
import { fun1, makeFun } from "./functions/makeFun"
import { p } from "./functions/pattern"
import { g } from "./functions/guard"

const sum = fun()(
    p({ b: 412 }, () => "Galba"),
    p({ b: 18 }, () => "Veloso"),
    p({ b: arg }, ({ b }) => b + 1),
    // p({ a: arg }, ({ a }) => a),
    p({ a: 12, b: arg }, ({ b }) => "douze + " + b),
    p(pattern, body)({ a: arg, b: arg }, ({ a, b }) => a + b),
)

const sub = fun1({ a: arg, b: arg}, ({ a , b }) => a - b)

const sumLessThan10 = fun(
    g(({ a, b }) => a + b < 10, ({ a, b }) => a + b + " done!"),
    g(otherwise, () => "sorry, can't sum more than 10")
)

console.log("guard:", sumLessThan10({ a: 4, b: 3 }))
console.log("guard:", sumLessThan10({ a: 14, b: 3 }))

console.log("pattern", sum({b: 18}))
console.log("pattern", sum({a: 12})({b: 18}))
const sub10 = sub({ b: 10 })
console.log("partial application:", sub10({ a: 20 }))

const testf = makeFun(pattern, fn)({test: arg, other: arg}, ({test, other}) => {
    console.log("funfa")
    return { test, other }
})

console.log(testf({ test: "uhu", other: "galba" }))
