module.exports = function reverse (n) {
    let nn = 0;
    if (n < 0) {
        nn = n * -1;
    } else nn = n;
  let result = nn.toString().split('').reverse().join('');
  return +result;
}
