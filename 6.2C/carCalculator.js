function calculateCarBuildPrice(basePrice, engineType, paintFinish) {
  if (basePrice <= 0) {
    throw new Error("Invalid base price");
  }

  const enginePrices = {
    v6: 5000,
    v8: 10000,
    electric: 15000
  };

  const paintPrices = {
    standard: 0,
    metallic: 2000,
    custom: 5000
  };

  if (!enginePrices[engineType] || !paintPrices[paintFinish]) {
    throw new Error("Invalid car options");
  }

  return basePrice + enginePrices[engineType] + paintPrices[paintFinish];
}

module.exports = { calculateCarBuildPrice };
