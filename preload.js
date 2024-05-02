eth.accounts.forEach((element) => {
  personal.unlockAccount(element, "123", 0);
});

miner.setEtherbase(eth.accounts[4]);

miner.start();
