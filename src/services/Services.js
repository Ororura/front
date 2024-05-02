import Web3 from "web3";
import abi from "./abi";

class Services {
  contractAddress = "0x56F3D99E848B3Ac5178e8970E214c714274Af732";
  web3 = new Web3(window.ethereum);
  contract = new this.web3.eth.Contract(abi, this.contractAddress);
  _wallet = "";

  setWallet(value) {
    this._wallet = value;
  }

  async getUserNFT() {
    try {
      return await this.contract.methods.getUserNFT().call({ from: this._wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async createNFT(name, desc, photo, amount, price) {
    try {
      return await this.contract.methods.createNFT(name, desc, photo, amount, price).send({ from: this._wallet });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Services();
