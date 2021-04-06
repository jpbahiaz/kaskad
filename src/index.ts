import { fun } from "./functions/fun"
import { fun1, makeFun } from "./functions/makeFun"
import { p } from "./functions/pattern"
import { g } from "./functions/guard"
import { Arg } from "./constants/arg"
import { otherwise } from "./constants/otherwise"

const sum = fun(
    p({ b: 412 }, () => "Galba"),
    p({ b: 18 }, () => "Veloso"),
    p({ b: Arg() }, ({ b }) => b + 1),
    p({ a: 12, b: Arg() }, ({ b }) => "douze + " + b),
    p({ a: Arg(), b: Arg() }, ({ a, b }) => a + b),
)

const sub = fun1({ a: Arg(), b: Arg()}, ({ a , b }) => a - b)

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

const testf = makeFun({test: Arg(), other: 412}, ({test, other}) => {
    console.log("funfa")
    return { test, other }
})

console.log(testf({ test: "uhu", other: 412 }))
