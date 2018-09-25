module.exports = function solveEquation(equation) {

  let k = equation.replace(/ /g, '').match(/[^\^]\d+/g);
  let D = Math.pow(k[1], 2) - 4 * k[0] * k[2];

  return [
    (-k[1] - Math.round(Math.sqrt(D))) / (2 * k[0]),
    (-k[1] + Math.round(Math.sqrt(D))) / (2 * k[0])
  ].sort((a, b) => a - b);
}