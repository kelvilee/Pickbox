/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle(arr) {
  const a = [...arr];
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
