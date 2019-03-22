const Cagnottes = artifacts.require("./Cagnottes.sol");
contract("cagnottes", accounts => {
  it("creer cagnotte", async () => {

    const myCagnotte = await Cagnottes.deployed();

    await myCagnotte.creerGroupe("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.ajouterMembre("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.ajouterAdmin("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.creerCanal("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.payerCanal("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.fermerCanal("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.modifierDelai("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.modifierMaxMembre("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.modifierMaxAmount("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

    await myCagnotte.modifierPriceChannel("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();
    assert.equal(storedString, "Hey there!", "The string was not stored");

  });
});
