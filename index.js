'use strict'

const fs = require('fs')
const oboe = require('oboe')
const program = require('commander')

program
  .option('-t, --tabs', 'Use tabs instead of spaces')
  .option('-s, --space-amount <n>', 'How many spaces to use for indentation', noop => noop, 2)
  .parse(process.argv)

let inputJson
if (program.args[0]) {
  inputJson = fs.readFileSync(program.args[0])
  doIt(JSON.parse(inputJson))
}
else {
  const stdin = process.stdin
  oboe(stdin).done(doIt).fail(console.error)
}

function doIt(inputObject) {
  console.log(anyToType(inputObject, 0))
}

function arrayToType (array, indentationLevel) {
  if (array.length > 0) {
    return anyToType(array[0], indentationLevel) + "[]"
  }
  else {
    return "[]"
  }
}

function generateIndentation (amount) {
  let indentation = ""
  for (let i = 0; i < (program.tabs ? amount : amount * program.spaceAmount); i++) {
    indentation += (program.tabs ? "\t" : " ")
  }
  return indentation
}

function objectToType (object, indentationLevel) {

  let type = "{\n"
  const indentation = generateIndentation(indentationLevel + 1)
  for (const key in object) {
    const value = object[key]
    type += `${indentation}${key}: ${anyToType(value, indentationLevel + 1)},\n`
  }

  return `${type}${generateIndentation(indentationLevel)}}`
}

function anyToType (any, indentationLevel) {
  if (Array.isArray(any)) {
    return arrayToType(any, indentationLevel)
  }
  else if (any == null) {
    return "void"
  }
  else if (typeof any === "object") {
    return objectToType(any, indentationLevel)
  }
  else {
    return typeof any
  }
}
