const $left_button = document.getElementById('left_button')
const $right_button = document.getElementById('right_button')
const $counter = document.getElementById('counter')
const $generate = document.getElementById('generate')
const $result = document.getElementById('result')

let counter = 1

function randomInteger(minimum, maximum) {
    return minimum + Math.floor((maximum - minimum + 1) * Math.random())
}

$left_button.addEventListener('click', function (event) {
    counter = Math.max(counter - 1, 1);
    $counter.innerHTML = counter.toString()
})

$right_button.addEventListener('click', function (event) {
    counter = Math.min(counter + 1, 20);
    $counter.innerHTML = counter.toString()
})

$generate.addEventListener('click', function (event) {
    $result.innerHTML = randomInteger(1, counter).toString()
})