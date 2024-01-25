class OddNumberFinder {
    constructor() {
        this.numbers = [];
    }

    addNumber(number) {
        this.numbers.push(number);
    }

    findOddNumbers() {
        const oddNumbers = this.numbers.filter(number => number % 2 !== 0);
        return oddNumbers.length > 0 ? oddNumbers : null;
    }
}

const oddNumberFinder = new OddNumberFinder();
oddNumberFinder.addNumber(2);
oddNumberFinder.addNumber(3);
oddNumberFinder.addNumber(8);

const oddNumbers = oddNumberFinder.findOddNumbers();

if (oddNumbers !== null) {
    console.log(`odd numbers : ${oddNumbers.join(', ')}`);
} else {
    console.log("No odd numbers");
}
