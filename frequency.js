function findElementFrequency(arr) {
    var frequency = {};

    for (var outerIndex = 0; outerIndex < arr.length; outerIndex++) {
        var currentElement = arr[outerIndex];

        frequency[currentElement] = 0;

        for (var innerIndex = 0; innerIndex < arr.length; innerIndex++) {
            if (arr[innerIndex] === currentElement) {
                frequency[currentElement]++;
            }
        }
    }

    for (var key in frequency) {
        console.log(key + ': ' + frequency[key] + ' times');
    }
}

var myArray = [1,2,2,3,4,5,5,6];
findElementFrequency(myArray);
