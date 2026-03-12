const removeFromArray = function(array, ...items) {
    return array.filter(function (element){
        return !items.includes(element)
    })
};

// Do not edit below this line
module.exports = removeFromArray;
