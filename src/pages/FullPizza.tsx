import React from 'react';

import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';

export default function FullPizza() {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://65c5bde8e5b94dfca2e039c5.mockapi.io/items/' + id
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы.');
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit,
        sed, ducimus obcaecati, reprehenderit neque ipsa quod at numquam
        pariatur minima quis soluta culpa eaque perspiciatis distinctio vero.
        Reprehenderit, perspiciatis!
      </p>
    </div>
  );
}
