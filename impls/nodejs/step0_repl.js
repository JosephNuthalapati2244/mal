#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

function READ(string) {
  return string
}

function EVAL(string) {
  return string
}

function PRINT(string) {
  return string
}

function rep(string) {
  let result = PRINT(EVAL(READ(string)))
  console.log(result)
}

let rl = readline.createInterface({ input, output, prompt: 'user> ' })

function exit() {
    console.log('BYE!')
    process.exit(0)
}

rl.prompt()
rl.on('line', (line) => {
  switch (line.trim()) {
    case 'q':
      exit()
    default:
      rep(`${line.trim()}`)
      break
  }
  rl.prompt()
})

rl.on('close', () => {
  exit()
})
