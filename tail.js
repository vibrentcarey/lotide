const assertEqual = (actual, expected) => {
  passed = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`
  failed = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`

  actual === expected ? console.log(passed) : console.log(failed)
}

const tail = (array) => {
  return array.slice(1, array.length)
}

assertEqual(tail([1, 2, 3]).toString(), '2,3')
assertEqual(tail(['a', 'b', 'c']).toString(), 'b,c')
