const chai = require('chai')
const {expect} = chai;
const {createMockProvider, getWallets, deployContract} = require('ethereum-waffle');
const SimpleContratMock = require ('../build/SimpleContrat.json')
let contract
const provider = createMockProvider()
const [wallet] = getWallets(provider)

chai.use(solidity);

describe('Test SimpleContract', () => {

  beforeEach(async() => {
  contract = await deployContract(wallet, SimpleContratMock, ['Hello world']);
  })

  it('Should give a name', async() => {
    const name = await contract.test()
    expect(name).to.eq('Hello world')
  })

  it('Should set a name', async() => {
    const name = await contract.change()
    expect(name).to.equal('SHUT UP')
  })

  it('Transfer emits event', async () => {
    await expect(token.transfer(walletTo.address, 7)).to.emit(token, 'Transfer').withArgs(wallet.address, walletTo.address, 7);
  });

})
