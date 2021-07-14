const Factory = artifacts.require("PepeSwapV2Factory.sol");
const PepeToken1 = artifacts.require("PepeToken1.sol");
const PepeToken2 = artifacts.require("PepeToken2.sol");


module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  let pepe1Address, pepe2Address;
  if (network == 'mainnet') {
    pepe1Address = '';
    pepe2Address = '';
  } else {
      await deployer.deploy(PepeToken1);
      await deployer.deploy(PepeToken2);
      const pepe1 = await PepeToken1.deployed();
      const pepe2 = await PepeToken2.deployed();
      pepe1Address = pepe1.address;
      pepe2Address = pepe2.address;
  }
  await factory.createPair(pepe1Address, pepe2Address);
};
