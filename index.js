// function to find drivers with matching names
const findMatching = function (drivers, name) {
    return drivers.filter(
        (driver) => driver.toLowerCase() === name.toLowerCase());  
};

// function to find drivers with fuzzy matching
const fuzzyMatch = function (drivers, letters) {
    return drivers.filter(
        (driver) => driver.toLowerCase().startsWith(letters.toLowerCase()));
};

// function to match names
const matchName = function (drivers, name) {
    return drivers.filter((driver) => driver.name === name);
};