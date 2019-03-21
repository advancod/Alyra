const Cagnottes = artifacts.require("./Cagnottes.sol");
contract("Cagnottes", accounts => {
  it("should display 5", async () => {
    const Cagnotte = await Cagnottes.deployed();

  });
});
