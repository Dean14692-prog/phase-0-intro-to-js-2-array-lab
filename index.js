
// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive function to append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructive function to prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructive function to remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructive function to remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Nondestructive function to return a new array with a cat appended at the end
function appendCat(name) {
  return [...cats, name];
}

// Nondestructive function to return a new array with a cat prepended at the beginning
function prependCat(name) {
  return [name, ...cats];
}

// Nondestructive function to return a new array with the last cat removed
function removeLastCat() {
  return cats.slice(0, -1);
}

// Nondestructive function to return a new array with the first cat removed
function removeFirstCat() {
  return cats.slice(1);
}

// Export functions for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
