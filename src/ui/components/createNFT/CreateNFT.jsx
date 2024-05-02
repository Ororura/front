import Container from "../../hoc/container/Container";
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/Context";

const CreateNFT = () => {
  const { createNFT } = useContext(Context);
  const handlerCreateNFT = async (e) => {
    e.preventDefault();
    const { target } = e;

    await createNFT(target.name.value, target.desc.value, target.photo.value, target.amount.value, target.price.value);
  };
  return (
    <Container>
      <Form onSubmit={handlerCreateNFT}>
        <Form.Control name="name" type="text" placeholder="Название" className="mb-3" />
        <Form.Control name="desc" type="text" placeholder="Описание" className="mb-3" />
        <Form.Control name="photo" type="text" placeholder="Фото" className="mb-3" />
        <Form.Control name="amount" type="text" placeholder="Кол-во" className="mb-3" />
        <Form.Control name="price" type="text" placeholder="Цена" className="mb-3" />
        <Button type="submit">Создать новую NFT</Button>
      </Form>
    </Container>
  );
};

export default CreateNFT;
