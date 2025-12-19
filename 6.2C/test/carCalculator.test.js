const { expect } = require("chai");
const { calculateCarBuildPrice } = require("../carCalculator");

describe("calculateCarBuildPrice()", () => {

  it("should calculate correct price for V8 with metallic paint", () => {
    const result = calculateCarBuildPrice(30000, "v8", "metallic");
    expect(result).to.equal(42000);
  });

  it("should throw error for invalid engine type", () => {
    expect(() =>
      calculateCarBuildPrice(30000, "diesel", "standard")
    ).to.throw();
  });

});
