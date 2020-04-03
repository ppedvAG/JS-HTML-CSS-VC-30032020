let i = 0

function Counter() {
    i++
    postMessage(i)
    setTimeout(Counter, 1000)
}

Counter()