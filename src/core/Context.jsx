import { createContext, useState } from "react";
import Services from "../services/Services";

export const Context = createContext({});

export const ContextWrapper = ({ children }) => {
  const [wallet, setWallet] = useState("");
  const [nft, setNft] = useState("");

  const connectAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" }).then((account) => {
      setWallet(account[0]);
      Services.setWallet(account[0]);
    });
  };

  const getUserNFT = async () => {
    try {
      const data = await Services.getUserNFT();
      if (data) {
        setNft(data);
      }
      console.log(nft);
    } catch (e) {
      console.log(e);
    }
  };

  const logOut = () => {
    setWallet("");
    Services.setWallet("");
  };

  const createNFT = async (name, desc, photo, amount, price) => {
    try {
      await Services.createNFT(name, desc, photo, amount, price);
    } catch (e) {
      console.log(e);
    }
  };

  const values = { connectAccount, wallet, logOut, getUserNFT, createNFT, nft };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
