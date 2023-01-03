function testCalculateTotalPrice() {
    const calculator = new PriceCalculator();
    const testCases = [
      {items: ["apple", "orange", "banana"], expected: 1.06},
      {items: ["apple", "apple", "apple", "apple"], expected: 2.12},
      {items: ["apple", "orange", "banana", "mango"], expected: 1.1660000000000001},
    ];
  
    for (let i = 0; i < testCases.length; i++) {
      const {items, expected} = testCases[i];
      const result = calculator.calculateTotalPrice(items);
      if (result === expected) {
        console.log(`PASS: calculateTotalPrice(${items}) returned ${result}`);
      } else {
        console.log(`FAIL: calculateTotalPrice(${items}) returned ${result}. Expected ${expected}`);
      }
    }
  }
  
  testCalculateTotalPrice();
  