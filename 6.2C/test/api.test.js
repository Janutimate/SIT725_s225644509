const request = require("supertest");
const { expect } = require("chai");
const app = require("../server");

describe("POST /api/car-build", () => {

  it("should return final car price for valid build", async () => {
    const res = await request(app)
      .post("/api/car-build")
      .send({
        basePrice: 30000,
        engineType: "electric",
        paintFinish: "custom"
      });

    expect(res.status).to.equal(200);
    expect(res.body.finalPrice).to.equal(50000);
  });

  it("should return 400 for invalid base price", async () => {
    const res = await request(app)
      .post("/api/car-build")
      .send({
        basePrice: -100,
        engineType: "v6",
        paintFinish: "standard"
      });

    expect(res.status).to.equal(400);
  });

});
