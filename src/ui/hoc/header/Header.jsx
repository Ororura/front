import { Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/Context";
import { useHistory } from "react-router-dom";

const Header = ({ children }) => {
  const { connectAccount, wallet, logOut } = useContext(Context);
  const nav = useHistory();

  const handlerLogin = async (e) => {
    e.preventDefault();
    await connectAccount();
  };

  const handlerLogOut = async (e) => {
    e.preventDefault();
    await logOut();
  };

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#c842ff" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {wallet === "" ? (
                <Nav.Link onClick={handlerLogin}>Авторизоваться</Nav.Link>
              ) : (
                <Nav.Link onClick={handlerLogOut}>Разлогиниться</Nav.Link>
              )}
              <Nav.Link
                onClick={() => {
                  nav.push("/");
                }}
              >
                Главная страница
              </Nav.Link>{" "}
              <Nav.Link
                onClick={() => {
                  nav.push("/personal");
                }}
              >
                Личный кабинет
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default Header;
