const assertEqual = (actual, expected) => {
  passed = `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`
  failed = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`

  actual === expected ? console.log(passed) : console.log(failed)
}

const head = (array) => {
  return array[0]
}
head([1, 2, 3])

assertEqual(tail([1, 2, 3]), 3)
assertEqual(tail(['a', 'b', 'c']), 'c')