var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, foo) {
  var newChocolateBars = ['foo', ...chocolateBars];
  return newChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift ("foo");
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, foo) {
  var newerChocolateBars = [...chocolateBars, 'foo'];
  return newerChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo) {
  chocolateBars.push("foo");
  return chocolateBars;
}

function accessElementInArray(chocolateBars) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
<<<<<<< HEAD
  return chocolateBars.slice(1);
=======
  chocolateBars = chocolateBars.slice(1);
>>>>>>> 08502e3bc055493fef6773e5041ed5c34a4ef4d4
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
<<<<<<< HEAD
  return chocolateBars.slice(0, chocolateBars.length - 1);
  
=======
  chocolateBars.slice(0, chocolateBars.length - 1);
  return chocolateBars;
>>>>>>> 08502e3bc055493fef6773e5041ed5c34a4ef4d4
}