const express = require("express");
const { calculateCarBuildPrice } = require("./carCalculator");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;

/**
 * POST /api/car-build
 * Calculates final car build price
 */
app.post("/api/car-build", (req, res) => {
  const { basePrice, engineType, paintFinish } = req.body;

  try {
    const finalPrice = calculateCarBuildPrice(
      basePrice,
      engineType,
      paintFinish
    );
    res.json({ finalPrice });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});

module.exports = app;
