const EtherUnion = artifacts.require("EtherUnion");

contract("Test Lottery", async accounts => {
  it("test group name", async () => {
    let instance = await EtherUnion.deployed();
    let groupe = "groupe";
    let pseudo = "pseudo";
    let ID = "pseudo";
    let balance = await contractInstance.creerGroupe.call(groupe,pseudo);
    assert.equal(getNomGroupe(ID), 10000);
  });
});
