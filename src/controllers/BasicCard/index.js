// Convert array of objects to string
export const convert = (arrayOfObjects) => {
  let allNames = [];
  arrayOfObjects.forEach((e) => allNames.push(e.name));
  return allNames.join(", ");
};

// Capitalize the first letter of a string
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
