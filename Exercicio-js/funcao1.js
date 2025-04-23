function imprirSoma(a, b) {
    console.log(a + b)
}

imprirSoma(2, 3)
imprirSoma(2)
imprirSoma(2, 10, 4, 5, 6, 7, 8)
imprirSoma()

function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())