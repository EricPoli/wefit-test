import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/img/cart.svg";
import { RoutesMapping } from "../../route/routesMapping";
import api from "../../services";
import "./style.scss";

const Header = () => {
  const [total, setTotal] = React.useState(0);
  // atualizar componente a cada clique na pagina
  const getCart = () => {
    api
      .get("/cart")
      .then((response) => {
        setTotal(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getCart();
  }, [
    document.addEventListener("click", () => {
      getCart();
    }),
  ]);

  return (
    <header>
      <Link to={RoutesMapping.HOME}>WeMovies</Link>
      <Link to={RoutesMapping.CART}>
        <div>
          <p>Meu Carrinho</p>
          <small>{total} itens</small>
        </div>
        <img src={CartIcon} alt="Ícone de carrinho" />
      </Link>
    </header>
  );
};

export default Header;
