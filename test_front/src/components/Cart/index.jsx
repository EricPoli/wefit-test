import PropTypes from "prop-types";
import React from "react";
import TrashIcon from "../../assets/img/trash.svg";
import api from "../../services";
import "./style.scss";

export default function Cart({ title, price, image, id, count }) {
  const [countCart, setCountCart] = React.useState(count);
  const removeOneItem = () => {
    if (count >= 1) {
      setCountCart(countCart - 1);
      api.patch(`/cart/${id}`, {
        count: countCart - 1,
      });
    } else {
      api.delete(`/cart/${id}`).then(() => {
        window.location.reload();
      });
    }
  };
  const addOneItem = () => {
    setCountCart(countCart + 1);
    api.patch(`/cart/${id}`, {
      count: countCart + 1,
    });
  };
  const handleRemove = () => {
    api.delete(`/cart/${id}`).then(() => {
      window.location.reload();
    });
  };
  return (
    <div className="cart-container" key={id}>
      <span>
        <p>Produto</p>
        <p>qtd</p>
        <p>Subtotal</p>
      </span>
      <div className="info-wrapper">
        <img className="product-img" src={image} alt="Imagem do produto" />
        <div>
          <p>{title}</p>
          <p>
            {price &&
              price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
          </p>
        </div>
        <span>
          <button onClick={() => removeOneItem()}>-</button>
          <p>{countCart}</p>
          <button onClick={() => addOneItem()}>+</button>
        </span>
        <p>
          {price &&
            (countCart * price).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </p>
        <img
          src={TrashIcon}
          alt="Ícone de lixeira"
          onClick={handleRemove}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
