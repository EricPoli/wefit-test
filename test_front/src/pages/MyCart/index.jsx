import React from "react";
import emptyCartImg from "../../assets/img/ilustration/empty_cart.svg";
import sucessImg from "../../assets/img/ilustration/sucess_buy.svg";
import Button from "../../components/Button";
import Cart from "../../components/Cart";
import api from "../../services";
import "./style.scss";

export default function MyCart() {
  const [cart, setCart] = React.useState([]);
  const [step, setStep] = React.useState(1);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const goToHome = () => {
    api.delete("/cart");
    window.location.href = "/";
    setStep(1);
  };
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.price * item.count;
    });
    setTotalPrice(total);
  };
  const handleOrder = () => {
    api.delete("/cart");
    setStep(2);
  };
  React.useEffect(() => {
    api
      .get("/cart")
      .then((response) => {
        console.log(response.data);
        setCart(response.data);
        getTotal();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [document.addEventListener("click", () => getTotal())]);

  return (
    <div className="my-cart-container">
      {cart.length === 0 && (
        <div className="msg-wrapper">
          <h2>Parece que não há nada por aqui :(</h2>
          <img src={emptyCartImg} alt="Carrinho vazio" />
          <hr />
          <Button handleClick={() => goToHome()}>Voltar</Button>
        </div>
      )}
      <div>
        {step === 1 &&
          cart.length > 0 &&
          cart.map((item) => (
            <Cart
              title={item.title}
              price={item.price}
              image={item.image}
              id={item.id}
              handleOrder={() => setStep(2)}
              count={item.count}
            />
          ))}
        {step === 1 && cart.length > 0 && (
          <>
            <hr />
            <div className="total-wrapper">
              <Button handleClick={() => handleOrder()}>
                Finalizar pedido
              </Button>
              <span>
                <p>Total</p>
                <h5>
                  {totalPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h5>
              </span>
            </div>
          </>
        )}
      </div>

      {step === 2 && (
        <div className="msg-wrapper">
          <h2>Compra realizada com sucesso!</h2>
          <img
            src={sucessImg}
            alt="Ilustração de compra realizada"
            style={{ marginBottom: "32px" }}
          />
          <Button handleClick={() => goToHome()}>Voltar</Button>
        </div>
      )}
    </div>
  );
}
