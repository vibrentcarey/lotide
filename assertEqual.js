const assertEqual = (actual, expected) => {
  passed = `🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`
  failed = `✅ ✅ ✅ Assertion Failed: ${actual} !== ${expected}`

  actual === expected ? console.log(passed) : console.log(failed)
}

assertEqual("Lighthouse Labs", "Bootcamp")
assertEqual(1, 1)
