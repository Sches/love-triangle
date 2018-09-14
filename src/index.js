/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let k, l;
  let co = 0;
  var i;
  for(i = 0; i < preferences.length; i++)
  {
    k = preferences[i]-1;
    l = preferences[k]-1;
    if(i === preferences[l]-1)
      co++;
  }
  var count = ~~(co / 3);

  return count;
};
