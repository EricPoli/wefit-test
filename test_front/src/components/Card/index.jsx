import PropTypes from "prop-types";
import React from "react";
import CartIcon from "../../assets/img/add_cart.svg";
import api from "../../services";
import "./style.scss";

function Card({ title, img, price, id }) {
  const [count, setCountCart] = React.useState(0);

  const handleAddCart = () => {
    setCountCart(count + 1);
    const product = {
      title: title,
      price: price,
      image: img,
      count: count + 1,
      id: id,
    };
    if (count === 0) {
      api.post("/cart", product);
    } else {
      api.put(`/cart/${id}`, product);
    }
  };
  return (
    <div className="card" key={id}>
      <img src={img} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={() => handleAddCart()} className="btn-add">
          <span>
            <img src={CartIcon} alt="Ícone de adicionar ao carrinho" />
            <p>{count}</p>
          </span>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
