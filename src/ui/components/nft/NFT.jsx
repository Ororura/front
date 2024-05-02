import Container from "../../hoc/container/Container";
import { useContext } from "react";
import { Context } from "../../../core/Context";

const NFT = () => {
  const { nft } = useContext(Context);

  return (
    <div>
      {nft !== "" &&
        nft[0].map((el) => (
          <Container>
            <img src={`/assets/nfts/${el.photo}`} width="200px" style={{ borderRadius: "15px" }} alt="" />
            <p>id: {el.id}</p>
            <p>Название: {el.name}</p>
            <p>Описание: {el.desc}</p>
            {el.coll === !-1 && <p>Коллекция: {el.coll}</p>}
            <p>Цена: {el.price / 10 ** 6}</p>
            <p>Название: {el.name}</p>
            <p>Дата создания: {new Date(el.dateCreate * 1000).toISOString()}</p>
          </Container>
        ))}
    </div>
  );
};

export default NFT;
