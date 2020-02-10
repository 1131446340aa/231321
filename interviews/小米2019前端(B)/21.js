const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
function solution(input) {
  var arr = input.split(',')
  var arrInt = arr.map(e => parseInt(e))
  var result = 0
  var target = arrInt.pop()
  for (let i = 0; i < arrInt.length - 1; i++) {
    for (let j = i + 1; j < arrInt.length; j++) {
      if (arrInt[i] + arrInt[j] == target) {
        result += (i + j)
      }
    }
  }
}
rl.on('line', (line) => {
  console.log(solution(line))
})