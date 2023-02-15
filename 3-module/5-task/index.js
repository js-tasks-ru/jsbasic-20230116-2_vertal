function getMinMax(str) {
  let nums = str.split(' ')
    .map(item => parseFloat(item, 10))
    .filter(item => !isNaN(item));
  return {
    min: Math.min(...nums),
    max: Math.max(...nums)
  }
}
