import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import api from "../../services";

import "./style.scss";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setTimeout(() => {
          setMovies(response.data);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {movies.length == 0 ? (
        <Loading />
      ) : (
        <div className="cards-wrapper">
          {movies.map((product) => {
            return (
              <Card
                title={product.title}
                img={product.image}
                price={product.price}
                id={product.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
