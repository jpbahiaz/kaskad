// put all funtions on src/functions later
function Arg() {}
const arg = new Arg()

function Otherwise() {}
const otherwise = new Otherwise()

function makeFun(pattern, fn) {
    const patternKeys = Object.keys(pattern)
    return (function nexCurried (prevArgs) {
        const prevArgsKeys = Object.keys(prevArgs)
        return function curried(nextArgs){
            const args = prevArgsKeys.reduce((prev, key) => {
                prev[key] = prevArgs[key]
                return prev
            }, nextArgs)
            const nextArgsKeys = Object.keys(nextArgs)
            if (patternKeys.length === nextArgsKeys.length){
                return fn(args)
            }
            return nexCurried(args)
        }
    })({})
}

function fun(...patterns) {
    function resultFun(args) {
        return patterns.reduce((prev, pattern) => {
            const res = pattern(args)
            return res !== undefined && prev === undefined ? res : prev
        }, undefined)
    }
    // resultFun.patterns = patterns.map(p => p.pattern)

    return reultFun 
}

const fun1 = makeFun

function p(pattern, body) {
    function executeBody(args) {
        const argsKeys = Object.keys(args)
        const keysMatch = argsKeys.reduce((prev, curr) => {
            return prev &&
                pattern[curr] !== undefined &&
                (pattern[curr] === args[curr] || pattern[curr] === arg)
        }, true)
        if (keysMatch) {
            return makeFun(pattern, body)(args)
        }
    }
    // executeBody.pattern = pattern
    return executeBody
}

function g(guard, body) {
    return function executeBody(args) {
        if (guard === otherwise || guard(args)) {
            return makeFun(args, body)(args)
        }
    }
}

const sum = fun(
    p({ b: 412 }, () => "Galba"),
    p({ b: 18 }, () => "Veloso"),
    p({ b: arg }, ({ b }) => b + 1),
    // p({ a: arg }, ({ a }) => a),
    p({ a: 12, b: arg }, ({ a, b }) => "douze + " + b),
    p({ a: arg, b: arg }, ({ a, b }) => a + b),
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

const testf = makeFun({test: arg, other: arg}, ({test, other}) => {
    console.log("funfa")
    return { test, other }
})

console.log(testf({ test: "uhu", other: "galba" }))
