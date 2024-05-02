import { useContext, useEffect } from "react";
import { Context } from "../../../core/Context";
import NFT from "../../components/nft/NFT";
import CreateNFT from "../../components/createNFT/CreateNFT";

const Personal = () => {
  const { getUserNFT } = useContext(Context);
  

  useEffect(() => {
    (async () => {
      await getUserNFT();
    })();
  }, []);

  return (
    <div>
      <p>Personal</p>
      <NFT></NFT>
      <CreateNFT></CreateNFT>
    </div>
  );
};

export default Personal;
