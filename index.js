'use strict'

module.exports = function doIt(inputObject, spaceAmount, useTabs) {

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
    for (let i = 0; i < (useTabs ? amount : amount * spaceAmount); i++) {
      indentation += (useTabs ? "\t" : " ")
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

  return anyToType(inputObject, 0)
}
